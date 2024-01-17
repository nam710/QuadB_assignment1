import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../screens/SearchScreen";
import MovieDetailsScreen from "../screens/MovieDetailsScreen";
import HomeScreen from "../screens/HomeScreen";
import AnimationScreen from "../screens/SplashScreen";
// import AnimationScreen from "../screens/SplashScreen";

const Stack = createStackNavigator();

const MyStack = ({ setLoaded, animationFinished, setAnimationFinished }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        children={(props) => (
          <AnimationScreen
            {...props}
            animationFinished={animationFinished}
            setAnimationFinished={setAnimationFinished}
          />
        )}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        children={(props) => <HomeScreen {...props} setLoaded={setLoaded} />}
      />
      <Stack.Screen name="Details" component={MovieDetailsScreen} />
      {/* <Stack.Screen name="Splash" component = {AnimationScreen}/> */}
      {/* <Stack.Screen name="Search" component={SearchScreen} /> */}
    </Stack.Navigator>
  );
};
export default MyStack;
