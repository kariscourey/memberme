import React from 'react';
import { handleChange } from '../common/synthetic';

class TechnicianForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            example: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {

      try {

        console.log('try block')

        } catch (e) {
            console.error(e);
          }

      }



    handleExampleChange (event) {
        const value = event.target.value;
        this.setState({example: value});
    }

    async handleSubmit(event) {
      event.preventDefault();
      console.log('handle submit here');
    }

    render() {
        return (
          <div>
            Technician form here
          </div>
    );
}
}

export default TechnicianForm;
