import React from 'react';
import { connect } from 'react-redux';
import * as carSalesActions from "../actions/carSalesActions";

const AdditionalFeature = props => {
  return (
    <li>
      <button onClick={() => props.addFeature(props.feature.id)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
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
)(AdditionalFeature);
