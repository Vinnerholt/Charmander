import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import * as orderReader from '../orderReader';

const CustomTableCell = withStyles(theme => ({
  head: {
	backgroundColor: theme.palette.common.black,
	color: theme.palette.common.white,
  },
  body: {
	fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
	width: '100%',
	marginTop: theme.spacing.unit * 3,
	overflowX: 'auto',
  },
  table: {
	minWidth: 700,
  },
  row: {
	'&:nth-of-type(odd)': {
	  backgroundColor: theme.palette.background.default,
	},
  },
});

let id = 0;
function createData(doc) {
  id += 1;
  return { id, doc };
}

//let rows = [
  /*createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),*/
//];


class CustomizedTable extends React.Component {
	state = { rows: [] };

	componentWillMount() {
		this.generateRows();
	}

	generateRows = async() => {
		let orders = await orderReader.fetchData();
		for(let i in orders) {
			const productRef = await orders[i].product.get();
			const productObject = await productRef.data();
			const productName = productObject.name;
			orders[i].product = productName;
		}
		this.setState({ rows: orders });
	}
	
	render() {
		return (
			<Paper className={this.props.classes.root}>
			  <Table className={this.props.classes.table}>
				<TableHead>
				  <TableRow>
					<CustomTableCell align="right">Product</CustomTableCell>
					<CustomTableCell align="right">Buyer</CustomTableCell>
					<CustomTableCell align="right">Amount</CustomTableCell>
				  </TableRow>
				</TableHead>
				<TableBody>
				  {this.state.rows.map(row => (
					<TableRow className={this.props.classes.row} key={row.amount}>
						<CustomTableCell align="right">{row.product}</CustomTableCell>
					  <CustomTableCell align="right">{row.buyer}</CustomTableCell>
					  <CustomTableCell align="right">{row.amount}</CustomTableCell>
					</TableRow>
				  ))}
				</TableBody>
			  </Table>
			</Paper>
		  );
	}
	
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);