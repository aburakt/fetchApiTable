import { useEffect, useState } from "react";
import "./index.css";

export default function App() {
	const [data, setData] = useState([]);

	const fetchData = () => {
		fetch(`https://api.orhanaydogdu.com.tr/deprem/kandilli/live`)
			.then((response) => response.json())
			.then((actualData) => {
				setData(actualData.result);
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div>
			<tbody>
				<tr>
					<th>Name</th>
					<th>Şiddet</th>
					<th>Enlem Boylam</th>
					<th>Date</th>
				</tr>
				{Object.entries(data).map((subject, i) => {
					return (
						<tr key={i}>
							<td>{subject[1].title}</td>
							<td style={{ textAlign: "center" }}>{subject[1].mag}</td>
							<td>{subject[1].lat} {subject[1].lng}</td>
							<td>{subject[1].date}</td>
						</tr>
					);
				})}
			</tbody>
		</div>
	);
}
