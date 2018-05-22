import { connect } from 'react-redux';
import RecordPlayer from './RecordPlayer';

const mapStateToProps = state => ({
  player: state.player,
});

export default connect(mapStateToProps)(RecordPlayer);
