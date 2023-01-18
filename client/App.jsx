import React, { Component } from 'react';
import Spellbook from './Containers/spellbook.jsx';
import PreparedSpells from './Containers/prepared_spells.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="main">
        <Spellbook />
        <PreparedSpells />
      </div>
    );
  }
}

export default App;
