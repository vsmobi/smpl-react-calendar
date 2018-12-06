import {
    startOfWeek,
    endOfWeek,
    isAfter,
    addDays,
    format,
    startOfMonth,
    endOfMonth,
    isToday,
    isThisMonth,
    isWeekend
} from 'date-fns';

function createDayItem(date) {

    const dayNumber = format(date, 'D');
    return {
        date: dayNumber,
        selected: false,
        isToday: isToday(date),
        isNotInThisMonth: !isThisMonth(date),
        isWeekend: isWeekend(date)
    }
}

export default function getMonthDays(date) {
    const days = [];
    const firstDate = startOfMonth(date);
    let currentDate = startOfWeek(firstDate, { weekStartsOn: 1 });
    const lastDayInMonth = endOfMonth(date);
    const lastDate = endOfWeek(lastDayInMonth, { weekStartsOn: 1 });

    do {
        days.push(createDayItem(currentDate));
        currentDate = addDays(currentDate, 1);
    } while (isAfter(lastDate, currentDate));

    return days;
}
