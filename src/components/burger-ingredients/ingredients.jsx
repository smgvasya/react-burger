import React from 'react';
import styles from './burger-ingredients.module.css';
import {
    CurrencyIcon,
    Typography,
    Box,
    Counter,
} from '@ya.praktikum/react-developer-burger-ui-components';

  import data from '../../utils/data';

const Ingredients = ({title, type}) => {
   

    const buns = data.filter((item) => item.type === type);
    // const sauces = data.filter((item) => item.type === 'sauce');
    // const mains = data.filter((item) => item.type === 'main');
        return (
           <div className={ styles.grid }>
            <h2 className='text text_type_main-medium pb-6' >{title}</h2>
                <ul className={ styles.list } >
                    {buns.map ((item) => (
                        <li className='pr-4 pl-4'  key={item._id}>
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

export default Ingredients
