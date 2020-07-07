import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth8190Reducer from '../features/EmailAuth8190/redux/reducers';
import CalendarView8189Reducer from '../features/CalendarView8189/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth8190: EmailAuth8190Reducer,
CalendarView8189: CalendarView8189Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});