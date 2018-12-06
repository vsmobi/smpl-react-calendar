import React, { Component } from 'react';
import classnames from 'classnames';
import { getDayOfTheWeekTitles, getMonthDays } from '../../utils';
import styles from './Calendar.module.css';

class Calendar extends Component {

    getDayStyle(day) {
        const dayStyle = [styles.day];

        if (day.isToday) {
            dayStyle.push(styles.today)
        }

        if (day.isWeekend) {
            dayStyle.push(styles.weekend)
        }

        if (day.isNotInThisMonth) {
            dayStyle.push(styles.notCurrentMonth)
        }

        return classnames(dayStyle);
    }

    render() {
        const today = new Date();
        const weekDayTitles = getDayOfTheWeekTitles(today);
        const monthDays = getMonthDays(today);

        return (
            <div className={styles.calendar}>
                <div className={styles.weekDayTitles}>
                    {weekDayTitles.map(weekDayTitle => {
                        return (
                            <div key={weekDayTitle} className={styles.weekDayTitle}>
                                {weekDayTitle}
                            </div>
                        );
                    })}
                </div>
                <div className={styles.month}>
                    {monthDays.map((day, index) => {
                        return (
                            <div key={`${day}${index}`} className={this.getDayStyle(day)}>
                                {day.date}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Calendar;
