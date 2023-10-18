import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function NewShop() {
  return (
    <Form>
        <h1>New Shop</h1>
        <label for="formFile" class="form-label"></label>
  <input class="form-control" type="file" id="formFile"></input>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Name" />
        <Form.Control type="text" placeholder="Description" />
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

export default NewShop;