import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { DATA } from "../data/data";
import { nanoid } from "nanoid";
import {useState} from "react"

const setId = () => {
	let id = nanoid();
	return id;
};

const MyTable = () => {
	const [regions, setRegions] = useState(Object.entries(DATA))

	const getValueCell = (yearsObj) => {
		let result = []
		if (Object.entries(yearsObj)[0][0] === '2017') {
			Object.values(Object.entries(yearsObj)[0][1]).forEach(item => {
				result.push(item)
			})
		} else {
			result.push('', '', '')
		}
		if (Object.entries(yearsObj)[1][0] === '2018') {
			Object.values(Object.entries(yearsObj)[1][1]).forEach(item => {
				result.push(item)
			})
		} else {
			result.push('', '', '')
		}
		if (Object.entries(yearsObj)[2] !== undefined) {
			Object.values(Object.entries(yearsObj)[2][1]).forEach(item => {
				result.push(item)
			})
		}
		if (Object.entries(yearsObj)[1][0] === '2019') {
			Object.values(Object.entries(yearsObj)[1][1]).forEach(item => {
				result.push(item)
			})
		} else {
			result.push('', '', '')
		}
		return result
	}

	const handlerCell = () => {
		window.open('/popup', 'pop-up', 'width=800,height=800');
	}

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
							<TableCell colSpan={3} align="center">
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
						{
							regions.map(region => (
								<TableRow key={setId()}>
									<TableCell key={setId()}>{region[0]}</TableCell>
									{
										getValueCell(region[1].G).map(item => (
											item !== ''
												?
												<TableCell onClick={handlerCell} key={setId()}>{item.value}, {item.dateRelease}</TableCell>
												:
												<TableCell onClick={handlerCell} key={setId()}/>
										))
									}
								</TableRow>
							))
						}
					</TableBody>
				</Table>
			</TableContainer>
		</Paper>
	);
};

export default MyTable;
