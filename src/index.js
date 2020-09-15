import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  render() {
    return(
      <div>
        <Header 
          id="14"
          name={{bloons: "Farley", tines: "Oopsies"}}/>
        <Greeting />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <p>Welcome, {this.props.name.tines}!!!</p>
      </header>
    )
  }
}

class Greeting extends React.Component {
  render() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if (hours < 12) {
      timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon"
    } else {
      timeOfDay = "night"
    }

    return (
      <div>
        <h1>Good {timeOfDay}, dudes!!!</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
