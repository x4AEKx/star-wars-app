import { FC } from "react"
import { useSelector } from "react-redux"
import { getData } from "../../redux/appSelectors"
import {
	Table,
	TableCell,
	TableContainer,
	TableRow,
	Paper,
	makeStyles,
	TableBody,
} from "@material-ui/core"
import { Redirect } from "react-router-dom"
import { BackArrow } from "./../common/BackArrow/BackArrow"

const useStyles = makeStyles((theme) => ({
	table: {
		[theme.breakpoints.up("sm")]: {
			width: "320px",
		},
		[theme.breakpoints.up("md")]: {
			width: "920px",
		},
		[theme.breakpoints.up("lg")]: {
			width: "1240px",
		},
	},
	body: {
		maxWidth: "140px",
	},
}))

export const UnitTable: FC = (props) => {
	const classes = useStyles()
	const data = useSelector(getData)
	//@ts-ignore
	const UnitData: any = data.find((item) => item.name === props.match.params.dataName)
	//@ts-ignore
	return (
		<>
			{UnitData ? (
				<>
					<BackArrow />
					<TableContainer component={Paper}>
						<Table className={classes.table} size="medium">
							<TableBody>
								{Object.keys(UnitData).map((key) => (
									<TableRow key={key}>
										<TableCell variant="head" size="small">
											{key}
										</TableCell>
										<TableCell variant="body" size="small" className={classes.body}>
											{UnitData[key]}
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</>
			) : (
				<Redirect to="/" />
			)}
		</>
	)
}
