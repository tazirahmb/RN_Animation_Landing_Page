import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>H E A D E R</Text>
          </View>
          <View style={styles.content}>
            <Text>(Animation Place)</Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.triangle}></View>
            <Text style={styles.footerText}>(C) Ta'zirah Marwan, 2018</Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 12, 
    flexDirection: 'column',
    borderTopColor: 'red'
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEE',
    flex:1,
  },
  headerText: {
    fontSize: 40,
    fontWeight: '100',
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.75,
  },
  footerText: {
    color: '#AAA',
    fontSize: 10,
  },
  content: {
    flex: 10,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 100,
    borderTopWidth: 100,
    borderRightColor: 'transparent',
    borderTopColor: 'red',
    transform: [
      {rotate: '270deg'}
    ]
  }
});
