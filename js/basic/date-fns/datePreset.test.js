import { buildDates } from './datePresets'

describe('DatePreset Function Unit Test', () => {

  it('should calculate dates value for the last 15 minutes', () => {
    const expectedValue = { from: '2018-12-31T04:45:00.000Z', to: '2018-12-31T05:00:00.000Z', option: { key: "last15min", value: "Last 15 Minutes" } }

    const action = buildDates('last15min', new Date(2019, 0, 0, 0, 0, 0))

    expect(action).toEqual(expectedValue)
  })

  it('should calculate dates value for the last 30 minutes', () => {
    const expectedValue = { from: '2018-12-31T04:30:00.000Z', to: '2018-12-31T05:00:00.000Z', option: { key: "last30min", value: "Last 30 Minutes" } }

    const action = buildDates('last30min', new Date(2019, 0, 0, 0, 0, 0))

    expect(action).toEqual(expectedValue)
  })

  it('should calculate dates value for the last 60 minutes', () => {
    const expectedValue = { from: '2018-12-31T04:00:00.000Z', to: '2018-12-31T05:00:00.000Z', option: { key: "last60min", value: "Last 60 Minutes" } }

    const action = buildDates('last60min', new Date(2019, 0, 0, 0, 0, 0))

    expect(action).toEqual(expectedValue)
  })

  it('should calculate dates value for the last 4 hours', () => {
    const expectedValue = { from: '2018-12-31T01:00:00.000Z', to: '2018-12-31T05:00:00.000Z', option: { key: "last4hours", value: "Last 4 Hours" } }

    const action = buildDates('last4hours', new Date(2019, 0, 0, 0, 0, 0))

    expect(action).toEqual(expectedValue)
  })

  it('should calculate dates for today', () => {
    const expectedValue = { from: '2018-12-31T05:00:00.000Z', to: '2019-01-01T04:59:59.999Z', option: { key: "today", value: "Today" } }

    const action = buildDates('today', new Date(2019, 0, 0, 0, 0, 0))

    expect(action).toEqual(expectedValue)
  })

  it('should calculate date value for yesterday', () => {
    const expectedValue = { from: '2018-12-30T05:00:00.000Z', to: '2018-12-31T04:59:59.999Z', option: { key: "yesterday", value: "Yesterday" } }

    const action = buildDates('yesterday', new Date(2019, 0, 0, 0, 0, 0))

    expect(action).toEqual(expectedValue)
  })

  it('should calculate date value for the last 7 days', () => {
    const expectedValue = { from: '2018-12-24T05:00:00.000Z', to: '2018-12-31T05:00:00.000Z', option: { key: "last7days", value: "Last 7 Days" } }

    const action = buildDates('last7days', new Date(2019, 0, 0, 0, 0, 0))

    expect(action).toEqual(expectedValue)
  })

  it('should calculate date value for this week', () => {
    const expectedValue = { from: '2018-12-31T05:00:00.000Z', to: '2019-01-01T04:59:59.999Z', option: { key: "thisweek", value: "This Week" } }

    const action = buildDates('thisweek', new Date(2019, 0, 0, 0, 0, 0))

    expect(action).toEqual(expectedValue)
  })

  it('should calculate date value for this month', () => {
    const expectedValue = { from: '2018-12-01T05:00:00.000Z', to: '2019-01-01T04:59:59.999Z', option: { key: "thismonth", value: "This Month" } }

    const action = buildDates('thismonth', new Date(2019, 0, 0, 0, 0, 0))

    expect(action).toEqual(expectedValue)
  })

  it('should calculate date value for the last 30 days', () => {
    const expectedValue = { from: '2018-12-01T05:00:00.000Z', to: '2019-01-01T04:59:59.999Z', option: { key: "last30days", value: "Last 30 Days" } }

    const action = buildDates('last30days', new Date(2019, 0, 0, 0, 0, 0))

    expect(action).toEqual(expectedValue)
  })

  it('should calculate date value for the last month', () => {
    const expectedValue = { from: '2018-11-01T05:00:00.000Z', to: '2018-11-30T05:00:00.000Z', option: { key: "lastmonth", value: "Last Month" } }

    const action = buildDates('lastmonth', new Date(2019, 0, 0, 0, 0, 0))

    expect(action).toEqual(expectedValue)
  })

  it('should calculate date value a range of dates given', () => {
    const expectedValue = { from: '2018-12-31T05:00:00.000Z', to: '2019-02-01T04:59:59.999Z', option: { key: "daterange", value: "Date Range" } }

    const action = buildDates('daterange', new Date(2019, 0, 0, 0, 0, 0), new Date(2019, 0, 31, 0, 0, 0))

    expect(action).toEqual(expectedValue)
  })

})