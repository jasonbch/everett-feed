import React from "react"

const Form = props => (
    <form onSubmit={props.getTrails}>
        <input type="text" name="city" placeholder="Enter your City or County"/>
        <button className="text">Search</button>
    </form>
)

export default Form