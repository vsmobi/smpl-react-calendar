import React, { PureComponent } from 'react';
import styles from './Graph.module.css';
import classnames from 'classnames';

import { range } from '../../utils';
import { getDaysInMonth } from 'date-fns';
import { getMonthName, mapMonth } from '../../helpers';

class Graph extends PureComponent {

    renderDates() {
        return (
            <div className={styles.date}>
                <div className={styles.monthNamesRow} />
                {range(31).map(date => {
                    return <div className={classnames(styles.item, styles.dateItem)}>
                        {date + 1}
                    </div>
                })}
            </div>
        )
    }

    renderMonth() {
        return mapMonth((monthDate) => {
            return (
                <div className={styles.monthColumn}>
                    <div className={styles.monthNamesRow}>
                        {getMonthName(monthDate, navigator.language, true)}
                    </div>
                    <div>
                        {range(getDaysInMonth(monthDate)).map(() => {
                            return <div className={styles.item} />
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






