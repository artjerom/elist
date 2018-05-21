import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RecordPlayer.scss';

class RecordPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {
    return(
      <div className="RecordPlayer">
        <div className="RecordPlayer__player" />
        <div className="RecordPlayer__disc" />
        <div className="RecordPlayer__cartridge" />
      </div>
    )
  }
}

RecordPlayer.propTypes = {
  isActive: PropTypes.bool,
  coverUrl: PropTypes.string, 
};
RecordPlayer.defaultProps = {
  isActive: false,
  coverUrl: 'https://fsa.zobj.net/crop.php?r=56U-lN6Zll_btB4Dr4TdCAeLCiiW9UsBvhcBv7uIsqcuLLWRhak5o2zVU5Qo1PkVFRBoJQmP7xhKO7Phq8-bF5rEmfTyKQIBY_xHr850OjGL0FlU13h4ZGXTIsPjk8IGfHgS3lqRvafHuNB8',
};

export default RecordPlayer;
