/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import TemaiPage from "./TemaiPage";
import MinePage from "./MinePage";
import PopularPage from "./PopularPage";
import TrendingPage from "./TrendingPage";
import navigationUtil from "../routes/RouterUtil";

const tabBarOptions = {
  activeTintColor: "#222222",
  inactiveTintColor: "#B8B8B8"
};
// navigationUtil.navigation = this.props.navigation;
export const TopTabNavigator = createBottomTabNavigator(
  {
    //在这里配置页面的路由
    Temai: {
      screen: TemaiPage,
      navigationOptions: {
        tabBarLabel: "特卖",
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          return (
            <Image
              source={
                focused
                  ? require("../images/icon_mego_temai_h.png")
                  : require("../images/icon_mego_temai.png")
              }
              style={styles.item}
            />
          );
        }
      }
    },
    TrendingPage: {
      screen: TrendingPage,
      navigationOptions: {
        tabBarLabel: "好店",
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          return (
            <Image
              source={
                focused
                  ? require("../images/icon_mego_hd_h.png")
                  : require("../images/icon_mego_hd.png")
              }
              style={styles.item}
            />
          );
        }
      }
    },
    PopularPage: {
      screen: PopularPage,
      navigationOptions: {
        tabBarLabel: "发现",
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          return (
            <Image
              source={
                focused
                  ? require("../images/icon_mego_discover_h.png")
                  : require("../images/icon_mego_discover.png")
              }
              style={styles.item}
            />
          );
        }
      }
    },
    MinePage: {
      screen: MinePage,
      navigationOptions: {
        tabBarLabel: "我的",
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          return (
            <Image
              source={
                focused
                  ? require("../images/icon_mego_me_h.png")
                  : require("../images/icon_mego_me.png")
              }
              style={styles.item}
            />
          );
        }
      }
    }
  },
  {
    tabBarOptions
  }
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  item: {
    width: 27,
    height: 27
  }
});
