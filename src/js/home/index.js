import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {
  responsiveWidth as wp,
  responsiveHeight as hp,
  responsiveFontSize as fs,
} from '../libs/responsive';
import Colors from '../settings/colors';
import Header from '../common/headers/header';

export default class Home extends Component {
  constructor() {
    super();
  }

  onContinue() {
    let {navigation} = this.props;
    navigation.navigate('Users');
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title={'Home'} />
        <View style={styles.body}>
          <Text style={styles.heading}>Welcome To Demo App</Text>
          <Text style={styles.desc}>
            To see the available users list press the button below
          </Text>
          <TouchableOpacity
            onPress={this.onContinue.bind(this)}
            style={styles.button}>
            <Text style={styles.buttonText}>CONTINUE</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  body: {
    width: '80%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  heading: {
    color: Colors.BLACK,
    fontSize: fs(22),
    fontWeight: '600',
  },
  desc: {
    marginTop: hp(5),
    color: Colors.GREY,
    fontSize: fs(18),
    textAlign: 'center',
  },
  button: {
    width: '70%',
    height: hp(40),
    marginTop: hp(40),
    backgroundColor: Colors.THEME_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.WHITE,
    fontSize: fs(16),
    fontWeight: '600',
  },
});
