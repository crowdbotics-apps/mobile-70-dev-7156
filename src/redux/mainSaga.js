import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth8148Saga from '../features/EmailAuth8148/redux/sagas';
import CalendarView8147Saga from '../features/CalendarView8147/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';
import CalendarView8143Saga from '../features/CalendarView8143/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth8148Saga,
CalendarSaga,
EmailAuthSaga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}