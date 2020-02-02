import React from "react"

import Titles from "./components/Titles"
import Form from "./components/Form"
import Hike from "./components/Hike"


class App extends React.Component {
  state = {
    id: undefined,
    error: undefined,
    email: undefined
  }

  getTrails = async (event) => {
    event.preventDefault()
    
    const city = event.target.elements.city.value

    if (city) {
      this.setState({
        id: city,
        error: ""
      })
    } else {
      this.setState({
        id: undefined,
        error: "Please enter a value"
      })
    }
  }

  getPublic = async (event) => {
    event.preventDefault()
    const publicState = event.target.checked;
    console.log(publicState)

  }

  getSafety = async (event) => {
    event.preventDefault()

    console.log("safety")

  }

  getWeather = async (event) => {
    event.preventDefault()

    console.log("weather")

  }

  getEmergency = async (event) => {
    event.preventDefault()

    console.log("emergency")

  }

  getTraffic = async (event) => {
    event.preventDefault()

    console.log("traffic")

  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="row-sm-5 title-container">
              <Titles />
            </div>
            <div className="row-xs-7 form-container">
              <Form getTrails={this.getTrails}/>
              <Hike 
                id={this.state.id}
                subcribe={this.subcribe}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App