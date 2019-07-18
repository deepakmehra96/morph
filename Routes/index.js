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
import UserLocation from '../Views/Accounts/UserLocation'
import UserNotes from "../Views/Accounts/UserNotes";
import UserPayment from '../Views/Accounts/UserPayment'
import UserCredits from "../Views/Accounts/UserCredits";
import MapMain from "../Views/Map";
import ManageBooking from "../Views/Bookings/ManageBooking";
import ExerciseView from '../Views/ExerciseBooking/Exercise'
import Options from "../Views/ExerciseBooking/Options";
import BookingTime from "../Views/ExerciseBooking/BookingTime";
import BookTrainer from "../Views/ExerciseBooking/BookTrainer";
import TrainerProfile from "../Views/ExerciseBooking/TrainerProfile";
import ConfirmPage from "../Views/ExerciseBooking/ConfirmPage";

const AppNavigator = createStackNavigator(
  {
    SliderScreens: SliderScreens,
    LoggedinTabs: LoggedinTabs,
    Login: Login,
    SignUp: SignUp,
    ActivationCode: ActivationCode,
    Dashboard: Dashboard,
    Header: Header,
    Location: Location,
    ConfirmLocation: ConfirmLocation,
    Accounts: Accounts,
    UserLocation: UserLocation,
    UserNotes: UserNotes,
    UserPayment: UserPayment,
    UserCredits: UserCredits,
    MapMain: MapMain,
    ManageBooking: ManageBooking,
    ExerciseView:ExerciseView,
    Options:Options,
    BookingTime:BookingTime,
    BookTrainer:BookTrainer,
    TrainerProfile:TrainerProfile,
    ConfirmPage:ConfirmPage
  },
  {
    initialRouteName: "ConfirmPage",
    defaultNavigationOptions: {
      gesturesEnabled: false
    },
  }
);

const Router = createAppContainer(AppNavigator);

export default Router