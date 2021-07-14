import {
  startOfDay,
  endOfDay,
  startOfISOWeek,
  endOfISOWeek,
  startOfMonth,
  subMinutes,
  subHours,
  subDays,
  subMonths,
  lastDayOfMonth,
  endOfMonth,
  format as formatFns
} from 'date-fns'

export const FormatTypes = {
  none: 'None',
  shortdate: 'Short Date',
}

export const Formats = {
  [FormatTypes.none]: 'None',
  [FormatTypes.shortdate]: 'Short Date'
}

export const OptionsTypes = {
  Last15Min: 'last15min',
  Last30Min: 'last30min',
  Last60Min: 'last60min',
  Last4Hours: 'last4hours',
  Today: 'today',
  Yesterday: 'yesterday',
  Last7Days: 'last7days',
  ThisWeek: 'thisweek',
  ThisMonth: 'thismonth',
  Last30Days: 'last30days',
  LastMonth: 'lastmonth',
  DateRange: 'daterange'
}

export const options = {
  [OptionsTypes.Last15Min]: 'Last 15 Minutes',
  [OptionsTypes.Last30Min]: 'Last 30 Minutes',
  [OptionsTypes.Last60Min]: 'Last 60 Minutes',
  [OptionsTypes.Last4Hours]: 'Last 4 Hours',
  [OptionsTypes.Today]: 'Today',
  [OptionsTypes.Yesterday]: 'Yesterday',
  [OptionsTypes.Last7Days]: 'Last 7 Days',
  [OptionsTypes.ThisWeek]: 'This Week',
  [OptionsTypes.ThisMonth]: 'This Month',
  [OptionsTypes.Last30Days]: 'Last 30 Days',
  [OptionsTypes.LastMonth]: 'Last Month',
  [OptionsTypes.DateRange]: 'Date Range'
}

export const buildDates = (parameters) => {
  const {option} = parameters

  return actions[option]({ ...parameters})
}

function buildResult (format, option, from, to) {
  return applyFormat(format, { option: { key: option, value: options[option] } }, from, to)
}

function applyFormat(format, result, from, to) {

  switch (format) {
    case FormatTypes.shortdate:
      result.from =  formatFns(from, 'yyyyMMdd')
      result.to = formatFns(from, 'yyyyMMdd')
      break
    default:
      result.from =  from.toISOString()
      result.to = to.toISOString()
      break
  }
  return result
}

const actions = {
  [OptionsTypes.Today]: ({ format, option, from }) =>
    buildResult(format, option, startOfDay(from), endOfDay(from)),

  [OptionsTypes.Last15Min]: ({ format, option, from }) =>
    buildResult(format, option, subMinutes(from, 15), from),

  [OptionsTypes.Last30Min]: ({ format, option, from }) =>
    buildResult(format, option, subMinutes(from, 30), from),

  [OptionsTypes.Last60Min]: ({ format, option, from }) =>
    buildResult(format, option, subMinutes(from, 60), from),

  [OptionsTypes.Last4Hours]: ({ format, option, from }) =>
    buildResult(format, option, subHours(from, 4), from),

  [OptionsTypes.Yesterday]: ({ format, option, from }) =>
    buildResult(format, option, startOfDay(subDays(from, 1)), endOfDay(subDays(from, 1))),

  [OptionsTypes.Last7Days]: ({ format, option, from }) =>
    buildResult(format, option, startOfDay(subDays(from, 7)), from),

  [OptionsTypes.ThisWeek]: ({ format, option, from }) =>
    buildResult(format, option, startOfISOWeek(from), endOfISOWeek(from)),

  [OptionsTypes.ThisMonth]: ({ format, option, from }) =>
    buildResult(
      format, option,
      startOfMonth(startOfDay(from)),
      endOfMonth(endOfDay(from))
    ),

  [OptionsTypes.Last30Days]: ({ format, option, from }) =>
    buildResult(format, option, subDays(startOfDay(from), 30), endOfDay(from)),

  [OptionsTypes.LastMonth]: ({ format, option, from }) =>
    buildResult(format,
      option,
      startOfMonth(subMonths(from, 1)),
      lastDayOfMonth(subMonths(from, 1))
    ),

  [OptionsTypes.DateRange]: ({ format, option, from, to }) =>
    buildResult(format, option, startOfDay(from), endOfDay(to))
}
