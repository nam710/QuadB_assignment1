import React, { useEffect } from "react";
import axios from "axios";
import { FlatList } from "react-native";
import { SearchBar } from "@rneui/base";
import SearchRow from "../components/searchRow";

const fetchMovie = async (searchTerm) => {
  const movies = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
  return movies.data;
}

const SearchScreen = () => {
  const [value, setValue] = React.useState("");
  const [movies, setMovies] = React.useState([]);

  useEffect(() => {
    const fetchSpecificMovies = async () => {
      const data = await fetchMovie(value);
      setMovies(data);
    }
    fetchSpecificMovies();
  }, [value])

  return (
    <>
      <SearchBar
        platform="android"
        containerStyle={{}}
        inputContainerStyle={{}}
        inputStyle={{}}
        leftIconContainerStyle={{}}
        rightIconContainerStyle={{}}
        loadingProps={{}}
        onChangeText={newVal => setValue(newVal)}
        onClearText={() => setValue('')}
        placeholder="Type query here..."
        placeholderTextColor="#888"
        cancelButtonTitle="Cancel"
        cancelButtonProps={{}}
        onCancel={() => setValue('')}
        value={value}
      />
      <FlatList
        data={movies}
        keyExtractor={(data) => data.show.id}
        renderItem={(data) => {
          return (
            <SearchRow data={data} />
          )
        }}
      />
    </>

  );
}

export default SearchScreen;