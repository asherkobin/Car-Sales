import React from 'react';
import { connect } from 'react-redux';
import * as carSalesActions from "../actions/carSalesActions";

const AddedFeature = props => {
  return (
    <li>
      <button className="button" onClick={() => { props.removeFeature(props.feature.id) }}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
  };
};

export default connect(
  mapStateToProps,
  carSalesActions,
)(AddedFeature);
