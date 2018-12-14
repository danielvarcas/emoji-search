import React from 'react';
import PropTypes from 'prop-types';

const EmojiDisplay = (props) => (
  <React.Fragment>
    {props.matchedEmojis.map(emoji => emoji)}
  </React.Fragment>
)

EmojiDisplay.propTypes = {
  matchedEmojis: PropTypes.array
}

export default EmojiDisplay;