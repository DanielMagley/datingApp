import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Container, Header, Content, Button, Text } from "native-base";
import styles from "./css/main.js";
// var { vw, vh, vmin, vmax } = require("react-native-viewport-units");

import io from "socket.io-client";
import { render } from "react-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatMessage: "",
      chatMessages: [],
    };
  }

  render() {
    return (
      <Container>
        {/* <Header /> */}
        <Content>
          <Button style={styles.topButton}>
            {/* <Text>Ask</Text>
            <Text>the Questions</Text> */}
            <Text style={styles.buttonTitles}>Ask The Questions</Text>
          </Button>
          <Button style={styles.bottomButton}>
            {/* <Text>Answer</Text>
            <Text>The Questions</Text> */}
            <Text style={styles.buttonTitles}>Answer The Questions</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
