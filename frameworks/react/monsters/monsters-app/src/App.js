import React, { Component } from "react";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";

class App extends Component {
  constructor() {
    super();

    this.state = {
      items: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ items: users }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { items, searchField } = this.state;

    const filteredItems = items.filter(item =>
      item.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div>
        <SearchBox
          placeholder='search monster'
          handleChange={this.handleChange}
        />
        <CardList items={filteredItems} />
      </div>
    );
  }
}

export default App;
