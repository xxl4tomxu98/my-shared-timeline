import React from 'react';
import store from './store';

const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => (
  class extends React.Component {
    render() {
      let stateProps = {};
      if (mapStateToProps) {
        stateProps = mapStateToProps(store.getState(), this.props);
      }

      let dispatchProps = {};
      if (mapDispatchToProps) {
        dispatchProps = mapDispatchToProps(store.dispatch, this.props);
      }

      const propsToSpread = Object.assign({}, this.props, stateProps, dispatchProps);

      return (
        <WrappedComponent {...propsToSpread} />
      );
    }

    componentDidMount() {
      this.unsubscribe = store.subscribe(() => {
        this.forceUpdate();
      });
    }

    componentWillUnmount() {
      if (this.unsubscribe) {
        this.unsubscribe();
      }
    }
  }
);

export default connect;
