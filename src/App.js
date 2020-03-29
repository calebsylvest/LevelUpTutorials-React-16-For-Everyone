import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {

  constructor(props) {
    super(props);
    console.log('constructor')
  }

  componentWillMount() {
    console.log('will mount')
  }

  componentDidMount() {
    console.log('mounted')
  }

  state = {
    toggle: true
  }

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Welcome text="Welcome to React Props" toggle={this.state.toggle} />

          <button onClick={this.toggle}>Show / Hide</button>
          
          {this.state.toggle &&
            <p>This should show and hide.</p>
          }
          
        </header>
      </div>
    );
  }
}

class Welcome extends Component {
  render() {
    const { text, toggle } = this.props;
    console.log(toggle);
    
    return (
      <h1 className="App-title">{text}</h1>
    )
  }
}

export default App;
