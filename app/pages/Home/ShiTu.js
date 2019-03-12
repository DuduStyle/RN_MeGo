import React, { Component } from "react";
import { View, Text } from "react-native";
import navigationUtil from "../../routes/RouterUtil";

export default class LocalMusic extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text
          onPress={() => {
            navigationUtil.goPage("DetailPage");
          }}
        >
          LocalMusic
        </Text>
      </View>
    );
  }
}
