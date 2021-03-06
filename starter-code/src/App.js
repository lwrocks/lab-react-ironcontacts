import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import Contacts from "./Contacts";
import SearchBar from "./SearchBar";

class App extends Component {
  state = {
    contactsLists: contacts.slice(0, 5)
  };

  addRandomContact = () => {
    // here we find a random contact
    // and we add it to the state for contactsList

    const random = contacts[Math.floor(Math.random() * contacts.length)];

    console.log(random);

    this.setState({
      contactsLists: [random, ...this.state.contactsLists]
    });
  };

  sortByName = () => {
    this.setState({
      contactsLists: this.state.contactsLists.sort((a, b) => {
        if (a.name > b.name) return 1;
        else return -1;
      })
    });
  };

  sortByPopularity = () => {
    this.setState({
      contactsLists: this.state.contactsLists.sort((a, b) => {
        if (a.popularity > b.popularity) return 1;
        else return -1;
      })
    });
  };

  deleteContact = index => {
    // when we receive an index
    console.log(this.state.contactsLists);
    console.log(JSON.parse(JSON.stringify(this.state.contactsLists)));
    console.log("delete contact", index);
    // let currentContact = JSON.parse(JSON.stringify(this.state.contactsLists));
    // let newContact = currentContact.splice(index, 1);

    this.state.contactsLists.splice(index, 1);
    // splice
    // console.log(JSON.parse(JSON.stringify(currentContact)));

    this.setState({
      contactsLists: this.state.contactsLists
    });
    // update the state with setstate
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort By Name</button>
        <button onClick={this.sortByPopularity}>Sort By Popularity</button>

        <SearchBar />

        <Contacts
          contacts={this.state.contactsLists}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
