import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchedString: '',
    };
  }



    componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      ).catch((error) => {return error.message});
  }

onSearchChanged = (event)=>{
          var searchedString = event.target.value.toLowerCase();
          this.setState(()=>{
            return {searchedString: searchedString}
          })
        }

  render(){
    var {onSearchChanged} = this;
    var {monsters, searchedString} = this.state;
    var filteredString = monsters.filter((monster)=>{
            return monster.name.toLowerCase().includes(searchedString);
          })
    return (
      <div className="App">
        <input type="search" placeholder="Search" name="search" onChange={onSearchChanged} />
      {
        filteredString.map(
          (monster) => {return <h1 key={monster.id}>{monster.name}</h1>}
          )
      }
      </div>
    );
  }
}

export default App;
