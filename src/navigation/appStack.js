import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../screens/SearchScreen";
import MovieDetailsScreen from "../screens/MovieDetailsScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Details" component={MovieDetailsScreen} />
      {/* <Stack.Screen name="Search" component={SearchScreen} /> */}
    </Stack.Navigator>
  );
};
export default MyStack