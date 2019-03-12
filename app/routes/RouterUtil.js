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
