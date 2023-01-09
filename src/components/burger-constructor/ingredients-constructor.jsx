import { useMemo } from 'react';
import styles from './burger-constructor.module.css';
import {
    DragIcon,
    ConstructorElement
} from '@ya.praktikum/react-developer-burger-ui-components';

  import {constructorPropTypes} from '../../utils/propTypes';
  import data from '../../utils/data';


const IngredientsConstructor = () => {
  const burgerBun = data.find(item => item.type === 'bun');
  const constituent = useMemo(() => data.filter(item => item.type !=='bun')) ;
    return (
      <>
        <div className= 'ml-8 mr-2' > 
            <ConstructorElement
              type="top"
              isLocked={true}
              text={burgerBun.name + ' (верх)'}
              price={burgerBun.price}
              thumbnail={burgerBun.image}
              index={burgerBun._id}
            />
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
                  index={item._id}
                />
              </li>
            ))}
        </ul>
        <div className='ml-8 mr-2 mt-4'>
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={burgerBun.name+ ' (низ)'}
              price={burgerBun.price}
              thumbnail={burgerBun.image}
              index={burgerBun._id}
            />
        </div>
      </>
  )
}

IngredientsConstructor.propTypes = {
  data: constructorPropTypes,
}

export default IngredientsConstructor

