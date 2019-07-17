import { createStackNavigator, createAppContainer } from "react-navigation";
import Dashboard from "../Views/Dashboard";
import Login from "../Views/Auth/Login";
import SignUp from "../Views/Auth/Signup";
import ActivationCode from "../Views/Auth/ActivationCode";
import Header from "../components/Header";
import SliderScreens from "../Views/Slider";
import Location from "../Views/Location";
import ConfirmLocation from "../Views/Location/ConfirmLocation";
import LoggedinTabs from "../Views/FooterTab.js";
import Accounts from "../Views/Accounts";
import ListItem from "../components/ListItem.js";
import UserLocation from '../Views/Accounts/UserLocation'
import UserNotes from "../Views/Accounts/UserNotes";
import UserPayment from '../Views/Accounts/UserPayment'
import UserCredits from "../Views/Accounts/UserCredits";
import MapMain from "../Views/Map";

const AppNavigator = createStackNavigator(
    {
      SliderScreens:SliderScreens,
      Login: Login,
      SignUp: SignUp,
      ActivationCode: ActivationCode,
      Dashboard: Dashboard,
      Header:Header,
      Location: Location,
      ConfirmLocation: ConfirmLocation,
      LoggedinTabs: LoggedinTabs,
      Accounts:Accounts,
      ListItem:ListItem,
      UserLocation:UserLocation,
      UserNotes:UserNotes,
      UserPayment: UserPayment,
      UserCredits: UserCredits,
      MapMain:MapMain
    },
    {
      initialRouteName: "ConfirmLocation",
      defaultNavigationOptions: {
        gesturesEnabled: false
      },
    }
);

const Router = createAppContainer(AppNavigator);

export default Router