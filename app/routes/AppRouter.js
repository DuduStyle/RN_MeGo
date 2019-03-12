import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import { TopTabNavigator } from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import WelcomePage from "../pages/welcomePage";

const InitNavigator = createStackNavigator({
  WelcomePage: {
    screen: WelcomePage,
    navigationOptions: {
      header: null // 全屏显示
    }
  }
});

const AppNavigator = createStackNavigator(
  {
    // 启动页
    Init: InitNavigator,
    //底部导航
    Home: {
      screen: TopTabNavigator,
      navigationOptions: ({ navigation }) => ({ header: null })
    },
    DetailPage: {
      screen: DetailPage
    }
  },
  {
    initialRouteName: "Init"
  }
);

export default createAppContainer(AppNavigator);
