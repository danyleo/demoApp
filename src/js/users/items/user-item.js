import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import {
  responsiveWidth as wp,
  responsiveHeight as hp,
  responsiveFontSize as fs,
} from '../../libs/responsive';

export default class UserItem extends Component {
  constructor() {
    super();
  }

  render() {
    let {item} = this.props;

    return (
      <View style={styles.container}>
        <Image style={styles.profileImage} source={{uri: item.picture.large}} />
        <View style={styles.info}>
          <Text style={styles.name}>
            {item.name.first + ' ' + item.name.last}
          </Text>
          <Text style={styles.gender}>{item.gender.toUpperCase()}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: hp(10),
    paddingTop: hp(20),
    paddingBottom: hp(20),
    paddingLeft: wp(20),
    paddingRight: wp(20),
    backgroundColor: '#fff',
    borderRadius: hp(6),
  },
  profileImage: {
    width: hp(80),
    height: hp(80),
    borderRadius: hp(40),
    backgroundColor: '#f2f2f2',
    resizeMode: 'cover',
  },
  info: {
    marginLeft: wp(20),
  },
  name: {
    color: '#1d1d1d',
    fontSize: fs(18),
    fontWeight: '500',
  },
  gender: {
    color: 'gray',
    marginTop: hp(2),
    fontSize: fs(14),
  },
});
