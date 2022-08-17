import React from 'react';
import PropTypes from 'prop-types';

class Order extends React.Component {
  render() {
    const { key, user, product, price } = this.props.order;

    return (
      <div className="order">
        <p key={key}>
          {user} bought {product} for {price.value} {price.currency}{' '}
        </p>
      </div>
    );
  }
}

Order.propTypes = {
  order: PropTypes.shape({
    key: PropTypes.number,
    user: PropTypes.string,
    product: PropTypes.string,
    price: PropTypes.shape({
      currency: PropTypes.string,
      value: PropTypes.number,
    }),
  }),
};

export default Order;
