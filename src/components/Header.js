import React from 'react';
import { connect } from 'react-redux';

const Header = ({ car, additionalPrice }) => {
  return (
    <div>
      <figure className="image is-128x128">
        <img src={car.image} alt={car.name} />
      </figure>
      <h2>{car.name}</h2>
      <p>Base Price: ${car.price}</p>
      <p>Options: ${additionalPrice}</p>
      <p>Out-The-Door: ${car.price + additionalPrice}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    additionalPrice: state.additionalPrice
  };
};

export default connect(
  mapStateToProps,
)(Header);
