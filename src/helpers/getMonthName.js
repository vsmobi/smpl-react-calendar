export default function getMonthName(date, locale, isShort) {
    return new Intl.DateTimeFormat(locale, {
        month: isShort ? 'short' : 'long'
    }).format(date);
}
