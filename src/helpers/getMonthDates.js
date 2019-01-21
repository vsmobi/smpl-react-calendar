import {
    startOfWeek,
    isAfter,
    addDays,
    format,
    startOfMonth,
    isSameDay,
    isSameMonth,
    isWeekend
} from 'date-fns';

function createDateItem(date, initDate) {
    const dayNumber = format(date, 'd');

    return {
        date: dayNumber,
        selected: false,
        isToday: isSameDay(new Date(), date),
        isNotInThisMonth: !isSameMonth(initDate, date),
        isWeekend: isWeekend(date),
        info: ""
    }
}

export default function getMonthDates(initDate, numberOfDatesToCreate = 42) {
    const dates = [];
    const firstDate = startOfMonth(initDate);
    let currentDate = startOfWeek(firstDate, { weekStartsOn: 1 });
    const lastDate = addDays(currentDate, numberOfDatesToCreate);

    while (isAfter(lastDate, currentDate)) {
        dates.push(createDateItem(currentDate, initDate));
        currentDate = addDays(currentDate, 1);
    }

    return dates;
}
