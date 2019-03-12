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

const Main = createStackNavigator({
  //底部导航
  Home: {
    screen: TopTabNavigator,
    navigationOptions: ({ navigation }) => ({ header: null })
  },
  DetailPage: {
    screen: DetailPage
  }
});

// createSwitchNavigatorSwitchNavigator
// 的用途是一次只显示一个页面,跳转到主页面，返回不到广告页面。
export default createAppContainer(
  createSwitchNavigator(
    {
      // 启动页
      Init: InitNavigator,
      Main: Main
    },
    {
      navigationOptions: {
        header: null // 全屏显示
      }
    }
  )
);
