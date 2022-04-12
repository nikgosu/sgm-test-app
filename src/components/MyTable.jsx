import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { DATA } from "../data/data";
import { nanoid } from "nanoid";

const MyTable = () => {
	const setId = () => {
		let id = nanoid();
		return id;
	};

	return (
		<Paper sx={{ width: "100%" }}>
			<TableContainer sx={{ maxHeight: 440 }}>
				<Table stickyHeader aria-label="sticky table">
					<TableHead>
						<TableRow>
							<TableCell rowSpan={2}>Regions</TableCell>
							<TableCell colSpan={3} align="center">
								2017
							</TableCell>
							<TableCell colSpan={3} align="center">
								2018
							</TableCell>
							<TableCell colSpan={4} align="center">
								2019
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>xx</TableCell>
							<TableCell>yy</TableCell>
							<TableCell>zz</TableCell>
							<TableCell>xx</TableCell>
							<TableCell>yy</TableCell>
							<TableCell>zz</TableCell>
							<TableCell>xx</TableCell>
							<TableCell>yy</TableCell>
							<TableCell>zz</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{Object.entries(DATA).map((region) => (
							<TableRow key={setId()}>
								<TableCell key={setId()}>{region[0]}</TableCell>
								{Object.entries(Object.values(region[1])[0]).map((year) => (
									<>
										{
											year[0] === '2017'
											?
												Object.values(year[1]).map(item => (
													<TableCell key={setId()}>{item.value}, {item.dateRelease}</TableCell>
												))
											:
											year[0] === '2018'
											?
												Object.values(year[1]).map(item => (
													<TableCell key={setId()}>{item.value}, {item.dateRelease}</TableCell>
												))
											:
											year[0] === '2019'
											?
												Object.values(year[1]).map(item => (
													<TableCell key={setId()}>{item.value}, {item.dateRelease}</TableCell>
												))
											: console.log(false)
										}
									</>
								))}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Paper>
	);
};

export default MyTable;

// {Object.entries(DATA).map(region => (
// 	<TableRow key={region[0]}>
// 		<TableCell key={region[0]}>{region[0]}</TableCell>
// 		{Object.entries(Object.values(region[1])[0]).map(year =>
// 			(
// 				year[0] === '2017'
// 					?
// 					Object.values(year[1]).map(item => (
// 						<TableCell key={setId()}>{item.value}, {item.dateRelease}</TableCell>
// 					))
// 					:
// 					year[0] === '2018'
// 						?
// 						Object.values(year[1]).map(item => (
// 							<TableCell key={setId()}>{item.value}, {item.dateRelease}</TableCell>
// 						))
// 						: Object.values(year[1]).map(item => (
// 							<TableCell key={setId()}/>
// 						))
// 			)
// 		)
// 		}
// 	</TableRow>
// ))}