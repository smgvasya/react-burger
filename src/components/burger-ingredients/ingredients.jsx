import React, { useMemo } from 'react';
import styles from './burger-ingredients.module.css';
import {
    CurrencyIcon,
    Typography,
    Box,
    Counter,
} from '@ya.praktikum/react-developer-burger-ui-components';

  import data from '../../utils/data';
  import PropTypes from "prop-types";
  import ingredientsPropTypes from '../../utils/propTypes';

const Ingredients = ({title, type}) => {
    const content = useMemo(() => data.filter((item) => item.type === type)) ;

        return (
           <div className={ styles.grid }>
            <h2 className='text text_type_main-medium pb-6' >{title}</h2>
                <ul className={ styles.list } >
                    {content.map ((item) => (
                        <li className='pr-4 pl-4' type={type} key={item._id}>
                        <Counter count={1} size="default" extraClass="m-1" />
                        <img className='pt-6 pb-10' src={item.image} alt={item.name} />
                        <div>
                        <span className="pt-1 pb-1 text text_type_digits-default">{item.price}</span>
                        <CurrencyIcon type="primary" />
                        </div>
                        <p className="pt-1 pb-1 text text_type_digits-default">{item.name}</p>
                    </li>
                    ))}
                </ul>
           </div>
        )
}

Ingredients.propTypes = {
    data: ingredientsPropTypes,
    title: PropTypes.string.isRequired,
}

export default Ingredients
