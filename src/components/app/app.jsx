import { useState, useEffect  } from "react";
import styles from './app.module.css';
import getApi from '../../utils/api';
import AppHeader from '../header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'

const App = () => {
  const baseUrl = 'https://norma.nomoreparties.space/api/ingredients' 

  const [data, setData] = useState([]);

  useEffect(() => {
    getApi(baseUrl)
      .then (res => setData(res.data))
      .catch (err => console.log(`Ошибка: ${err}`));
  }, []);
  

  return (
      <>
        <AppHeader />
          <main className={ styles.main } >
          <BurgerIngredients data={data}/>
          <BurgerConstructor data={data}/>
          </main>
      
      </>

    );

}

export default App;


