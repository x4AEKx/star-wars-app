import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import { Button, makeStyles } from "@material-ui/core"
import { FC } from "react"
import { useHistory } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
	button: {
		top: "2em",
		position: "fixed",
		left: "2em",
	},
}))

export const BackArrow: FC = (props) => {
	const classes = useStyles()
	const history = useHistory()

	const handleClick = () => {
		history.push("/")
	}

	return (
		<Button
			variant="contained"
			color="primary"
			className={classes.button}
			startIcon={<ArrowBackIcon />}
			onClick={handleClick}
		>
			Return to Search
		</Button>
	)
}
