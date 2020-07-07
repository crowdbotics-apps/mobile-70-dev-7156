import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth8144Saga from '../features/EmailAuth8144/redux/sagas';
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
EmailAuth8144Saga,
CalendarView8143Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}