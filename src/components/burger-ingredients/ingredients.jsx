import { useMemo } from 'react';
import styles from './burger-ingredients.module.css';
import {
    CurrencyIcon,
    Counter,
} from '@ya.praktikum/react-developer-burger-ui-components';

  import data from '../../utils/data';
  import PropTypes from "prop-types";
  import {ingredientsPropTypes} from '../../utils/propTypes';

const Ingredients = ({title, type}) => {
    const content = useMemo(() => data.filter(item => item.type === type)) ;
        return (
          <>
            <h2 className='text text_type_main-medium pb-6 pt-10' >{title}</h2>
                <ul className={ styles.list }  >
                    {content.map (item => (  
                        <li className={`mr-1 ${ styles.item }`} type={type} key={item._id}>
                            <Counter count={1} size="default" extraClass="m-1" />
                            <img className='pr-4 pb-1 pl-4' src={item.image} alt={item.name} />
                            <div className={ styles.price } >
                                <span className="pt-1 pb-1 text text_type_digits-default">{item.price}</span>
                                <CurrencyIcon type="primary" />
                            </div>
                            <p className={`pt-1 pb-1 text text text_type_main-small ${ styles.name }`}>{item.name}</p>
                        </li>
                    ))}
                </ul>
          </>
        )
}

Ingredients.propTypes = {
    data: ingredientsPropTypes,
    title: PropTypes.string.isRequired,
}

export default Ingredients
