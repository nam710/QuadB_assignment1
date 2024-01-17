import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SearchRow = ({data}) => {
  return (
    <View style={styles.row}>
            {
                data.item.show.image===null?(
                    <Text>Image Unavailable</Text>
                ):(
                    <Image style={styles.image} source={{uri:data.item.show.image.original}}/>
                )
            }
      <Text>{data.item.show.name}</Text>
    </View>
  )
}

export default SearchRow

const styles = StyleSheet.create({
    row:{
        width:'100%',
        height:"auto",
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'flex-start',
        gap:10,
        paddingHorizontal:10
    },
    image:{
        width:50,
        height:50,
    }
})