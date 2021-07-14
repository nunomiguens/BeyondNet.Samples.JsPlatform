import { put, takeLatest } from 'redux-saga/effects'

import { ui } from 'store/modules'

export function* clearAll() {}

const uiSaga = [takeLatest(ui.actionTypes.CLEAR_ALL, clearAll)]

export default uiSaga
