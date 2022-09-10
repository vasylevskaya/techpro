import React from "react"
import { Link } from "react-router-dom"
import { ROUTE_NAMES } from "../data/data"

const Button = ({ text, link }) => {
  return (
    <button type="button" className="button-primary sliding-border">
      <div className="button-primary_container">
        <span>
          {link
            ? <Link className="button-primary_container_text" to={ROUTE_NAMES[link]}>{ text }</Link>
            : <span className="button-primary_container_text">{ text }</span>}
        </span>
      </div>
    </button>
  )
}

export default Button
