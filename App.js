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
  </View>
);

const DetailsScreen = ({ navigation }) => (
  <Stream navigation={navigation} />
);

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
      routeName: 'Home',
    },
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      headerTitle: 'Details'
    },
  }
},
{
  headerMode: 'none'
});

export default RootNavigator;
