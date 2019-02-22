export default class NavigationUtil {
  static goBack(navigation){
    navigation.goBack();
  }
  static goPage(params, page){
    const navigation = NavigationUtil.navigation;
    if(!navigation) {
      console.log('2222')
      return;
    }
    navigation.navigate(page, {
      ...params
    });
  }
  static resetToHomePage(params){
    const navigation = NavigationUtil.navigation;
    navigation.navigate('Main');
  }
}