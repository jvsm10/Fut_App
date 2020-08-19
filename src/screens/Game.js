import React, { memo, Component } from 'react';
import ActivityIndicator from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import BackButton from '../components/BackButton';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

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

export default class Games extends Component {
  state = {
    data: [
      { id: 0, full_name: 'RUA DAS FLORES, 111, PQ DAS FLORES', val: 'R$ 10,00'},
    ],
    part: 'PARTICIPAR +'
  };


  ShowHideComponent = () => {
    if (this.state.part == 'PARTICIPAR +') {
      this.setState({ part: 'CANCELAR' });
    } else {
      this.setState({ part: 'PARTICIPAR +'});
    }
  };

  renderItem = ({ item }) => (
    <View style={[styles.listItem,
    item.id % 2 == 0 ? styles.listItemWhite : styles.listItemBlack]}>
       <Text  style={{ fontSize: 20, fontWeight: 'bold', alignSelf: "flex-start" }}>HORÁRIO</Text>
      <Text  style={{ fontSize: 18, color: 'gray', fontWeight: 'bold', alignSelf: "flex-start" }}>{this.props.navigation.state.params.hr}</Text>
      <Text  style={{ fontSize: 20, fontWeight: 'bold', alignSelf: "flex-start", marginTop:'5%' }}>LOCAL</Text>
      <Text  style={{ fontSize: 18, color: 'gray', fontWeight: 'bold', alignSelf: "flex-start" }}>{item.full_name}</Text>
      <Text  style={{ fontSize: 20, fontWeight: 'bold', alignSelf: "flex-start", marginTop:'5%' }}>VALOR</Text>
      <Text  style={{ fontSize: 18, color: 'gray', fontWeight: 'bold', alignSelf: "flex-start" }}>{item.val}</Text>
      <Text  style={{ fontSize: 20, fontWeight: 'bold', alignSelf: "flex-start", marginTop:'5%' }}>REGRAS DO ADMINISTRADOR</Text>
      <Text  style={{ fontSize: 18, color: 'gray', fontWeight: 'bold', alignSelf: "flex-start" }}>- NÃO BRIGAR</Text>
      <Text  style={{ fontSize: 18, color: 'gray', fontWeight: 'bold', alignSelf: "flex-start" }}>- SEM XINGAMENTOS</Text>
      <Button mode="contained" style={{alignSelf:'flex-end', marginTop:'80%'}} onPress={this.ShowHideComponent}>
        {this.state.part}
      </Button>
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
         {/* <BackButton  goBack={() => this.props.navigation.navigate('Games')} />  */}
         <TouchableOpacity onPress={() => this.props.navigation.navigate('Games')} style={styles.container}>
    <Image style={styles.image} source={require('../assets/seta.png')} />
  </TouchableOpacity>
        <Text style={{ marginLeft:15, fontSize: 25, fontWeight: '600', color: "white", alignSelf: "flex-start" }}>{this.props.navigation.state.params.tipo} - {this.props.navigation.state.params.nome} </Text>
        
      </View>
    );
  }

  render() {
    return (
      <FlatList
        style={{ marginTop: 30 }}
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
      flex: 1,
    },
  
    listItem: {
      padding: 40,
      flex: 1,
      justifyContent:'space-between',
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