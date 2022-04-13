import React from 'react'
import TableContainer from "@mui/material/TableContainer"
import Table from "@mui/material/Table"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"
import TableBody from "@mui/material/TableBody"
import Paper from "@mui/material/Paper"
import {Button} from "@mui/material"

const MyPopUp = () => {
	return (
		<Paper sx={{ width: "100%" }}>
			<TableContainer sx={{ maxHeight: 440 }}>
				<Table stickyHeader aria-label="sticky table">
					<TableHead>
						<TableRow>
							<TableCell colSpan={1}>value</TableCell>
							<TableCell colSpan={1}>date</TableCell>
							<TableCell colSpan={1}>user</TableCell>
							<TableCell colSpan={1}>comment</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
					</TableBody>
				</Table>
			</TableContainer>
		</Paper>
	)
}

export default MyPopUp