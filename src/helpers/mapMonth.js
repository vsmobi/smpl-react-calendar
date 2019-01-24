import { range } from '../utils';

export default function mapMonth(func) {
    return range(12).map(monthNumber => {
        const currentDate = new Date();
        currentDate.setMonth(monthNumber);

        return func(currentDate)
    })
}
