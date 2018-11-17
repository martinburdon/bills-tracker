import React, { Component } from 'react';
import sampleBills from './sample-data.js';
import AddBillForm from './components/AddBillForm.jsx';
import BillItem from './components/BillItem.jsx';

class App extends Component {
  state = {
    bills: []
  };

  addBill = bill => {
    const bills = [...this.state.bills, bill];
    this.setState({ bills });
  }

  componentDidMount() {
    this.setState({ bills: sampleBills });
  }

  render() {
    const billsList = this.state.bills.map((bill, index) => <BillItem key={index} {...bill} />);
    return (
      <>
        <AddBillForm addBill={this.addBill} />
        <ul className="bills-list">
          {billsList}
        </ul>
      </>
    );
  }
}

export default App;
