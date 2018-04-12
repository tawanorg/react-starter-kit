import moment from 'moment'

export const formatDateTime = (datetime) => {
  return moment(datetime).format('YYYY-DD-MM')
}
