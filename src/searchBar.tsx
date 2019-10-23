
function SearchBar (searchWord:string) {
    const html = `<div className="App">
    <p>
    DarkWiki by cnohall
    </p>
    <header className="App-header">

    <div className="form-style">
    <form onSubmit={this.handleSubmit}>
        WikiPage:
        <input type="text" value={${searchWord}} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
    </form>
    </div>
    </header>
    </div>`
    return html;
}

export default SearchBar;