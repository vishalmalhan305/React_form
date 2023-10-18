import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { Component } from "react";

export default class NewShop extends Component {
  constructor(props) {
    super(props);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      name: "",
      description: "",
    }
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    console.log("form submitted");
    console.log(`name:${this.state.name}`);
    console.log(`description:${this.state.description}`);
    this.setState({
      name: "",
      description: "",
    });
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <h1>New Shop</h1>
        <label htmlFor="formFile" className="form-label"></label>
        <input className="form-control" type="file" id="formFile" />
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Name" onChange={this.onChangeName} value={this.state.name} />
          <Form.Control type="text" placeholder="Description" onChange={this.onChangeDescription} value={this.state.description} />
        </Form.Group>
        <div>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          {' '}
          <Button variant="primary" type="button">
            Cancel
          </Button>
        </div>
      </Form>
    );
  }
}
