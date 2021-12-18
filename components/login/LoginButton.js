import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Button, withTheme} from 'react-native-paper';

const style = StyleSheet.create({
  button: {
    color: 'white',
  },
});

class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPressed: false,
      color: props.color ?? 'white',
    };
    this.onPress = this.onPress.bind(this);
  }
  onPress() {
    console.log(this.state);
  }
  render() {
    return (
      <Button labelStyle={style.button} onPress={this.onPress} mode="contained">
        Login
      </Button>
    );
  }
}

export default withTheme(LoginButton);
