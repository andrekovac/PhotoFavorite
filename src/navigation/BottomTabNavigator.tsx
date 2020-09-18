import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { useSelector } from 'react-redux';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import PhotosScreen from '../screens/PhotosScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import CounterScreen from '../screens/CounterScreen';

import { RootStateT } from "../store/slices";
import { selectFavoritesCount } from '../store/selectors';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  const count = useSelector<RootStateT, number>((state) => state.count);
  const favoritesCount = useSelector<RootStateT, number>(selectFavoritesCount);

  return (
    <BottomTab.Navigator
      initialRouteName="Photos"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Photos"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-camera" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Favorites"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-heart" color={color} />,
          tabBarBadge: favoritesCount || undefined,
        }}
      />
      <BottomTab.Screen
        name="Counter"
        component={CounterScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="md-clock" color={color} />,
          tabBarBadge: count || undefined,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="PhotosScreen"
        component={PhotosScreen}
        options={{ headerTitle: 'Photos' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
        options={{ headerTitle: 'Favorites' }}
      />
    </TabTwoStack.Navigator>
  );
}
