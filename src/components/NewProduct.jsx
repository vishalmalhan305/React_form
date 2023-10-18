import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { Component } from 'react';

export default class NewProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      category: '',
      quantity: '',
      price: '',
    };
  }

  onChangeDescription = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  onChangeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  onChangeCategory = (e) => {
    this.setState({
      category: e.target.value,
    });
  };

  onChangeQuantity = (e) => {
    this.setState({
      quantity: e.target.value,
    });
  };

  onChangePrice = (e) => {
    this.setState({
      price: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted');
    console.log(`name:${this.state.name}`);
    console.log(`description:${this.state.description}`);
    console.log(`category:${this.state.category}`);
    console.log(`quantity:${this.state.quantity}`);
    console.log(`price:${this.state.price}`);
    this.setState({
      name: '',
      description: '',
      category: '',
      quantity: '',
      price: '',
    });
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <h1>New Product</h1>
        <label htmlFor="formFile" className="form-label"></label>
        <input className="form-control" type="file" id="formFile" />
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Name"
            onChange={this.onChangeName}
            value={this.state.name}
          />
          <Form.Control
            type="text"
            placeholder="Description"
            onChange={this.onChangeDescription}
            value={this.state.description}
          />
          <Form.Control
            type="text"
            placeholder="Category"
            onChange={this.onChangeCategory}
            value={this.state.category}
          />
          <Form.Control
            type="text"
            placeholder="Quantity"
            onChange={this.onChangeQuantity}
            value={this.state.quantity}
          />
          <Form.Control
            type="text"
            placeholder="Price"
            onChange={this.onChangePrice}
            value={this.state.price}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        {' '}
        <Button variant="primary" type="submit">
          Cancel
        </Button>
      </Form>
    );
  }
}
