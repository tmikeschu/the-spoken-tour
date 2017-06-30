import "react"
import { render } from "react-dom"
import routes from "./router.js"
import "./App/App.css"

render(
  routes,
  document.getElementById("root")
)
