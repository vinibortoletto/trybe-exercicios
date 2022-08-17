import React from 'react';

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

export default Order;
