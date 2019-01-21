import React, { Component } from 'react';
import classnames from 'classnames';
import { range } from './utils';
import Year from './components/Year/Year';
import styles from './App.module.css';
import { getDaysInMonth } from 'date-fns';
import { getDaysOfTheWeek, getMonthDates, getMonthName } from './helpers';

class App extends Component {

    renderCalendarGraph() {
        return (
            <div className={styles.monthNames}>
                <div className={styles.date}>
                    <div className={styles.monthNamesRow}/>
                    {range(getDaysInMonth(31)).map(date => {
                        return <div className={classnames(styles.item, styles.dateItem)}>{date + 1}</div>
                    })}
                </div>
                {mapMonth((monthDate) => {
                    return (
                        <div className={styles.monthColumn}>
                            <div className={styles.monthNamesRow}>
                                {getMonthName(monthDate, navigator.language, true)}
                                </div>
                            <div>
                            </div>
                            <div>
                                {range(getDaysInMonth(monthDate)).map(date => {
                                    return <div className={styles.item}></div>
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }

    render() {
        return (
            <div className={styles.app}>
                <header className={styles.header}>Simple calendar</header>
                <Year locale={navigator.language} />
                {this.renderCalendarGraph()}
            </div>
        );
    }
}

export default App;


function mapMonth(func) {
    return range(12).map(monthNumber => {
        const currentDate = new Date();
        currentDate.setMonth(monthNumber);

        return func(currentDate)
    })
}
