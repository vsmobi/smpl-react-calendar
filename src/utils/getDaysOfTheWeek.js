import { startOfWeek, addDays } from 'date-fns';

function getWeekDayTitle(date, locale) {
    return new Intl.DateTimeFormat(locale, {
        weekday: 'short'
    }).format(date);
}

export default function getDaysOfTheWeek(date, locale) {
    const weekDays = [];
    let currentDate = startOfWeek(date, { weekStartsOn: 1 });

    for (let i = 0; i < 7; i++) {
        weekDays.push(getWeekDayTitle(currentDate, locale));
        currentDate = addDays(currentDate, 1);
    }

    return weekDays;
}
