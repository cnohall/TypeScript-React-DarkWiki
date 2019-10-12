import React from 'react';
import { render } from 'react-dom';
import './App.css';
import { string } from 'prop-types';


let page;
const proxy = "https://cors-anywhere.herokuapp.com/";
const api = `${proxy}http://en.wikipedia.org/w/api.php?action=parse&section=0&prop=text&page=${page}`
// class App extends React.Component<{}, IState> {



class App extends React.Component <{}, { value: string }> {
  constructor(props:any) {
    super(props);
    
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event:any) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event:any) {
    alert('A name was submitted: ' + this.state.value); //error here
    event.preventDefault();
  }


  
  public render(){
    return (
      <div className="App">
        <header className="App-header">
        <p>
          DarkWiki by cnohall
        </p>
        <form onSubmit={this.handleSubmit}>
        <label>
          WikiPage:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        </form>
        </header>
      </div>

    );
  }
}

export default App;
