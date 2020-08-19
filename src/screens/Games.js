import React, { memo, Component } from 'react';
import ActivityIndicator from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import BackButton from '../components/BackButton';

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

import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

export default class Games extends Component {
  state = {
    data: [
      { id: 0, full_name: 'JOÃO SILVA', km: '5 KM', hr: '17:00 HRS', qtd: '8/10' },
      { id: 1, full_name: 'PEDRO JUNIOR', km: '7 KM', hr: '22:00 HRS', qtd: '4/10' },
      { id: 2, full_name: 'MARCELO P.', km: '8 KM', hr: '13:00 HRS', qtd: '2/10' },
      { id: 3, full_name: 'PAULO SOUZA', km: '15 KM', hr: '20:00 HRS', qtd: '7/10' },
    ],
  };

  renderElement(item){
    return <TouchableOpacity onPress={() => this.props.navigation.navigate('Game', {nome: item.full_name,tipo: this.props.navigation.state.params.tipo, hr: item.hr,})}>
      <View><Text  style={{ fontSize: 20, fontWeight: 'bold', alignSelf: "flex-start" }}>{item.full_name}</Text>
      <View style={{ width: "100%",
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 2}}>
      <Text  style={{ fontSize: 18, color: 'gray', fontWeight: 'bold', alignSelf: "flex-start" }}>{item.km}</Text>
      <Text  style={{ fontSize: 18, fontWeight: 'bold', alignSelf: "flex-end" }}>{item.qtd}</Text>
      </View>
      <Text  style={{ fontSize: 18, color: 'gray', fontWeight: 'bold', alignSelf: "flex-start" }}>{item.hr}</Text>
    </View></TouchableOpacity>
  }

  renderItem = ({ item }) => (
    <View style={[styles.listItem,
    item.id % 2 == 0 ? styles.listItemWhite : styles.listItemBlack]}>
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
          paddingHorizontal:15,
          flex: 1,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Dashboard')} style={styles.container}>
    <Image style={styles.image} source={require('../assets/seta.png')} />
  </TouchableOpacity>
        <Text style={{ marginLeft:15, fontSize: 30, fontWeight: '600', color: "white", alignSelf: "flex-start" }}>{this.props.navigation.state.params.tipo}</Text>
        
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
      fontSize: 30,
      fontWeight: "400",
    },
  
    listItem: {
      padding: 40,
      flex: 1,
      
      justifyContent: "space-between",
      fontSize: 30,
      fontWeight: "400",
    },
    listItemWhite: {
      backgroundColor: '#fff',
    },
    listItemBlack: {
      backgroundColor: '#EEE',
    },
    container: {
      // position: 'absolute',
      // top: 10 + getStatusBarHeight(),
      // left: 10,
    },
    image: {
      width: 35,
      height: 35,
    },
  });