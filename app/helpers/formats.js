import moment from 'moment';

export const formatDateTime = (datetime) => moment(datetime).format('D MMM YYYY - HH:mm a');

export const formatMoney = (money) => {
  const numberFormat = new Intl.NumberFormat('en-US', {
    maximumSignificantDigits: 4,
  }).format(money)

  return numberFormat
}
