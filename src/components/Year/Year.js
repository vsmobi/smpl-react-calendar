import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { range } from '../../utils';
import Month from '../Month/Month';
import styles from './Year.module.css';

class Year extends Component {
    renderYear() {
        return range(12).map(monthNumber => {
            const currentDate = new Date();
            currentDate.setMonth(monthNumber);
            return (
                <Month
                    key={currentDate}
                    className={styles.month}
                    locale={this.props.locale}
                    date={currentDate}
                />
            );
        });
    }

    render() {
        return (
            <div className={classnames(styles.year, this.props.className)}>
                {this.renderYear()}
            </div>
        );
    }
}

Year.propTypes = {
    className: PropTypes.string,
    locale: PropTypes.string
};

export default Year;
