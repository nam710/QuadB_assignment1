import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const MovieRow = ({ data, handleOnPress }) => {
  console.log(data.item.show.image);

  return (
    <Pressable style={styles.movieRow} onPress={handleOnPress}>
      <View style={styles.moviePoster}>
        {data.item.show.image != null ? (
          <Image style={{minWidth:150,minHeight:150}} source={{ uri: data.item.show.image.original }} />
        ) : (
          <Text>Image unavailable</Text>
        )}
      </View>
      <View style={styles.movieSection}>
        <View style={styles.movieHeader}>
          <Text style={styles.movieTitle}>{data.item.show.name}</Text>
          <Text>
            {data.item.show.rating.average == null
              ? "N/A"
              : data.item.show.rating.average}
          </Text>
        </View>
        <Text style={styles.movieSummary}>{data.item.show.summary}</Text>
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
    padding: 5,
  },
  moviePoster: {
    aspectRatio: 1,
  },
  movieSection: {
    flex: 1,
  },
  movieHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  movieTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
