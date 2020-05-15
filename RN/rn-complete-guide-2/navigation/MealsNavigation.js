import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { StyleSheet, View, Text, Platform, Modal } from 'react-native';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/colors';

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
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
        },
        //this is optional
        //initialRouteName:'Categories'
    });


export default createAppContainer(MealsNavigator);