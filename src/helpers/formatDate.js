import moment from 'moment'

const today = new Date()
const thisYear = today.getFullYear()

const formatDate = (isoString) => {
  const startOfToday = moment(today).startOf('day')
  const date = new Date(isoString)
  const momentDate = moment(date)
  const startOfDate = momentDate.startOf('day')
  const diff = startOfToday.diff(startOfDate, 'days')

  if(diff === 0) {
    return 'Hari ini'
  } else if(diff === 1) {
    return 'Kemarin'
  } else if(diff < 7) {
    return `${diff} Hari yang lalu`
  } else if(diff === 7) {
    return 'Seminggu yang lalu'
  } else if(thisYear === date.getFullYear()) {
    return moment(date).format('DD MMMM')
  } else {
    return moment(date).format('DD MMMM YYYY')
  }
}

export default formatDate