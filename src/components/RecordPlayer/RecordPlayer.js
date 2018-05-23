import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RecordPlayer.scss';

class RecordPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: props.isActive,
    };
  }

  componentDidMount() {
    const { discImgUrl } = this.props;
    const disc = this.disc;

    disc.style.backgroundImage = `url(${discImgUrl})`;
  }

  render() {
    return(
      <div className="RecordPlayer">
        <div className="RecordPlayer__player">
          <div className="RecordPlayerPlatform">
            <div
              className="RecordPlayerPlatform__disc"
              ref={(node) => { this.disc = node; }}
            >
              <div className="RecordPlayerPlatform__disc__hole" />
            </div>
          </div>
        </div>
        <div className="RecordPlayerCartrige">
          <div className="RecordPlayerCartrige__line">
            <div className="RecordPlayerCartrige__line__block" />
            <div className="RecordPlayerCartrige__line__line" />
          </div>
          <div className="RecordPlayerCartrige__platform">
            <div className="RecordPlayerCartrige__platform__needle" />
          </div>
        </div>
      </div>
    )
  }
}

RecordPlayer.propTypes = {
  isActive: PropTypes.bool,
  discImgUrl: PropTypes.string, 
};
RecordPlayer.defaultProps = {
  isActive: false,
  discImgUrl: 'http://avante.biz/wp-content/uploads/Gorillaz-HD-Wallpapers/Gorillaz-HD-Wallpapers-011.jpg',
};

export default RecordPlayer;
