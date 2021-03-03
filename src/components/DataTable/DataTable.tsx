import { FC } from "react"
import { useSelector } from "react-redux"
import { getData, getValue, toggleFetching } from "../../redux/appSelectors"
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	makeStyles,
} from "@material-ui/core"
import { useHistory } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
	table: {
		[theme.breakpoints.up("sm")]: {
			width: "300px",
		},
		[theme.breakpoints.up("md")]: {
			width: "920px",
		},
		[theme.breakpoints.up("lg")]: {
			width: "1240px",
		},
	},
}))

export const DataTable: FC = (props) => {
	const data = useSelector(getData)
	const value = useSelector(getValue)
	const isFetching = useSelector(toggleFetching)

	const classes = useStyles()
	const history = useHistory()

	const handleClick = (name: any) => {
		const to = `/profile/${name}`
		history.push(to)
	}

	return (
		<div>
			{isFetching ? (
				<>...Loading</>
			) : (
				<>
					{data.length > 0 && (
						<TableContainer component={Paper}>
							<Table className={classes.table} size="medium">
								<TableHead>
									<TableRow>
										<TableCell>Name</TableCell>
										<TableCell align="right">Type</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{data.map((item: any) => {
										if (
											value.length >= 3 &&
											item.name.toLowerCase().includes(value.toLowerCase())
										) {
											let regex = new RegExp(value, "gi")
											let match = item.name.match(regex)

											if (match != null) {
												let parts = item.name.split(match[0])

												return (
													<TableRow key={item.name} hover onClick={() => handleClick(item.name)}>
														<TableCell component="th" scope="row">
															{parts[0]}
															<b>{match[0]}</b>
															{parts[1]}
														</TableCell>
														<TableCell align="right">{item.type}</TableCell>
													</TableRow>
												)
											}
										}
									})}
								</TableBody>
							</Table>
						</TableContainer>
					)}
				</>
			)}
		</div>
	)
}
