export function handleChange (event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({[name]: value});
}
