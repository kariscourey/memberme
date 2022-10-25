import React from 'react';

class AppointmentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            example: '',
        };

        this.handleExampleChange = this.handleExampleChange.bind(this);
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
            Appointment form here
          </div>
    );
}
}

export default AppointmentForm;
