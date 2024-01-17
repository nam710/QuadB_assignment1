import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import {Ionicons} from '@expo/vector-icons'
import React from "react";
import Chips from "./chips";


const MovieRow = ({ data, handleOnPress }) => {
  return (
    <Pressable style={styles.movieRow} onPress={handleOnPress}>
      <View style={styles.moviePoster}>
        {/* <View style={styles.duration}><Text>{data.item.show.runtime}</Text></View> */}
        {data.item.show.image != null ? (
          <Image
            style={{ width: 150, height: 150 }}
            source={{ uri: data.item.show.image.original }}
          />
        ) : (
          <Image style={{ width: 150, height: 150 }} source={require("../../assets/default-movie.png")}/>
        )}
      </View>
      <View style={styles.movieSection}>
        <View style={styles.movieHeader}>
          <Text style={styles.movieTitle}>{data.item.show.name}</Text>
          <View style={{alignItems:'center',flexDirection:'row',gap:4,paddingHorizontal:5}}>
            <Ionicons name="star" color="gold" />
            <Text style={{color:'white'}}>
              {data.item.show.rating.average == null
                ? "N/A"
                : data.item.show.rating.average}
            </Text>
          </View>
        </View>
        <Text style={styles.language}>{data.item.show.language}</Text>
        <View style={{ alignItems: "center", gap: 5, flexDirection: "row" }}>
          {data.item.show.genres.map((genre, index) => {
            return (
              <Chips
                key={index}
                chipTitle={genre}
                chipColor="red"
                chipTextColor="white"
                chipFontSize={12}
              />
            );
          })}
        </View>
        <View style={styles.summary}>
          <Text style={{color: 'rgba(255,255,255, 0.8)', fontSize: 12}}>{data.item.show.summary}</Text>  
        </View>
      </View>
    </Pressable>
  );
};

export default MovieRow;

const styles = StyleSheet.create({
  movieRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 10,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 10,
    overflow: 'hidden',
  },
  moviePoster: {
    aspectRatio: 1,
    position: 'relative'
  },
  duration: {
    position: 'absolute',
    top: 0,
    right: 0,
    color: 'white',
  },
  movieSection: {
    flex: 1,
    margin: 4,
  },
  language: {
    color: 'white',
    fontSize: 10,
    marginBottom: 4,
  },
  movieHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  movieTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "justify",
    color:"white"
  },
  summary: {
    marginLeft: 4,
    marginTop: 4,
    height: 60,
    overflow: 'hidden',
  }
});
