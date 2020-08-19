import React, { memo, Component } from 'react';
import ActivityIndicator from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';

// const Dashboard = ({ navigation }) => (
//   <Background>
//     <Logo />
//     <Header>Let’s start</Header>
//     <Paragraph>
//       Your amazing app starts here. Open you favourite code editor and start
//       editing this project.
//     </Paragraph>
//     <Button mode="outlined" onPress={() => navigation.navigate('HomeScreen')}>
//       Logout
//     </Button>
//   </Background>
// );

// export default memo(Dashboard);

import { View, Text, FlatList, StyleSheet } from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

export default class Dashboard extends Component {
  state = {
    data: [
      { id: 0, full_name: 'CAMPO' },
      { id: 1, full_name: 'FUTSAL' },
      { id: 2, full_name: 'SOCIETY' },
      { id: 3, full_name: 'STREET' },
    ],
  };

  renderElement(item){
    if (item.id==0) {
      return <TouchableOpacity onPress={() => this.props.navigation.navigate('Games', {tipo: 'CAMPO'})}>
        <View style={[styles.listItem,
    item.id % 2 == 0 ? styles.listItemWhite : styles.listItemBlack]}>
        <Text style={{fontSize:20, fontWeight: 'bold'}}>{item.full_name}</Text>
        </View>
      </TouchableOpacity>
    }
    else if (item.id == 1) {
     return <TouchableOpacity onPress={() => this.props.navigation.navigate('Games', {tipo: 'FUTSAL'})}>
        <View style={[styles.listItem,
    item.id % 2 == 0 ? styles.listItemWhite : styles.listItemBlack]}>
        <Text style={{fontSize:20, fontWeight: 'bold'}}>{item.full_name}</Text></View>
      </TouchableOpacity>
    }
    else if (item.id==2) {
      return <TouchableOpacity onPress={() => this.props.navigation.navigate('Games', {tipo: 'SOCIETY'})}>
        <View style={[styles.listItem,
    item.id % 2 == 0 ? styles.listItemWhite : styles.listItemBlack]}>
        <Text style={{fontSize:20, fontWeight: 'bold'}}>{item.full_name}</Text></View>
      </TouchableOpacity>
    }
    else {
      return <TouchableOpacity onPress={() => this.props.navigation.navigate('Games', {tipo: 'STREET'})}>
        <View style={[styles.listItem,
    item.id % 2 == 0 ? styles.listItemWhite : styles.listItemBlack]}>
        <Text style={{fontSize:20, fontWeight: 'bold'}}>{item.full_name}</Text></View>
      </TouchableOpacity>
    }
  }

  renderItem = ({ item }) => (
    <View>
      {this.renderElement(item)}
    </View>
  );

  FlatListHeader = () => {
    return (
      <View elevation={1}
        style={{
          width: "100%",
          backgroundColor: "green",
          color: "white",
          paddingVertical: 20,
          paddingHorizontal:35,
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: '600', color: "white", alignSelf: "flex-start" }}>TIPOS</Text>
        <Text style={{ fontSize: 25, fontWeight: '400', color: "white", alignSelf: "flex-end" }}
          onPress={() => this.props.navigation.navigate('HomeScreen')}>Sair</Text>
      </View>
    );
  }

  render() {

    return (
      <FlatList
        style={{ marginTop: 30 }}
        contentContainerStyle={styles.list}
        data={this.state.data}
        renderItem={this.renderItem}
        ListHeaderComponent={this.FlatListHeader}
        keyExtractor={item => item.id.toString()}
        onEndReached={this.loadRepositories}
        onEndReachedThreshold={0.1}
        ListFooterComponent={this.renderFooter}
      />
    );
  }

  renderFooter = () => {
    if (!this.state.loading) return null;
    return (
      <View style={styles.loading}>
        <ActivityIndicator />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  list: {
    // paddingHorizontal: 20,
    fontSize: 40,
    fontWeight: "bold",
  },

  listItem: {
    padding: 70,
    textAlign: "center",
    alignItems: "center",
    fontSize: 40,
    fontWeight: "bold",
  },
  listItemWhite: {
    backgroundColor: '#fff',
  },
  listItemBlack: {
    backgroundColor: '#EEE',
  },
});
