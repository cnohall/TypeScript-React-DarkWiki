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
    // this.handleLinkClick = this.handleLinkClick.bind(this);
    // this.changeListLinks = this.changeListLinks.bind(this);
    // this.findSubstring = this.findSubstring.bind(this);
    // this.findSearchWord = this.findSearchWord.bind(this);
  }


  handleChange(event:any) {
    this.setState({value: event.target.value});
    const listAPI = `${proxy}https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${event.target.value}`
    fetch(listAPI)
      .then(response => response.json())
      .then(Results)
      .then(data => {
        ReactDOM.render(
          <div dangerouslySetInnerHTML={{ __html: data}} />,
          document.getElementById("search_result")
        )
        // this.changeListLinks();
      })
  }


  handleSubmit(event:any) {
    const api = `${proxy}http://en.wikipedia.org/w/api.php?action=parse&format=json&section=0&prop=text&page=${this.state.value}`;
  fetch(api)
    .then(response => {
      return response.json();
    })
    .then(jsonObject => {
      if (!jsonObject || !jsonObject.parse){
        ReactDOM.render(
          <div dangerouslySetInnerHTML={{ __html: "<h5>There is no result from your search</h5>"}} />,
          document.getElementById("no_result")
        );
        return;
      }
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
          <div id="no_result"></div>
        </div>
        </header>
        <div id="search_result"></div>
      </div>

    );
  }


}



export default App;








  // handleLinkClick(searchWord:string) {
  //   console.log(searchWord);
  //   const api = `${proxy}http://en.wikipedia.org/w/api.php?action=parse&format=json&section=0&prop=text&page=${searchWord}`;
  //   fetch(api)
  //   .then(response => {
  //     return response.json();
  //   })
  //   .then(jsonObject => {
  //     let data = jsonObject.parse.text["*"];
  //     ReactDOM.render(
  //       <div dangerouslySetInnerHTML={{ __html: data}} />,
  //       document.getElementById("root")
  //     );
  //   })
  // }

  // changeListLinks (){
  //   const that = this;
  //   const lists = document.getElementsByClassName("list-group-item");
  //   for (let i = 0; i< lists.length; i++){
  //       const innerHTML = lists[i].innerHTML;
  //       const originalSubstring = that.findSubstring(innerHTML)
  //       const searchWord = that.findSearchWord(originalSubstring)
  //       const newSubstring = "";
  //       const newInnerHTML = innerHTML.replace(originalSubstring, newSubstring);
  //       lists[i].innerHTML = newInnerHTML;
  //   }
  //   return lists;
  // } 
  
  // findSubstring (innerHTML: string) {
  //   const substring = innerHTML.substring(
  //       innerHTML.indexOf('<'), 
  //       innerHTML.indexOf('>') +1
  //   );
  //   return substring
  // }
  
  // findSearchWord (innerHTML: string) {
  //   let substring = innerHTML.substring(
  //       innerHTML.indexOf('wiki/') + 5, 
  //       innerHTML.indexOf('" ')
  //   );
  //   return substring
  // }