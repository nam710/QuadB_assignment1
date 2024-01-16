import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Chips = ({chipTitle,chipColor,chipTextColor}) => {
    const chipStyle = { 
        backgroundColor:chipColor || "lightblue",
        borderRadius:20,
        paddingHorizontal:10,
    }
    const chipTextStyle = {
       fontSize:18,
       color: chipTextColor || "black"
    }
  return (
    <View style={[styles.chips,chipStyle]}>
        <Text style={chipTextStyle}>
            {chipTitle}
        </Text>
    </View>
  )
}

export default Chips

const styles = StyleSheet.create({
    chips:{
        backgroundColor:'red',
        borderRadius:20,
        paddingHorizontal:10,
        
    },  
})