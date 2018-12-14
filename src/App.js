import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import EmojiDisplay from './components/EmojiDisplay'
import emojiList from './data/emojiList.json';

class App extends Component {
  state = {
    matchedEmojis: emojiList.map(emoji => emoji.symbol)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>emoji search</h1>
        </header>
        <SearchBar onChange={this.searchEmojis}></SearchBar>
        <EmojiDisplay matchedEmojis={this.state.matchedEmojis}></EmojiDisplay>
      </div >
    );
  }

  searchEmojis = (event) => {
    const searchTerm = event.target.value;
    if (searchTerm) {
      const matches = emojiList.filter(emoji => emoji.keywords.split(' ').includes(searchTerm))
      const matchedEmojis = matches.map(emoji => emoji.symbol);
      this.setState({
        matchedEmojis: matchedEmojis
      })
    }
    else {
      const allEmojis = emojiList.map(emoji => emoji.symbol)
      this.setState({
        matchedEmojis: allEmojis
      })
    }
  }
}

export default App;