import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getDaysOfTheWeek, getMonthDates, getMonthName } from './helpers';
import styles from './Month.module.css';

class Month extends Component {

    getDayStyles(day) {
        const dayStyles = [];

        if (day.isToday) {
            dayStyles.push(styles.today)
        } else {
            if (day.isWeekend) {
                dayStyles.push(styles.weekend)
            }

            if (day.isNotInThisMonth) {
                dayStyles.push(styles.notThisMonth)
            }
        }

        return dayStyles;
    }

    renderMonthName() {
        const { date, locale } = this.props;

        return (
            <div className={styles.monthName}>
                {getMonthName(date, locale)}
            </div>
        );
    }

    renderDaysOfTheWeek() {
        const { date, locale } = this.props;
        const daysOfTheWeek = getDaysOfTheWeek(date, locale);

        return (
            <div className={styles.daysOfTheWeekContainer}>
                {daysOfTheWeek.map(dayOfTheWeek => {
                    return (
                        <div key={dayOfTheWeek} className={classnames(styles.item, styles.dayOfTheWeekItem)}>
                            {dayOfTheWeek}
                        </div>
                    );
                })}
            </div>
        );
    }

    renderDates() {
        const { date } = this.props;
        const monthDates = getMonthDates(date);

        return (
            <div className={styles.datesContainer}>
                {monthDates.map((day, index) => {
                    const dayStyles = classnames(styles.item, styles.dateWrapper, this.getDayStyles(day));
                    return (
                        <div className={dayStyles}>
                            <div key={`${day}${index}`}>
                                <div>
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
        );
    }

    render() {
        const { className } = this.props;

        return (
            <div className={classnames(styles.month, className)}>
                {this.renderMonthName()}
                {this.renderDaysOfTheWeek()}
                {this.renderDates()}
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
