import React, { Component } from 'react';
import Spellbook from './Containers/spellbook.jsx';
import PreparedSpells from './Containers/prepared_spells.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Spellbook />
          </div>
          <div className="col">
            <PreparedSpells />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
