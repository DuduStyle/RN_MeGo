/* 全局导航跳转
 * @Author: xzhang
 * @Date: 2019-03-12 15:49:41
 * @Last Modified by:   xzhang
 * @Last Modified time: 2019-03-12 15:49:41
 */

export default class NavigationUtil {
  static goBack(navigation) {
    navigation.goBack();
  }
  static goPage(page, params) {
    const navigation = NavigationUtil.navigation;
    // const { navigation } = params;
    if (!navigation) {
      console.log("navigation----isunull");
      return;
    }
    navigation.navigate(page, {
      ...params
    });
  }
  static resetToHomePage() {
    const navigation = NavigationUtil.navigation;
    navigation.navigate("Home");
  }
}
