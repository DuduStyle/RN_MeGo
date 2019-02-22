import { createBottomTabNavigator, createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomePage from '../pages/HomePage'
import DetailPage from '../pages/DetailPage'
import WelcomePage from '../pages/welcomePage'

const InitNavigator = createStackNavigator(
  {
    WelcomePage: {
      screen:WelcomePage,
      navigationOptions:{
        header: null,  // 全屏显示
      }
    },
  }
)
const MainNavigator = createStackNavigator(
  {
    HomePage: {
      screen:HomePage,
      navigationOptions:{
        header: null,  // 全屏显示
      }
    },
    DetailPage: {
      screen:DetailPage,
      navigationOptions:{
        header: null,  // 全屏显示
      }
    },
  }
)
export default createAppContainer(createSwitchNavigator({
  Init: InitNavigator,
  Main: MainNavigator,
}, {
  navigationOptions: {
    header: null,
  }
}));
