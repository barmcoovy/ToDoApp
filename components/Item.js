import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Item = (props) => {
  return (
    <View style={styles.container}>
        <View key={props.id} style={styles.item}>
            <Text style={styles.content}>{props.text}</Text>
        </View>
    </View>
    
  )
}

export default Item

const styles = StyleSheet.create({
    container:{ 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    item:{
        margin: 15,
        borderWidth: 1,
        borderColor: "#353535",
        borderRadius: 15,
        width: 270,
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    content:{
        padding: 10,
        fontSize: 20,
        textAlign: 'center',
    }
})