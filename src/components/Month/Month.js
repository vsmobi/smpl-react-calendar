import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getDaysOfTheWeek, getMonthDates, getMonthName } from './helpers';
import styles from './Month.module.css';

class Month extends Component {
    getDayStyles(day) {
        const { hasBorder } = this.props;
        return classnames([
            styles.item,
            styles.dateWrapper,
            {[styles.weekend]: day.isWeekend},
            {[styles.notThisMonth]: day.isNotInThisMonth},
            {[styles.today] : day.isToday},
            {[styles.bordered]: hasBorder}]);
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
                    const dayStyles = this.getDayStyles(day);
                    return (
                        <div key={`${day}${index}`} className={dayStyles}>
                            <div>
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
    date: PropTypes.instanceOf(Date),
    hasBorder: PropTypes.bool
};

export default Month;
