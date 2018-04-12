import moment from 'moment';

export const formatDateTime = (datetime) => moment(datetime).format('YYYY-DD-MM HH:mm');
