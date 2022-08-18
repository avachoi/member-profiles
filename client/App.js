import React from "react";
import axios from "axios";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			members: [],
		};
	}
	async componentDidMount() {
		try {
			const response = await axios.get("api/users");
			const members = response.data;
			this.setState({ members: members });
		} catch (error) {
			throw new Error("Error");
		}
	}
	render() {
		const { members } = this.state;
		return (
			<div>
				<h1>members</h1>

				{members[0] ? (
					<div>
						<ul>
							{members.map((member) => (
								<li>{member.firstName}</li>
							))}
						</ul>
					</div>
				) : (
					<div>loading</div>
				)}
			</div>
		);
	}
}

export default App;
