import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import Svg, {Circle, Polygon} from 'react-native-svg';

export default class App extends Component {
  
/**
 * onLayout={event => {
              console.warn("Event", event.nativeEvent.layout)
            }}
 * 
 * kode di atas untuk ngambil dimensi dari View
 * kalo mau ambil Dimension/satu layar, lewat dimensions.get('window').width/height
 */
  
  state = {
    headerWidth: 0,
    headerHeight: 0,
    footerHeight: 0,
    footerWidth: 0
  }

  render() {
    return (
      <View style={styles.container}>
          <View
            style={styles.header}
            onLayout={event => {
              this.setState({
                headerWidth: event.nativeEvent.layout.width,
                headerHeight: event.nativeEvent.layout.height
              })
            }}
          >
            <Svg 
              width={this.state.headerWidth}
              height={this.state.headerHeight}
              style={{position: "absolute"}}
            >
              <Polygon 
                points={"0,0 " + this.state.headerWidth + ",0 " + this.state.headerWidth + "," + this.state.headerHeight/2 + " 0," + this.state.headerHeight}
                fill="#DDD"
              />
            </Svg>
            <Text style={styles.headerText}>H E A D E R</Text>
          </View>
          <View style={styles.content}>
            <Svg
              width="100"
              height="100"
              style={{position: "absolute"}}
            >
              <Circle
                cx="50"
                cy="50"
                r="50"
                fill="#FAA"
              />
            </Svg>
            <Image
              source={require('./images/KaitoKid.png')}
              style={{
                width: 100,
                height: 120
              }}
            />
            <Button
              title="Press Me!"
              color="#A00"
              textColor="#FFF"
              accessibilityLabel="Testing Button"
            />
          </View>
          <View
            style={styles.footer}
            onLayout={event => {
              this.setState({
                footerWidth: event.nativeEvent.layout.width,
                footerHeight: event.nativeEvent.layout.height
              })
            }}
          >
            <Svg
              width={this.state.footerWidth}
              height={this.state.footerHeight}
              style={{position: "absolute"}}
            >
              <Polygon
                points={"0,0 " + this.state.footerHeight + "," + this.state.footerHeight + " " + this.state.footerWidth+ ",0 " + this.state.footerWidth + "," + this.state.footerHeight + " 0," + this.state.footerHeight}
                fill="#DDD"
              />
            </Svg>
            <Text style={styles.footerText}>(C) Ta'zirah Marwan, 2018</Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 12, 
    flexDirection:   'column',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex:2,
  },
  headerText: {
    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 15
  },
  footer: {
    justifyContent: 'center',
    flex: 0.75,
  },
  footerText: {
    color: '#AAA',
    fontSize: 10,
    marginLeft: 35,
    marginBottom: 10
  },
  content: {
    flex: 9,
    alignItems: 'center',
    justifyContent: 'center', 
  }
});
