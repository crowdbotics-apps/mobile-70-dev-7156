import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CalendarView48192Navigator from '../features/CalendarView48192/navigator';
import Messaging8191Navigator from '../features/Messaging8191/navigator';
import EmailAuth8190Navigator from '../features/EmailAuth8190/navigator';
import CalendarView8189Navigator from '../features/CalendarView8189/navigator';
import Messaging8149Navigator from '../features/Messaging8149/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';
import BlankScreen58142Navigator from '../features/BlankScreen58142/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
CalendarView48192: { screen: CalendarView48192Navigator },
Messaging8191: { screen: Messaging8191Navigator },
EmailAuth8190: { screen: EmailAuth8190Navigator },
CalendarView8189: { screen: CalendarView8189Navigator },
Messaging8149: { screen: Messaging8149Navigator },
Calendar: { screen: CalendarNavigator },
Messenger: { screen: MessengerNavigator },
EmailAuth: { screen: EmailAuthNavigator },
BlankScreen58142: { screen: BlankScreen58142Navigator },
Messenger: { screen: MessengerNavigator },
Calendar: { screen: CalendarNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
