import React from 'react';
import { StatusBar, View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.14
import Stream from './native/components/Stream';

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <StatusBar hidden={true} />
    <Text>Home Screen</Text>
    <Button
      onPress={() => navigation.navigate('Details')}
      title="Go to details"
    />
    <Button
      onPress={() => navigation.navigate('DanYoung')}
      title="Dan Young: GOTD"
    />
    <Button
      onPress={() => navigation.navigate('JosephMarmerstein')}
      title="Joseph Marmerstein: GOTD"
    />
  </View>
);

const DetailsScreen = ({ navigation }) => (
  <Stream title={'Test'} navigation={navigation} clips={require('./native/json/clips.json').clips} />
);

const DanYoung = ({ navigation }) => (
  <Stream title={'@dry5'} navigation={navigation} clips={require('./native/json/DanYoung.json').clips} />
);

const JosephMarmerstein = ({ navigation }) => (
  <Stream title={'@Joemama_3'} navigation={navigation} clips={require('./native/json/JosephMarmerstein.json').clips} />
);

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home'
    },
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      headerTitle: 'Details'
    },
  },
  DanYoung: {
    screen: DanYoung,
    navigationOptions: {
      headerTitle: 'Dan Young'
    },
  },
  JosephMarmerstein: {
    screen: JosephMarmerstein,
    navigationOptions: {
      headerTitle: 'Joseph Marmerstein'
    },
  }
},
{
  headerMode: 'none'
});

export default RootNavigator;
