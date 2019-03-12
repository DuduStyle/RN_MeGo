/**
 * Created by Rabbit on 2018/5/3.
 */
import React, { Component } from "react";
import { createMaterialTopTabNavigator } from "react-navigation";

// import { System } from "../../utils";
// import { Icon, Theme } from "../../components";

import ShiTu from "./ShiTu";
import BuDeJie from "./BuDeJie";

export const GankTab = createMaterialTopTabNavigator(
  {
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
  },
  {
    initialRouteName: "ShiTu",
    swipeEnabled: true,
    animationEnabled: false,
    backBehavior: "none",

    lazy: true,
    tabBarOptions: {
      lazy: true,
      activeTintColor: "#4ECBFC",
      inactiveTintColor: "black",
      // upperCaseLabel: false,
      scrollEnabled: true,
      // tabbar的style
      style: {
        height: 44,
        backgroundColor: "white"
      },
      tabStyle: {
        // height:80,
        // width: 70,
        // backgroundColor: 'red'
      },
      labelStyle: {
        fontSize: 15
      },
      // 是否显示label，默认为true
      // showLabel: false,
      indicatorStyle: {
        height: 3, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了,
        backgroundColor: "#4ECBFC"
        // width:30,
        // alignItems:'center',
        // justifyContent:'center',
        // left: 48
      }
    }
  }
);
