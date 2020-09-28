import connect from '../connect';
import {
  addFruit,
  addFruits,
  sellFruit,
  sellOut,
} from '../actions/fruitActions';
import FruitManager from './FruitManager';
import { getDistinctFruit } from '../reducers/fruitsSelectors';

const mapStateToProps = (state) => ({
  fruit: state.fruit,
  distinctFruit: getDistinctFruit(state),
});

const mapDispatchToProps = (dispatch) => ({
  add: (fruit) => dispatch(addFruit(fruit)),
  addBulk: (fruit) => dispatch(addFruits(fruit)),
  sell: (fruit) => dispatch(sellFruit(fruit)),
  sellAll: () => dispatch(sellOut()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FruitManager);
