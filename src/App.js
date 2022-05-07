import { Component } from "react";
import "./App.css";

import CardList from "./components/card-list/card-list.component";

import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    // this.state = {
    //   monster1: { name: "Linda" },
    //   monster2: { name: "Jacky" },
    //   monster3: { name: "Frank" },
    // };
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then(
        (users) => this.setState({ monsters: users })
        // console.log("monsters")
      );
  }

  onSearchChange = (event) => {
    // console.log(event.target.value);
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    // debugger;
    const { onSearchChange } = this;
    const filteredmonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });
    // console.log("return");

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          onchangehandler={onSearchChange}
          placeholder="search monsters"
          className="monsters-search-box"
        />
        <CardList monsters={filteredmonsters} />
      </div>
    );
  }
}

export default App;
