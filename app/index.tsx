import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class index extends Component {
  render() {
    return (
      <View  style={styles.container}>

        <Text >index</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        justifyContent:'center',
        flex:1,
    }
})