import React from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';


const CategoryMealsScreen = props => {

    const catId = props.navigation.getParam('categoryId');
    //const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);




    return (
        <MealList listData={displayedMeals} navigation={props.navigation} />
    );
};

//here navigationOptions is a function associated with the CategoryMealsScreen
CategoryMealsScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    return {
        headerTitle: selectedCategory.title
    }
}

const styles = StyleSheet.create({

    mealItem: {
        padding: 10
    }
});

export default CategoryMealsScreen;