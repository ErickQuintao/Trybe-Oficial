// arquivo Order.js
import React from 'react';

class Order extends React.Component {
  render() {
    const { user, product, price } = this.props.order;

    return (
      <div className="order">
        <p> {user} bought {product} for {price.value} {price.currency} </p>
      </div>
    );
  }
}
Order.propTypes = {
	user: PropTypes.string.isRequired,
	product: PropTypes.string.isRequired,
	value: PropTypes.number,
	currency: PropTypes.string.isRequired 
};
Order.defaultProps= {
	user: 'Erro no user',
	product:'Erro no product',
	value: 'Erro no valor',
	currency: 'erro no curency' 
}
export default Order;