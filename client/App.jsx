import React, { Component } from 'react';
import Spellbook from './Containers/spellbook.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="main">
        <Spellbook />
      </div>
    );
  }
}

export default App;
