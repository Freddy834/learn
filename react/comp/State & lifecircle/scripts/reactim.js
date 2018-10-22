// Добавление состояния в компонент
class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date()
		}
	}

	componentDidMount() {

	}

	componentWillUnmount() {
		
	}

	render() {
		return (
			<div>
				<h1>Hello state!</h1>
				<h2>Now is: {this.state.date.toLocaleTimeString()}.</h2>
			</div>
		);
	}
}

ReactDOM.render(
	<Clock />,
	document.getElementById('root')
);

