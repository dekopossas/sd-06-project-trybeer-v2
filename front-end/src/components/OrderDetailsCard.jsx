import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import currencyFormat from '../utils/currencyFormat';
import convertData from '../utils/convertData';

function OrderDetailsCard({orderDetails}) {
  if (orderDetails.length > 0) {
    return (
      <div>
        <p data-testid="order-number">

          {`Pedido ${orderDetails[0].saleId}`}
        </p>
        <p data-testid="order-date">
          data do pedido:
          {convertData(orderDetails[0].saleDate)}
        </p>
        <ProductCard product={ orderDetails }  />
        <p data-testid="order-total-value">
          total do pedido:
          {' '}
          {currencyFormat(Number(orderDetails.reduce(((acc,cur) => acc + cur.totalPrice),0)))}
          {' '}
        </p>
        <hr />
      </div>);
  }
  return <p>...loading </p>;
}

OrderDetailsCard.propTypes = {
  orderDetails: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default OrderDetailsCard;
