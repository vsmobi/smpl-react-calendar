import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getDaysOfTheWeek, getMonthDates } from '../../utils';
import styles from './Calendar.module.css';

class Calendar extends Component {

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
        const daysOfTheWeek = getDaysOfTheWeek(this.props.date, this.props.locale);
        const monthDates = getMonthDates(this.props.date);

        return (
            <div className={styles.calendar}>
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

Calendar.propTypes = {
    locale: PropTypes.string,
    date: PropTypes.instanceOf(Date)
};

export default Calendar;
