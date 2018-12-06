import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getDaysOfTheWeek, getMonthDates } from './helpers';
import styles from './Month.module.css';

class Month extends Component {

    getDayStyle(day) {
        const dayStyle = [styles.dateContainer, styles.item];

        if (day.isToday) {
            dayStyle.push(styles.today)
        }

        if (day.isWeekend) {
            dayStyle.push(styles.weekend)
        }

        if (day.isNotInThisMonth) {
            dayStyle.push(styles.notThisMonth)
        }

        return classnames(dayStyle);
    }

    render() {
        const { date, locale, className } = this.props;
        const daysOfTheWeek = getDaysOfTheWeek(date, locale);
        const monthDates = getMonthDates(date);

        return (
            <div className={className}>
                <div className={styles.daysOfTheWeekContainer}>
                    {daysOfTheWeek.map(dayOfTheWeek => {
                        return (
                            <div key={dayOfTheWeek} className={classnames(styles.item, styles.dayOfTheWeek)}>
                                {dayOfTheWeek}
                            </div>
                        );
                    })}
                </div>
                <div className={styles.month}>
                    {monthDates.map((day, index) => {
                        return (
                            <div key={`${day}${index}`} className={this.getDayStyle(day)}>
                                <div className={styles.date}>
                                    {day.date}
                                </div>
                                <div className={styles.activities}>
                                    {day.info}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

Month.propTypes = {
    className: PropTypes.string,
    locale: PropTypes.string,
    date: PropTypes.instanceOf(Date)
};

export default Month;
