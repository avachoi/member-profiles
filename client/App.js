import React, { useEffect, useState } from "react";
import axios from "axios";
import MemberList from "./MemberList";

const App = (props) => {
	let [members, setMembers] = useState([]);

	useEffect(() => {
		const response = axios.get("api/users");
		const people = response.data;
		setMembers(people);
	});

	// async componentDidMount() {
	// 	try {
	// 		const response = await axios.get("api/users");
	// 		const members = response.data;
	// 		this.setState({ members: members });
	// 	} catch (error) {
	// 		throw new Error("Error");
	// 	}
	// }

	return (
		<div>
			<h1>members!!</h1>
			<div className="inputBoxes">
				<form>
					<input
						placeholder="Search by name"
						name="searchName"
						// value={searchName}
						// onChange={handleChange}
					/>
					<input
						placeholder="Search by tag"
						name="searchTag"
						// value={searchName}
						// onChange={handleChange}
					/>
				</form>
			</div>

			<MemberList />

			{members[0] ? (
				<div>
					<ul>
						{members.map((member, i) => (
							<li key={i}>{member.firstName}</li>
						))}
					</ul>
				</div>
			) : (
				<div>loading</div>
			)}
		</div>
	);
};

export default App;
