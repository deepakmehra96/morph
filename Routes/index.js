import { createStackNavigator, createAppContainer } from "react-navigation";
import Dashboard from "../Views/Dashboard";
import Login from "../Views/Auth/Login";
import SignUp from "../Views/Auth/Signup";
import ActivationCode from "../Views/Auth/ActivationCode";
import Main from "../Views/Main";
import Header from "../components/Header";
import SliderScreens from "../Views/Slider";

const AppNavigator = createStackNavigator(
    {
      SliderScreens:SliderScreens,
      Main: Main,
      Login: Login,
      SignUp: SignUp,
      ActivationCode: ActivationCode,
      Dashboard: Dashboard,
      Header:Header,
    },
    {
      initialRouteName: "SliderScreens",
      defaultNavigationOptions: {
        gesturesEnabled: false
      },
    }
);

const Router = createAppContainer(AppNavigator);

export default Router