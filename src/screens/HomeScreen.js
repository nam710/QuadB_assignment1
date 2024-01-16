import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import MovieRow from "../components/movieRow";
import axios from "axios";
const baseUrl = "https://api.tvmaze.com/search/shows?q=";

// // Passing configuration object to axios
// const fetchUser = async () => {
//   const configurationObject = {
//     method: 'get',
//     url: `${baseUrl}all`,
//   };
//   const response = await axios(configurationObject);
//   console.log(response.data);
// };

// Invoking get method to perform a GET request
const fetchData = async () => {
  const url = `${baseUrl}all`;
  const response = await axios.get(url);
  return response.data;
};


const HomeScreen = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const getData = async () => {
      MovieData = await fetchData();
      setMovie(MovieData);
    };
    getData();
  }, []);

  const handleOnPress = () => {

  }

  return (
    <View style={styles.container}>
      <FlatList
        data={movie}
        keyExtractor={(data) => data.show.id}
        renderItem={(data) => <MovieRow data={data} handleOnPress={handleOnPress}/>}
      />
      
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
