import React from 'react';
import styles from './app.module.css';
import AppHeader from '../header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients'

class App extends React.Component {
  render (){
    return (
      <div className="App">
        <AppHeader />
          <main className={ styles.main } >
            <BurgerIngredients />
          </main>
      </div>
    );
  }
}

export default App;
