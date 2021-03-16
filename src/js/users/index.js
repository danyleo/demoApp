import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Alert,
} from 'react-native';

import {
  responsiveWidth as wp,
  responsiveHeight as hp,
  responsiveFontSize as fs,
} from '../libs/responsive';

import {connect} from 'react-redux';
import Service from '../libs/api/service';
import {setData} from '../../redux/actions';
import UserItem from './items/user-item';
import Header from '../common/headers/header';
import Colors from '../settings/colors';

const PAGE_SIZE = 10;

class Users extends Component {
  pageNum = 1;

  constructor(props) {
    super(props);
    this.state = {
      items: props.data,
      isDataEnd: false,
    };
  }

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.data != this.props.data) {
      this.setState({items: this.props.data});
    }
  }

  async getData() {
    let form = {
      results: PAGE_SIZE,
      page: this.pageNum,
    };

    let service = new Service();
    response = await service.loadData(form);

    if (response.error) {
      Alert.alert(response.error);
    } else {
      let isDataEnd = false;
      if (response.results.length < PAGE_SIZE) {
        isDataEnd = true;
      }

      this.setState({
        isDataEnd,
      });

      let data = [...this.props.data, ...response.results];
      this.props.setData(data);
    }
  }

  async onEndReached() {
    let {isDataEnd} = this.state;

    if (!this.onEndReachedCalledDuringMomentum) {
      if (!isDataEnd) {
        this.pageNum += 1;
        await this.getData();
      }
      this.onEndReachedCalledDuringMomentum = true;
    }
  }

  _renderLoader() {
    let {isDataEnd} = this.state;

    if (!isDataEnd) {
      return (
        <ActivityIndicator
          style={styles.laoder}
          size="large"
          color={Colors.THEME_COLOR}
          animating={true}
        />
      );
    }
  }

  _item({item, index}) {
    return <UserItem item={item} />;
  }

  render() {
    let {items} = this.state;

    return (
      <View style={styles.container}>
        <Header title={'Users List'} back navigation={this.props.navigation} />
        <FlatList
          style={styles.list}
          contentContainerStyle={{paddingBottom: hp(150)}}
          showsVerticalScrollIndicator={false}
          data={items}
          extraData={items}
          renderItem={this._item.bind(this)}
          keyExtractor={(item, index) => item.login.salt}
          ListFooterComponent={this._renderLoader.bind(this)}
          onEndReached={this.onEndReached.bind(this)}
          onEndReachedThreshold={0.5}
          onMomentumScrollBegin={() => {
            this.onEndReachedCalledDuringMomentum = false;
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setData: data => {
      dispatch(setData(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BORDER,
  },
  list: {
    marginTop: hp(10),
  },
  laoder: {
    marginTop: hp(30),
  },
});
