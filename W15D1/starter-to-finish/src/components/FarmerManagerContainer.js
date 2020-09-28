import FarmerManager from './FarmerManager';
import { hireFarmer, payFarmer } from '../actions/farmersActions';
import { getAllFarmers, getFilteredFarmers } from '../reducers/farmersSelectors';
import connect from '../connect';

const mapStateToProps = (state) => ({
  farmers: getAllFarmers(state),
  //filteredFarmers: getFilteredFarmers(state),
});



const mapDispatchToProps = (dispatch) => ({
  pay: (id) => dispatch(payFarmer(id)),
  hire: (name) => dispatch(hireFarmer(name)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FarmerManager);
