import React, { Component } from 'react';
import Calendar from './components/Calendar/Calendar';
import styles from './App.module.css';

class App extends Component {

    render() {
        return (
            <div className={styles.app}>
                <header className={styles.header}>Simple calendar</header>
              <Calendar />
            </div>
        );
    }
}

export default App;
