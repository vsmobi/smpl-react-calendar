import React, { Component } from 'react';
import Year from './components/Year/Year';
import styles from './App.module.css';

class App extends Component {

    render() {
        return (
            <div className={styles.app}>
                <header className={styles.header}>Simple calendar</header>
                <Year locale={navigator.language}/>
            </div>
        );
    }
}

export default App;
