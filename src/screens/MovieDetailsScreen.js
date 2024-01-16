import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Chips from '../components/chips'

const {width} = Dimensions.get("screen")
const borderWidth = width/4
const lang = "abc"
const MovieDetailsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.moviePoster}>
            <Text>this is random text</Text>
        </View>
      <View style={styles.movieHeader}>
            <Text style={styles.movieTitle}>
                This is movie title
            </Text>
            <Text style={styles.movieRating}>
                4.5
            </Text>
      </View>
      <View style={styles.extrasContainer}>
            <View style={styles.genre}>
                <Chips chipTitle="Genres" chipColor="black" chipTextColor="white"/>
                {
                    ["Horror","Comedy"].map((genre,index)=>{
                        return(
                            <Chips key={index} chipTitle={genre} chipColor="red" chipTextColor="white"/>
                        )
                    }
                       
                    )
                }
            </View>
            <View style={styles.languages}>
            <Text>
                Languages:{lang}
            </Text>
            </View>
            <View style={styles.duration}>
            <Text>Duration:{lang}</Text>
            </View>
      </View>
    </SafeAreaView>
  )
}

export default MovieDetailsScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'lightblue'
    },
    moviePoster:{
        width:"100%",
        height:100,
        alignItems:'center',
        backgroundColor:'green',
        borderBottomStartRadius:borderWidth,
        borderBottomEndRadius:borderWidth
    },
    movieHeader:{
        flexDirection:'row',
        paddingHorizontal:10,
        justifyContent:'space-between',
        alignItems:'center',
    },
    movieTitle:{
        fontSize:24,
        fontWeight:"500",
    },
    movieRating:{
        fontSize:18,
    },
    extrasContainer:{
        gap:5,

    },
    genre:{
        flexDirection:'row',
        gap:5
    }
})