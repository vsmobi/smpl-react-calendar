import { startOfWeek, addDays } from 'date-fns';
import { range } from '../utils';

function getWeekDayTitle(date, locale) {
    return new Intl.DateTimeFormat(locale, {
        weekday: 'short'
    }).format(date);
}

export default function getDaysOfTheWeek(date, locale) {
    let currentDate = startOfWeek(date, { weekStartsOn: 1 });

    return range(7).map((numberOfDays)=> {
        return getWeekDayTitle(addDays(currentDate, numberOfDays), locale)
    });
}


