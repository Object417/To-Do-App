import { CssBaseline } from "@mui/material"
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import { Provider } from "react-redux"
import store from "./store/store"
import reportWebVitals from "./reportWebVitals"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <CssBaseline />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)

reportWebVitals(console.info)
