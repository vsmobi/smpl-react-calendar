import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getDaysOfTheWeek, getMonthDates, getMonthName } from './helpers';
import styles from './Month.module.css';

class Month extends Component {

    getDayStyle(day) {
        const dayStyle = [styles.item, styles.dateWrapper];

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
            <div className={classnames(styles.month, className)}>
                <div className={styles.monthName}>
                    {getMonthName(date, locale)}
                </div>
                <div className={styles.daysOfTheWeekContainer}>
                    {daysOfTheWeek.map(dayOfTheWeek => {
                        return (
                            <div key={dayOfTheWeek} className={classnames(styles.item, styles.dayOfTheWeekItem)}>
                                {dayOfTheWeek}
                            </div>
                        );
                    })}
                </div>
                <div className={styles.datesContainer}>
                    {monthDates.map((day, index) => {
                        return (
                            <div className={this.getDayStyle(day)}>
                                <div key={`${day}${index}`} className={styles.dateItem}>
                                    <div className={styles.date}>
                                        {day.date}
                                    </div>
                                    <div className={styles.activities}>
                                        {day.info}
                                    </div>
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
