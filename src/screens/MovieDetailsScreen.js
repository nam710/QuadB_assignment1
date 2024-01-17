import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  Pressable,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Chips from "../components/chips";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");
const borderWidth = width;

const MovieDetailsScreen = ({ route }) => {
  const show = route.params;
  const language = show.language;
  const duration = show.runtime + " minutes";
  let starNum = Math.round(show.rating.average / 2);
  return (
    <View style={styles.container}>
      <View style={styles.moviePoster}>
        {show.image === null ? (
          <Image
            style={{ height: 300, width: "100%", aspectRatio: 1, resizeMode: 'cover' }}
            source={require("../../assets/default-movie.png")}
          />
        ) : (
          <Image
            style={{ height: 300, width: "100%", aspectRatio: 1, resizeMode: 'cover' }}
            source={{ uri: show.image.original }}
          />
        )}
        <View style={styles.title}>
          <Text style={{ fontSize: 32, color: "white", fontWeight: "600" }}>
            {show.name}
          </Text>
          <View style={styles.genre}>
            <Chips
              chipTitle="Genres"
              chipColor="black"
              chipTextColor="white"
              chipFontSize={12}
            />
            {show.genres.map((genre, index) => {
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
          <View
            style={{
              flexDirection: "row",
              gap: 2,
              alignItems: "center",
              paddingHorizontal: 5,
            }}
          >
            <Text style={{ fontSize: 16, color: "white" }}>
              {show.rating.average}
            </Text>

            <Ionicons
              name={`${starNum-- > 0 ? "star" : "star-outline"}`}
              size={20}
              color="gold"
            />
            <Ionicons
              name={`${starNum-- > 0 ? "star" : "star-outline"}`}
              size={20}
              color="gold"
            />
            <Ionicons
              name={`${starNum-- > 0 ? "star" : "star-outline"}`}
              size={20}
              color="gold"
            />
            <Ionicons
              name={`${starNum-- > 0 ? "star" : "star-outline"}`}
              size={20}
              color="gold"
            />
            <Ionicons
              name={`${starNum-- > 0 ? "star" : "star-outline"}`}
              size={20}
              color="gold"
            />
          </View>
        </View>
      </View>
      <View style={{ alignItems: "flex-start", padding: 10, gap: 6 }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            color: "gold",
            borderBottomWidth: 2,
            borderBottomColor: "gold",
          }}
        >
          Storyline:
        </Text>
        <Text
          style={{
            textAlign: "justify",
            paddingHorizontal: 5,
            color: "rgba(255,255,255,0.8)",
          }}
        >
          {show.summary}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            flex: 1,
            borderEndWidth: 2,
            borderEndColor: "rgba(255,255,255,0.8)",
            gap: 10,
          }}
        >
          <Text style={{ color: "gold", fontSize: 16 }}>Length</Text>
          <Text style={{ color: "rgba(255,255,255,0.8)", fontSize: 14 }}>
            {duration}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            flex: 1,
            borderEndWidth: 2,
            borderEndColor: "rgba(255,255,255,0.8)",
            gap: 10,
          }}
        >
          <Text style={{ color: "gold", fontSize: 16 }}>Language</Text>
          <Text style={{ color: "rgba(255,255,255,0.8)", fontSize: 14 }}>
            {language}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            flex: 1,
            gap: 10,
          }}
        >
          <Text style={{ color: "gold", fontSize: 16 }}>Rating</Text>
          <Text style={{ color: "rgba(255,255,255,0.8)", fontSize: 14 }}>
            {show.rating.average}
          </Text>
        </View>
      </View>
      <Pressable style={styles.viewnow}>
        <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
          WATCH NOW
        </Text>
      </Pressable>
    </View>
  );
};

export default MovieDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    position: "relative",
    backgroundColor: "#000f21",
  },
  moviePoster: {
    position: "relative",
    width: "100%",
    height: 300,
    alignItems: "center",
    backgroundColor: "lightgray",
    // borderBottomStartRadius:borderWidth,
    // borderBottomEndRadius:borderWidth
  },
  title: {
    flex: 1,
    flexDirection: "column",
    position: "absolute",
    bottom: 0,
    left: 0,
    padding: 8,
    gap: 4,
  },
  movieHeader: {
    flexDirection: "row",
    padding: 6,
    justifyContent: "space-between",
    alignItems: "center",
  },
  movieTitle: {
    fontSize: 24,
    fontWeight: "500",
    color: "rgba(255,255,255,0.8)",
  },
  movieRating: {
    fontSize: 18,
  },
  extrasContainer: {
    gap: 5,
  },
  genre: {
    flexDirection: "row",
    gap: 5,
  },
  viewnow: {
    position: "absolute",
    bottom: 0,
    margin: 10,
    width: "95%",
    padding: 8,
    alignItems: "center",
    backgroundColor: "red",
    justifyContent: "center",
    borderRadius: 5,
  },
});
