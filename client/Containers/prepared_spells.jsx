import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slot from '../Components/spell_slot.jsx';
import SlotEditor from '../Components/slot_editor.jsx';
import RestButtons from '../Components/rest_buttons.jsx';

// initialState: [
//   { id: nanoid(), slotOne: { spell: 'empty', used: false } },
//   { id: nanoid(), slotTwo: { spell: 'empty', used: false } },
// ]

// const mapStateToProps = (state) => ({
//   totalMarkets: state.markets.totalMarkets,
//   totalCards: state.markets.totalCards,
// });

class PreparedSpells extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="preparedSpells">
        <h1>Prepared Spells</h1>
        <p>
          <Slot />
        </p>
        <p>
          <Slot />
        </p>
        <p>
          <SlotEditor />
        </p>
        <p>
          <RestButtons />
        </p>
      </div>

    );
  }
}

export default connect(null, null)(PreparedSpells);
