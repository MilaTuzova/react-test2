import { formatDistance } from 'date-fns';

export const formatEventDistans = (start, end) => {
    return formatDistance(Date.parse(start), Date.parse(end));
};