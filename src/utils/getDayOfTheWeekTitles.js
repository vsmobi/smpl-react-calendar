import { startOfWeek, addDays } from 'date-fns';

function getWeekDayTitle(date) {
    return new Intl.DateTimeFormat('ru', {
        weekday: 'short'
    }).format(date);
}

export default function getDayOfTheWeekTitles(date) {
    const weekDays = [];
    let currentDate = startOfWeek(date, { weekStartsOn: 1 });

    for (let i = 0; i < 7; i++) {
        weekDays.push(getWeekDayTitle(currentDate));
        currentDate = addDays(currentDate, 1);
    }

    return weekDays;
}
