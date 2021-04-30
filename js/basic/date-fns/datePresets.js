import {
  startOfDay,
  endOfDay,
  startOfISOWeek,
  startOfMonth,
  subMinutes,
  subHours,
  subDays,
  subMonths,
  lastDayOfMonth
} from 'date-fns'

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

export const buildDates = (option, from, to = new Date(Date.now())) => {
  let action =
    option !== OptionsTypes.DateRange
      ? buildDateAction(option, from)
      : buildDateRangeAction('daterange', from, to)
  return action
}

const buildDateAction = (option, date) => {
  return actions[option]({ option: option, now: date })
}

const buildDateRangeAction = (option, from, to) => {
  return actions[option]({ option: option, from: from, to: to })
}

const buildResult = (option, from, to) => {
  return {
    option: {
      key: option,
      value: options[option]
    },
    from: from.toISOString(),
    to: to.toISOString()
  }
}


export const actions = {
  [OptionsTypes.Today]: ({ option, now }) =>
    buildResult(option, startOfDay(now), endOfDay(now)),

  [OptionsTypes.Last15Min]: ({ option, now }) => buildResult(option, subMinutes(now, 15), now),

  [OptionsTypes.Last30Min]: ({ option, now }) => buildResult(option, subMinutes(now, 30), now),

  [OptionsTypes.Last60Min]: ({ option, now }) => buildResult(option, subMinutes(now, 60), now),

  [OptionsTypes.Last4Hours]: ({ option, now }) => buildResult(option, subHours(now, 4), now),

  [OptionsTypes.Yesterday]: ({ option, now }) =>
    buildResult(option, startOfDay(subDays(now, 1)), endOfDay(subDays(now, 1))),

  [OptionsTypes.Last7Days]: ({ option, now }) =>
    buildResult(option, startOfDay(subDays(now, 7)), now),

  [OptionsTypes.ThisWeek]: ({ option, now }) =>
    buildResult(option, startOfISOWeek(now), endOfDay(now)),

  [OptionsTypes.ThisMonth]: ({ option, now }) =>
    buildResult(option, startOfMonth(startOfDay(now)), endOfDay(now)),

  [OptionsTypes.Last30Days]: ({ option, now }) =>
    buildResult(option, subDays(startOfDay(now), 30), endOfDay(now)),

  [OptionsTypes.LastMonth]: ({ option, now }) =>
    buildResult(option,
      startOfMonth(subMonths(now, 1)),
      lastDayOfMonth(subMonths(now, 1))
    ),

  [OptionsTypes.DateRange]: ({ option, from, to }) =>
    buildResult(option, startOfDay(from), endOfDay(to))
}
