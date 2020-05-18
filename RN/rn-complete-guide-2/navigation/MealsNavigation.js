import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../constants/colors';

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTitleStyle:{
        fontFamily:'open-sans-bold'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor

}

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen, //"Categories" is the route name
    },
    //"CategoryMeals" is the route name
    CategoryMeals: {
        screen: CategoryMealsScreen
    },
    //"MealDetail" is the route name
    MealDetail: MealDetailScreen
},
    //second object allows us to configure the stack navigator
    {
        //this will be applied to all the routes
        //defaultNavigationOptions merge with the specific options defined
        defaultNavigationOptions: defaultStackNavOptions,
        //this is optional
        //initialRouteName:'Categories'
    });

// Using TABS NAVIGATION //

//Favourites Stack Navigator
const FavNavigator = createStackNavigator({
    Favourites: FavouritesScreen,
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: defaultStackNavOptions
});


const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.primaryColor
        }
    },
    //MealsNavigator(stack navigator) is a component and hence we can use it into MealsFavTabNavigator(tab navigator) 
    Favourites: {
        screen: FavNavigator, navigationOptions: {
            tabBarLabel: "Favourites!",
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.accentColor,

        }
    }
}

//Main Screen Tab Navigator
const MealsFavTabNavigator =
    Platform.OS === 'android' ?
        createMaterialBottomTabNavigator(
            tabScreenConfig,
            {
                activeColor: 'white',
                shifting: true,
                //use the following if "tabBarColor" in above "tabScreenConfig" doesn't work
                //barStyle:{backgroundColor:Colors.primaryColor}
            })
        : createBottomTabNavigator(
            tabScreenConfig,
            {
                tabBarOptions: {
                    activeTintColor: 'white',
                    labelStyle:{
                        fontFamily:'open-sans'
                    }
                }
            });

//wrap the FiltersScreen inside stack navigator so that we get the default navigation options(header,etc.)
const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
},{
    // navigationOptions:{
    //     drawerLabel:"Filters!!!!"
    // },
    defaultNavigationOptions:defaultStackNavOptions
});

const MainNavigator = createDrawerNavigator({
    MealsFavs: {
        screen:MealsFavTabNavigator,
        navigationOptions:{
            drawerLabel:'Meals'
        }
    },
    Filters: FiltersNavigator
},{
    contentOptions:{
        activeTintColor:Colors.accentColor,
        labelStyle:{
            fontFamily:'open-sans-bold',
            fontSize:20
        }
    }
});



export default createAppContainer(MainNavigator);