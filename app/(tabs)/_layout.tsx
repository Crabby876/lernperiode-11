import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return(
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: '#ffc021ff',
      headerStyle: {
         backgroundColor: '#636363ff'
      },
      headerTintColor: '#ffffff',
      headerShadowVisible: false,
      tabBarStyle: { 
         backgroundColor: '#636363ff' 
      },

    }}
    >
      <Tabs.Screen name="index" options={{
        headerTitle: 'Sticker Smash',
        tabBarIcon: ({focused, color}) => (
            <Ionicons 
                name={focused ? "home" : "home-outline"} 
                size={30}
                color={color} 
            />
        ),
      }}/>
      <Tabs.Screen name="about" options={{
        headerTitle: 'About',
        tabBarIcon: ({focused, color}) => (
            <Ionicons 
                name={focused ? "information-circle" : "information-circle-outline"}
                size={30}
                color={color} 
            />
        ),
      }}/>
    </Tabs>
  );
}
