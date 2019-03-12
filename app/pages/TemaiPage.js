/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createMaterialTopTabNavigator
} from "react-navigation";
import ShiTu from "./Home/ShiTu";
import BuDeJie from "./Home/BuDeJie";
import navigationUtil from "../routes/RouterUtil";

type Props = {};
export default class GankTab extends Component<Props> {
  render() {
    const TabNavigator = createAppContainer(
      createMaterialTopTabNavigator({
        Gank: {
          screen: BuDeJie,
          navigationOptions: {
            title: "限时特卖"
          }
        },
        ShiTu: {
          screen: ShiTu,
          navigationOptions: {
            title: "预告会场"
          }
        }
      })
    );
    return (
      <View style={{ flex: 1 }}>
        <TemaiPage />
        <TabNavigator />
      </View>
    );
  }
}
class TemaiPage extends Component<Props> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          onPress={() => {
            // this.props.navigation.navigate("DetailPage");
            navigationUtil.goPage("DetailPage");
          }}
        >
          <Text>这是轮播图2222</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
