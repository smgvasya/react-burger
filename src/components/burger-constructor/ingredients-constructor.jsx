import { useMemo } from 'react';
import styles from './burger-constructor.module.css';
import {
    DragIcon,
    ConstructorElement
} from '@ya.praktikum/react-developer-burger-ui-components';

import {constructorPropTypes} from '../../utils/propTypes';

const IngredientsConstructor = ({data}) => {
  const burgerBun = data.filter(item => item.name === 'Краторная булка N-200i');
  const constituent = useMemo(() => data.filter(item => item.type !=='bun'), [data]) ;
    return (
      <>
        <div className = 'ml-8 mr-2' >
        {burgerBun.map(item => (
            <ConstructorElement
              type="top"
              isLocked={true}
              text={item.name + ' (верх)'}
              price={item.price}
              thumbnail={item.image}
              key={item._id}
            />
            ))}
        </div>

        <ul className={styles.ingredient}>
            {constituent.map(item => (
              <li className={`${styles.list} mt-4 mr-2`} key={item._id}>
                <DragIcon type="primary"/>
                <ConstructorElement
                  isLocked={false}
                  text={item.name}
                  price={item.price}
                  thumbnail={item.image}
                  key={item._id}
                />
              </li>
            ))}
        </ul>
        <div className='ml-8 mr-2 mt-4'>
        {burgerBun.map(item => (
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={item.name + ' (низ)'}
              price={item.price}
              thumbnail={item.image}
              key={item._id}
            />
            ))}
        </div>
      </>
  )
}

IngredientsConstructor.propTypes = {
  ConstructorElement: constructorPropTypes,

}

export default IngredientsConstructor

