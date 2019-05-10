import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import firebase from 'firebase';
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



class CustomizedTable extends React.Component {
	state = { rows: [] };

	componentWillMount() {
		this.generateRows();
		this.listenForChanges();
		//orderReader.koppla();
	}

	listenForChanges() {
		firebase.firestore().collection('orders').onSnapshot(r => {
				this.generateRows();
		});
	}
	generateRows = async() => {
		let orders = await orderReader.fetchData();
		for(let i in orders) {
			try {
				const productSnapshot = await orders[i].product.get();
				const productData = await productSnapshot.data();
				const productName = productData.name;
				orders[i].product = productName;
			} catch (err) {
				
			}
			
		}
		this.setState({ rows: orders });
	}

	test = async() => {

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