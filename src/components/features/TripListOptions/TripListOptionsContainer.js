import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, changeTripDuration, addTripTag, removeTripTag} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // CHECK/DONE ? - add more dispatchers for other filters
  changeTripDuration: duration => dispatch(changeTripDuration(duration)),
  addTripTag: tag => dispatch(addTripTag(tag)),
  removeTripTag: tag => dispatch(removeTripTag(tag)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);





