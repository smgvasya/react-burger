import { useMemo, useContext } from "react";
import styles from "./burger-ingredients.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";

import PropTypes from "prop-types";
import { DataContext } from "../../contexts/data-context";

const Ingredients = ({ title, type, getData, id }) => {
  const { data } = useContext(DataContext);

  const content = useMemo(
    () => data.filter((item) => item.type === type),
    [data, type]
  );
  return (
    <>
      <h2 className="text text_type_main-medium pb-6 pt-10" id={id}>
        {title}
      </h2>
      <ul className={styles.list}>
        {content.map((item) => (
          <li className={`mr-1 ${styles.item}`} type={type} key={item._id}>
            <Counter count={1} size="default" extraClass="m-1" />
            <img
              className={`${styles.image} pr-4 pb-1 pl-4`}
              src={item.image}
              alt={item.name}
              onClick={() => {
                getData(item);
              }}
            />
            <div className={styles.price}>
              <span className="pt-1 pb-1 text text_type_digits-default">
                {item.price}
              </span>
              <CurrencyIcon type="primary" />
            </div>
            <p
              className={`pt-1 pb-1 text text text_type_main-small ${styles.name}`}
            >
              {item.name}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

Ingredients.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  getData: PropTypes.func.isRequired,
};

export default Ingredients;
