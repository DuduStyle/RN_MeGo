/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import NavigationUtil from '../routes/RouterUtil';


export default class MinePage extends Component {
  render() {
    const TabNavigator = createAppContainer(createMaterialTopTabNavigator({
      TeaminTab1:{
        screen: TeaminTab,
        navigationOptions: {
          title:'限时特卖'
        }
      },
      TeaminTab2:{
        screen: TeaminTab,
        navigationOptions: {
          title:'预告会场'
        }
      }
    }))
    return (
      <View style={{flex:1}}>
        <Text>这是轮播图</Text>
        <TabNavigator />
      </View>
    );
  }
}
class TeaminTab extends Component {
  render() {
    const { tabLael } = this.props;
    return (
      <View style={styles.container}>
        <Text>{tabLael}</Text>
        <Text
        onPress={()=>{
          NavigationUtil.goPage({
            navigation:this.props.navigation
          }, 'DetailPage')
        }}
      >
        条跳转到详情页
        </Text>
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
  slider: {
    height: 50
  }

});
