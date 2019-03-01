import React, { PureComponent } from 'react';
import styles from './Graph.module.css';
import classnames from 'classnames';

import { range } from '../../utils';
import { getDaysInMonth, isAfter } from 'date-fns';
import { getMonthName, mapMonth } from '../../helpers';

class Graph extends PureComponent {

    renderDates() {
        const maxNumberOfDays = 31;
        return (
            <div className={styles.date}>
                <div className={styles.monthNamesRow} />
                {range(maxNumberOfDays).map(date => {
                    return <div key={date} className={classnames(styles.item, styles.dateItem)}>
                        {date + 1}
                    </div>
                })}
            </div>
        )
    }

    renderMonth() {
        return mapMonth((month) => {
            return (
                <div key={month} className={styles.monthColumn}>
                    <div className={styles.monthNamesRow}>
                        {getMonthName(month, navigator.language, true)}
                    </div>
                    <div>
                        {range(getDaysInMonth(month)).map((date) => {
                            const current = new Date(month);
                            current.setDate(date + 1);

                            const isFuture = isAfter(current, new Date());
                            return <div key={current} className={classnames(styles.item, { [styles.future]: isFuture })} />
                        })}
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className={styles.container}>
                {this.renderDates()}
                {this.renderMonth()}
            </div>
        );
    }
}

export default Graph;
