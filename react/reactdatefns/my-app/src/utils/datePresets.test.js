import { startOfISOWeek, endOfISOWeek, subMinutes, subHours, startOfDay, endOfDay, subDays, startOfMonth, endOfMonth, subMonths, lastDayOfMonth } from 'date-fns'
import { buildDates, FormatTypes, OptionsTypes } from './datePresets'

describe('DatePreset Function Unit Test', () => {

  const diff = new Date(Date.now()).getTimezoneOffset()

  const defaultParameters = {
    format: FormatTypes.none, 
    option: OptionsTypes.Last15Min,
    from: new Date(Date.now()), 
    to: new Date(Date.now())
  }

  let fromDate, toDate

  beforeEach(() => {
    fromDate = subMinutes(new Date(2019, 0, 0, 0, 0, 0), diff)
    toDate = subMinutes(new Date(2019, 0, 0, 0, 0, 0), diff)
  })

  it('should calculate dates value for the last 15 minutes', () => {
    const expectedValue = {
      from: subMinutes(fromDate, 15).toISOString(),
      to: toDate.toISOString(),
      option: { key: 'last15min', value: 'Last 15 Minutes' }
    }

    let parameters = { ...defaultParameters, option: 'last15min', from: fromDate}

    const action = buildDates(parameters)

    expect(action).toEqual(expectedValue)

  })

  it('should calculate dates value for the last 30 minutes', () => {
    const expectedValue = {
      from: subMinutes(fromDate, 30).toISOString(),
      to: toDate.toISOString(),
      option: { key: 'last30min', value: 'Last 30 Minutes' }
    }

    let parameters = { ...defaultParameters, option: 'last30min', from: fromDate}

    const action = buildDates(parameters)

    expect(action).toEqual(expectedValue)
  })

  it('should calculate dates value for the last 60 minutes', () => {
    const expectedValue = {
      from: subMinutes(fromDate, 60).toISOString(),
      to: toDate.toISOString(),
      option: { key: 'last60min', value: 'Last 60 Minutes' }
    }

    let parameters = { ...defaultParameters, option: 'last60min', from: fromDate}

    const action = buildDates(parameters)

    expect(action).toEqual(expectedValue)
  })

  it('should calculate dates value for the last 4 hours', () => {
    const expectedValue = {
      from: subHours(fromDate, 4).toISOString(),
      to: toDate.toISOString(),
      option: { key: 'last4hours', value: 'Last 4 Hours' }
    }

    let parameters = { ...defaultParameters, option: 'last4hours', from: fromDate}

    const action = buildDates(parameters)

    expect(action).toEqual(expectedValue)
  })

  it('should calculate dates for today', () => {
    const expectedValue = {
      from: startOfDay(fromDate).toISOString(),
      to: endOfDay(toDate).toISOString(),
      option: { key: 'today', value: 'Today' }
    }

    let parameters = { ...defaultParameters, option: 'today', from: fromDate}

    const action = buildDates(parameters)

    expect(action).toEqual(expectedValue)
  })

  it('should calculate date value for yesterday', () => {
    const expectedValue = {
      from: startOfDay(subDays(fromDate, 1)).toISOString(),
      to: endOfDay(subDays(toDate, 1)).toISOString(),
      option: { key: 'yesterday', value: 'Yesterday' }
    }

    let parameters = { ...defaultParameters, option: 'yesterday', from: fromDate}

    const action = buildDates(parameters)

    expect(action).toEqual(expectedValue)
  })

  it('should calculate date value for the last 7 days', () => {
    const expectedValue = {
      from: startOfDay(subDays(fromDate, 7)).toISOString(),
      to: toDate.toISOString(),
      option: { key: 'last7days', value: 'Last 7 Days' }
    }

    let parameters = { ...defaultParameters, option: 'last7days', from: fromDate}

    const action = buildDates(parameters)

    expect(action).toEqual(expectedValue)
  })

  it('should calculate date value for this week', () => {
    const expectedValue = {
      from: startOfISOWeek(fromDate).toISOString(),
      to: endOfISOWeek(toDate).toISOString(),
      option: { key: 'thisweek', value: 'This Week' }
    }

    let parameters = { ...defaultParameters, option: 'thisweek', from: fromDate}

    const action = buildDates(parameters)

    expect(action).toEqual(expectedValue)
  })

  it('should calculate date value for this month', () => {
    const expectedValue = {
      from: startOfMonth(startOfDay(fromDate)).toISOString(),
      to: endOfMonth(endOfDay(toDate)).toISOString(),
      option: { key: 'thismonth', value: 'This Month' }
    }

    let parameters = { ...defaultParameters, option: 'thismonth', from: fromDate}

    const action = buildDates(parameters)

    expect(action).toEqual(expectedValue)
  })

  it('should calculate date value for the last 30 days', () => {
    const expectedValue = {
      from: subDays(startOfDay(fromDate), 30).toISOString(),
      to: endOfDay(toDate).toISOString(),
      option: { key: 'last30days', value: 'Last 30 Days' }
    }

    let parameters = { ...defaultParameters, option: 'last30days', from: fromDate}

    const action = buildDates(parameters)

    expect(action).toEqual(expectedValue)
  })

  it('should calculate date value for the last month', () => {
    const expectedValue = {
      from: startOfMonth(subMonths(fromDate, 1)).toISOString(),
      to: lastDayOfMonth(subMonths(toDate, 1)).toISOString(),
      option: { key: 'lastmonth', value: 'Last Month' }
    }

    let parameters = { ...defaultParameters, option: 'lastmonth', from: fromDate}

    const action = buildDates(parameters)

    expect(action).toEqual(expectedValue)
  })

  it('should calculate date value a range of dates given', () => {
    const expectedValue = {
      from: startOfDay(fromDate).toISOString(),
      to: endOfDay(toDate).toISOString(),
      option: { key: 'daterange', value: 'Date Range' }
    }

    let parameters = { ...defaultParameters, option: 'daterange', from: fromDate, to: toDate}

    const action = buildDates(parameters)

    expect(action).toEqual(expectedValue)
  })
})
