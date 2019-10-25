import Results from "./API/Results.js"
import React from 'react';
import './App.css';
import ReactDOM from 'react-dom'
const proxy = "https://cors-anywhere.herokuapp.com/";

class App extends React.Component <{}, { value: string }> {
  constructor(props:any) {
    super(props);
    

    this.state = {value: ''};
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event:any) {
    this.setState({value: event.target.value});
    const api = `${proxy}https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${event.target.value}`
    fetch(api)
      .then(response => response.json())
      .then(Results)
      .then(data => {
        console.log(data)
        ReactDOM.render(
          <div dangerouslySetInnerHTML={{ __html: data}} />,
          document.getElementById("search_result")
        )
      })
  }


  handleSubmit(event:any) {
    // alert('A name was submitted: ' + this.state.value); //error here
    const api = `${proxy}http://en.wikipedia.org/w/api.php?action=parse&format=json&section=0&prop=text&page=${this.state.value}`;
  fetch(api)
    .then(response => {
      return response.json();
    })
    .then(jsonObject => {
      let data = jsonObject.parse.text["*"];
      ReactDOM.render(
        <div dangerouslySetInnerHTML={{ __html: data}} />,
        document.getElementById("root")
      );
    })
    event.preventDefault();
  }


  
  public render(){
    return (
      <div className="App">

        <p>
          DarkWiki by cnohall
        </p>
        <header className="App-header">

        <div className="form-style">
          <form onSubmit={this.handleSubmit}>
              WikiPage:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
              <input type="submit" value="Submit" />
          </form>
        </div>
        </header>
      </div>

    );
  }
}



export default App;


