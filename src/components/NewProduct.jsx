import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './NewProduct.css'
function NewProduct() {
    return (
        <Form>
            <h1>New Product</h1>
            <label for="formFile" class="form-label"></label>
            <input class="form-control" type="file" id="formFile"></input>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Name" />
                <Form.Control type="text" placeholder="Description" />
                <Form.Control type="text" placeholder="Category" />
                <Form.Control type="text" placeholder="Quantity" />
                <Form.Control type="text" placeholder="Price" />
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

export default NewProduct;