import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';

import {
  responsiveWidth as wp,
  responsiveHeight as hp,
  responsiveFontSize as fs,
} from '../../libs/responsive';
import Colors from '../../settings/colors';

export default class Header extends Component {
  constructor() {
    super();
  }

  onBackPress() {
    let {navigation} = this.props;
    navigation.goBack();
  }

  _renderLeft() {
    let {back} = this.props;
    if (back) {
      return (
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => {
            this.onBackPress();
          }}>
          <Image
            style={styles.icon}
            source={require('../../../assets/back-vector.png')}
          />
        </TouchableOpacity>
      );
    } else {
      return <View style={styles.iconContainer} />;
    }
  }

  _renderRight() {
    return <View style={styles.iconContainer} />;
  }

  _renderMiddle() {
    let {title} = this.props;
    if (title) {
      return <Text style={styles.title}>{title}</Text>;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusBar} />
        <View style={styles.navBar}>
          {this._renderLeft()}
          {this._renderMiddle()}
          {this._renderRight()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    borderBottomWidth: 1,
    borderColor: '#E6E8EA',
  },
  title: {
    color: Colors.BLACK,
    fontSize: fs(18),
    fontWeight: '600',
  },
  statusBar: {
    width: '100%',
    height: Platform.OS === 'ios' ? hp(20) : hp(2),
  },
  navBar: {
    flexDirection: 'row',
    height: Platform.OS === 'ios' ? hp(55) : hp(46),
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: hp(10),
  },
  icon: {
    width: hp(16),
    height: hp(16),
    resizeMode: 'contain',
  },
  iconContainer: {
    marginLeft: wp(7),
    width: hp(50),
    height: hp(50),
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
