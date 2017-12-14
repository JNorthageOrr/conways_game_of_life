import React from 'react';

class Boardsize extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: '10x10'};

		this.handleChange = this.handleChange.bind(this); 
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	componentDidMount(){

	}
	handleChange(event) {
		this.setState({value: event.target.value});
	}
	handleSubmit(event) {
		event.preventDefault();
		this.setState({value: event.target.value});
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Pick board size: 
					<select value={this.state.value} onChange={this.handleChange}>
						<option value="10">10x10</option>
						<option value="20">20x20</option>
					</select>
				</label>
				<input type="submit" value="set" />
			</form>

		)
	}
}

Boardsize.propTypes = {};

export default Boardsize;