import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { Component } from "react";
export default class NewShop extends Component {
  constructor(props) {
    super(props);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onFileChange=this.onFileChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      name: "",
      description: "",
      file: null,
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
  onFileChange = (e) => {
    this.setState({
      file: e.target.files[0],
    });
  };


  onSubmit(e) {
    e.preventDefault();
    console.log("form submitted");
    console.log(`name:${this.state.name}`);
    console.log(`description:${this.state.description}`);
    console.log(`file:${this.state.file.name}`);
    this.setState({
      name: "",
      description: "",
      file: null,
    });
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <h1>New Shop</h1>
        <label htmlFor="formFile" className="form-label"></label>
        <input className="form-control" type="file" id="formFile"  onChange={this.onFileChange}/>
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
