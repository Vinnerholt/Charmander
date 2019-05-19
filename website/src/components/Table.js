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


class CustomizedTable extends React.Component {
	state = {
		rows: [],
	};

	componentWillMount() {
		this.generateRows();
		this.listenForChanges();
	}

	/**
	 * Initializes the app to check for changes on the database
	 */
	listenForChanges() {
		// re-generates rows whenever something in the collection 'orders' changes.
		firebase.firestore().collection('orders').onSnapshot(r => {
			this.generateRows();
		});
	}
	generateRows = async () => {
		//Creates a unique key for each row
		let rowKey = 0;
		//Fetches the orders from firebase
		let orders = await orderReader.fetchData();

		for (let i in orders) {
			orders[i].rowKey = rowKey;
			rowKey++;
			//Since the product(s) in the order is a reference to a product, the product
			//in question must be fetched from firebase aswell.
			try {
				for (let j in orders[i].order) {
					//For every product in the order
					const productSnapshot = await orders[i].order[j].product.get();
					const productData = await productSnapshot.data();
					const productName = productData.name;
					orders[i].order[j].product = productName;
				}
			} catch (err) {
				console.log(err);
			}
		}
		this.setState({ rows: orders });
	}

	//Sorts the orders by postalCode
	sortByPostalCode(orders) {
		let sorted = {};
		for (let i in orders) {
			let postalCode = orders[i].postalCode;
			if (sorted[postalCode] != null) {
				sorted[postalCode].push(orders[i]);
			} else {
				sorted[postalCode] = [orders[i]];
			}
		}
		return sorted;
	}

	renderProductList(orders) {
		if (orders == null)
			return;
		if (orders != null) {
			if (orders.length > 0) {
				return (
					orders.map(order => (
						<CustomTableCell align="right">{order.amount + " st. " + order.product}</CustomTableCell>
					))
				);
			}
		}
	}

	renderRow(row) {
		if (row.rowKey != null) {
			return (<TableRow className={this.props.classes.row} key={row.rowKey}>
				<CustomTableCell align="right">
					{this.renderProductList(row.order)}
				</CustomTableCell>
				<CustomTableCell align="right">{row.buyer}</CustomTableCell>
				<CustomTableCell align="right">{row.amount}</CustomTableCell>
				<CustomTableCell align="right">{row.postalCode}</CustomTableCell>
			</TableRow>);
		}
	}

	renderRows(rows) {
		if (rows == null) {
			return;
		}
		if (rows.length <= 0) {
			return;
		}
		let sortedRows = this.sortByPostalCode(rows);
		return Object.values(sortedRows).map(postalCode => (
			postalCode.map(row => (
				this.renderRow(row)
			))
		));
	}

	render() {
		return (
			<Paper className={this.props.classes.root}>
				<Table className={this.props.classes.table}>
					<TableHead>
						<TableRow>
							<CustomTableCell align="center">Product(s)</CustomTableCell>
							<CustomTableCell align="right">Buyer</CustomTableCell>
							<CustomTableCell align="right">Amount</CustomTableCell>
							<CustomTableCell align="right">Postal Code</CustomTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{this.renderRows(this.state.rows)}
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