import React from 'react';
// import { render } from 'react-dom';
import './App.css';
import { string } from 'prop-types';
import ReactDOM from 'react-dom'
// import jsonToHtml from ''

let page;
const proxy = "https://cors-anywhere.herokuapp.com/";


class App extends React.Component <{}, { value: string }> {
  constructor(props:any) {
    super(props);
    
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log( this.handleSubmit)
  }

  handleChange(event:any) {
    this.setState({value: event.target.value});
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
      return <div dangerouslySetInnerHTML={data}></div>;
    })
    .then(HTML => {
      console.log(HTML)
      ReactDOM.render(HTML, document.getElementById('root'))
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
              <input type="text" value={this.state.value} onChange={this.handleChange} >
              </input>
            <input type="submit" value="Search" />
          </form>
        </div>
        </header>
      </div>

    );
  }
}



export default App;
