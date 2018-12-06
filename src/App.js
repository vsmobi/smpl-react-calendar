import React, { Component } from 'react';
import Month from './components/Month/Month';
import styles from './App.module.css';

class App extends Component {

    renderYear() {
        const months = [];
        for (let i = 0; i < 12; i++) {
            const currentDate = new Date().setMonth(i);
            months.push(
                <Month
                    className={styles.month}
                    locale={navigator.language}
                    date={currentDate}
                />
            )
        }

        return months;
    }

    render() {
        return (
            <div className={styles.app}>
                <header className={styles.header}>Simple calendar</header>
                <div className={styles.year}>
                    {this.renderYear()}
                </div>
            </div>
        );
    }
}

export default App;
