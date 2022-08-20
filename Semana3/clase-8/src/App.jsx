import React, { Component } from 'react'
import Button from './Button'
import "./App.css";

let colors = ["RED","BLUE","YELLOW", "GREEN","ORANGE","MAGENTA","BROWN","LIME"]
export default class App extends Component {

  state = {
    colors : colors,
  }

  shuffle = ()=> {
        this.setState(prevState => {
            return {
             colors : prevState.colors.sort( () => Math.random() < 0.5? 1 : -1)
            }
        })
  }

  
  render() {
    return (
      <div className="container">
        <div className="panel">
          {this.state.colors.map(color => <div key={color} className={color}>{color}</div>)}
        </div>
        <Button fn={this.shuffle} />
      </div>

    )
  }
}
