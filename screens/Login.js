import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import LoginButton from '../components/login/LoginButton';

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
  },
  header: {
    flex: 1,
    height: '30%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  body: {
    height: '70%',
    padding: '5%',
  },
  form: {},
  formItem: {marginBottom: 10},
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: props?.username ?? '',
      password: props?.password ?? '',
    };
  }

  render() {
    return (
      <View style={style.container}>
        <View style={style.header}></View>
        <View style={style.body}>
          <View style={style.form}>
            <TextInput
              label="Username"
              value={this.state.username}
              onChangeText={text => this.setState({username: text})}
              mode="outlined"
              style={style.formItem}
            />
            <TextInput
              secureTextEntry={true}
              label="Password"
              value={this.state.password}
              onChangeText={text => this.setState({password: text})}
              mode="outlined"
              style={style.formItem}
            />
            <LoginButton />
          </View>
        </View>
      </View>
    );
  }
}

export default Login;
