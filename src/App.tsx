import { Grid, Box, Container } from "@material-ui/core"
import { FC } from "react"
import { Route, RouteComponentProps } from "react-router-dom"
import { Input } from "./components/Input/Input"
import { DataTable } from "./components/DataTable/DataTable"
import { UnitTable } from "./components/UnitTable/UnitTable"

const App: FC = (props) => {
	return (
		<main>
			<Container>
				<Grid container direction="column" justify="center" alignItems="center">
					<Box mt={20}>
						<Input />
					</Box>
					<Box mt={5}>
						<Route path="/profile/:dataName" component={UnitTable} />
						<Route path="/" component={DataTable} exact={true} />
					</Box>
				</Grid>
			</Container>
		</main>
	)
}

export default App
