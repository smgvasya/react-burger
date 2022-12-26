import React from 'react';
import styles from './app.module.css';
import AppHeader from '../header/app-header';

class App extends React.Component {
  render (){
    return (
      <div className="App">
        <header className="">
        <AppHeader />
          {/* <img src={} className="" alt="" />
          <p></p>
          <a></a> */}
        </header>
      </div>
    );
  }
}

export default App;
