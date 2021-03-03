import React from "react"
import ReactDOM from "react-dom"
import { CssBaseline, ThemeProvider, createMuiTheme } from "@material-ui/core"
import reportWebVitals from "./reportWebVitals"
import { Provider } from "react-redux"
import store from "./redux/store"
import App from "./App"
import { BrowserRouter } from "react-router-dom"

const theme = createMuiTheme({
	spacing: 8,
	overrides: {
		MuiCssBaseline: {
			"@global": {},
		},
	},
})

export const AppContainer = (props: any) => {
	return (
		<React.StrictMode>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<BrowserRouter>
					<Provider store={store}>
						<App />
					</Provider>
				</BrowserRouter>
			</ThemeProvider>
		</React.StrictMode>
	)
}

ReactDOM.render(<AppContainer />, document.getElementById("root"))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
