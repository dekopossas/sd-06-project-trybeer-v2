import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import moment from 'moment';
import TopBar from '../components/SideBarClient/TopBar';
import { getOrder } from '../services/orderDetailsService';

import './OrderDetails.css';

function OrderDetails(props) {
  const { match: { params: { id } } } = props;
  const [orders, setOrders] = useState([]);

  const loggedUser = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    getOrder(id).then((result) => setOrders(result));
  }, []);

  return (
    <div>
      { !loggedUser && <Redirect to="/login" />}
      <TopBar title="Detalhes do Pedido" />
      {
        !orders.length
          ? <div>no orders</div>
          : (
            <div className="divMain">
              <h2 data-testid="order-number">{`Pedido ${id}`}</h2>
              <h3 data-testid="order-status">{`${orders[0].status}`}</h3>
              <h3 data-testid="order-date">
                {`Data: ${moment(orders[0].createdAt).format('DD/MM')}`}
              </h3>
              {orders[0].products.map((order, index) => (
                <div key={ index }>
                  <h3 data-testid={ `${index}-product-qtd` }>
                    {`${order.sales_products.quantity}` }
                  </h3>
                  <h3 data-testid={ `${index}-product-name` }>{order.name}</h3>
                  <h3 data-testid={ `${index}-product-total-value` }>
                    {`R$ ${(order.price).replace('.', ',')}`}
                  </h3>
                </div>
              ))}
              <h2 data-testid="order-total-value">
                {`Total: R$ ${(orders[0].totalPrice).replace('.', ',')}`}
              </h2>
            </div>
          )
      }
    </div>
  );
}

export default OrderDetails;

OrderDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
