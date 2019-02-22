import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import NavigationUtil from '../routes/RouterUtil';

type Props = {};
export default class WelcomePage extends Component<Props> {
  componentDidMount = () => {
    this.timer = setTimeout(() => {
      NavigationUtil.resetToHomePage({
        navigation:this.props.navigation
      })
    }, 2000);
  }
  componentWillUnmount(){
    this.timer&&clearTimeout(this.timer);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>欢迎</Text>
        <Image style={styles.item}   source={require('../images/welcome.png')}></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  

});
