import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

<<<<<<< HEAD
function OrdersCard({ index, id, date, total, status }) {
=======
function OrdersCard({ index, id, date, total }) {
>>>>>>> be79a59c5395b27029c878d2e2e29006d7e16334
  return (
    <div data-testid={ `${index}-order-card-container` }>
      <h2 data-testid={ `${index}-order-number` }>{`Pedido ${id}`}</h2>
      <h3 data-testid={ `${index}-order-date` }>{moment(date).format('DD/MM')}</h3>
      <h3 data-testid={ `${index}-order-total-value` }>
        { `R$ ${total.replace('.', ',')}` }
      </h3>
<<<<<<< HEAD
      <h3 data-testid={ `${index}-order-status` }>{`${status}`}</h3>
=======
>>>>>>> be79a59c5395b27029c878d2e2e29006d7e16334
    </div>
  );
}

OrdersCard.propTypes = {
  id: PropTypes.number.isRequired,
  total: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
<<<<<<< HEAD
  status: PropTypes.string.isRequired,
=======
>>>>>>> be79a59c5395b27029c878d2e2e29006d7e16334
};

export default OrdersCard;
