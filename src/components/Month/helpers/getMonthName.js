export default function getMonthName(date, locale) {
    return new Intl.DateTimeFormat(locale, {
        month: 'long'
    }).format(date);
}
