import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Month from '../Month/Month';
import styles from './Year.module.css';

class Year extends Component {

    renderYear() {
        const months = [];

        for (let i = 0; i < 12; i++) {
            const currentDate = new Date().setMonth(i);

            months.push(
                <Month
                    className={styles.month}
                    locale={this.props.locale}
                    date={currentDate}
                />
            )
        }

        return months;
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
