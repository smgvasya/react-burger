import React from 'react';
import styles from './burger-ingredients.module.css';
import {
    Tab,
} from '@ya.praktikum/react-developer-burger-ui-components';

 const IngredientsTabs = () => {
    const [current, setCurrent] = React.useState('bun')
    return (
      <div className={ styles.tabs }>
        <Tab value={'bun'} active={current === 'bun'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value={'sause'} active={current === 'sause'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value={'main'} active={current === 'main'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
    )
  }

  export default IngredientsTabs;
