import React from "react";
import styles from "./order-details.module.css";
import logo from "../../images/id-order.svg";
import PropTypes from "prop-types";

type TPropsType = {
  orderNumber: number;
};

const OrderDetails: React.FC<TPropsType> = ({ orderNumber }) => {
  return (
    <div className={`${styles.container} `}>
      <h1 className={`${styles.h1} text text_type_digits-large pt-30 pb-8`}>
        {orderNumber}
      </h1>
      <span className="text text_type_main-medium">идентификатор заказа</span>
      <img src={logo} alt="Иконка" className={`${styles.img} pt-15 pb-15`} />
      <span className="text text_type_main-default  pb-2">
        Ваш заказ начали готовить
      </span>
      <span className="text text_type_main-default text_color_inactive pb-30">
        Дождитесь готовности на орбитальной станции
      </span>
    </div>
  );
};

OrderDetails.propTypes = {
  orderNumber: PropTypes.number.isRequired,
};

export default OrderDetails;
