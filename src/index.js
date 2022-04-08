import React, { StrictMode} from "react"
import * as ReactDOM from "react-dom"
import App from "./App"
import Header from "./components/Header" 

ReactDOM.render(
  <StrictMode>
    <Header />
    <App />
  </StrictMode>,
  document.querySelector("#root")
)
