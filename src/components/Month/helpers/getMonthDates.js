import {
    startOfWeek,
    endOfWeek,
    isAfter,
    addDays,
    format,
    startOfMonth,
    endOfMonth,
    isSameDay,
    isSameMonth,
    isWeekend
} from 'date-fns';

function createDateItem(date) {

    const dayNumber = format(date, 'd');

    return {
        date: dayNumber,
        selected: false,
        isToday: isSameDay(new Date(), date),
        isNotInThisMonth: !isSameMonth(date, new Date()),
        isWeekend: isWeekend(date),
        info: ""
    }
}

export default function getMonthDates(date) {
    const dates = [];
    const safeDate = new Date(date);
    const firstDate = startOfMonth(safeDate);
    let currentDate = startOfWeek(firstDate, { weekStartsOn: 1 });
    const lastDayInMonth = endOfMonth(safeDate);
    const lastDate = endOfWeek(lastDayInMonth, { weekStartsOn: 1 });

    while (isAfter(lastDate, currentDate)) {
        dates.push(createDateItem(currentDate));
        currentDate = addDays(currentDate, 1);
    }

    return dates;
}
