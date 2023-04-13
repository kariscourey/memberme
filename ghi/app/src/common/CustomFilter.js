import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export function CustomFilter() {
  return (
    <Form className="flex-form">
      <Form.Group className="mb-3" controlId="formCustomFilter">
        <Form.Control type="string" placeholder="Enter first or last name" />
      </Form.Group>

      <Button className="custom-button" variant="primary" type="submit">
        Filter
      </Button>
    </Form>
  );
}
