import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView48192Saga from '../features/CalendarView48192/redux/sagas';
import EmailAuth8190Saga from '../features/EmailAuth8190/redux/sagas';
import CalendarView8189Saga from '../features/CalendarView8189/redux/sagas';
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
CalendarView48192Saga,
EmailAuth8190Saga,
CalendarView8189Saga,
CalendarSaga,
EmailAuthSaga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}