import styles from "./feed-order-info.module.css";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { OrderIngredient, OrderIngredients } from "./order-info-ingredient";
import { status } from "../../utils/constants";
import PropTypes from "prop-types";

export const OrderInfoItem = ({ order }) => {
  const location = useLocation();
  const ingredients = useSelector((state) => state.ingredients.data);

  const totalPrice = order.ingredients.reduce(
    (acc, id) => acc + ingredients.find((item) => item._id === id).price,
    0
  );

  return (
    <Link
      to={`${location.pathname}/${order._id}`}
      state={{ background: location }}
      className={styles.orderInfoItem}
    >
      <div className={styles.info}>
        <span className="text text_type_digits-default">{`#${order.number}`}</span>
        <FormattedDate
          className="text text_type_main-default text_color_inactive"
          date={new Date(order.createdAt)}
        />
      </div>
      <h2 className="text text_type_main-medium">{order.name}</h2>

      <p
        className={`text text_type_main-default ${
          order.status === "done" && styles.orderNumberDone
        }`}
      >
        {status[order.status]}
      </p>

      <div className={`${styles.ingredientsInfo}`}>
        <div className={styles.orderIngredients}>
          {order.ingredients.slice(0, 6).map((id, index) => {
            if (index === 5) {
              return (
                <OrderIngredient
                  key={index}
                  id={id}
                  index={index}
                  length={order.ingredients.length}
                />
              );
            } else if (index < 5) {
              return <OrderIngredients key={index} id={id} index={index} />;
            }
          })}
        </div>

        <span className={`${styles.totalPrice} text text_type_digits-medium`}>
          {totalPrice}
          <CurrencyIcon type="primary" />
        </span>
      </div>
    </Link>
  );
};

OrderInfoItem.propTypes = {
  order: PropTypes.object.isRequired,
};
