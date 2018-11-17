import React, { Component } from 'react';

class AddBillForm extends Component {
  nameRef = React.createRef();
  costRef = React.createRef();

  createBill = event => {
    event.preventDefault();
    const bill = {
      name: this.nameRef.current.value,
      cost: this.costRef.current.value
    };

    this.props.addBill(bill)
    event.currentTarget.reset();
  };

  render() {
    return (
      <>
        <h2>Add a bill</h2>
        <form onSubmit={this.createBill}>
          <input name="name" type="text" ref={this.nameRef} placeholder="Name" />
          <input name="cost" type="text" ref={this.costRef} placeholder="Cost" />
          <button type="submit">+ Add Bill</button>
        </form>
      </>
    );
  }
}

export default AddBillForm;
