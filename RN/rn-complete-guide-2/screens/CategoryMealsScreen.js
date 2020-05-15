import React from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';


const CategoryMealsScreen = props => {

    const catId = props.navigation.getParam('categoryId');
    //const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);


    const renderMealItem = itemData => {

        return (
            <View style={styles.mealItem}>
                <MealItem
                    title={itemData.item.title}
                    duration={itemData.item.duration}
                    complexity={itemData.item.complexity}
                    affordability={itemData.item.affordability}
                    image={itemData.item.imageUrl}
                    onSelectMeal={() => {
                        //console.log("Meal selected"+itemData.item.title);
                        props.navigation.navigate({
                            routeName: 'MealDetail',
                            params: {
                                mealId: itemData.item.id
                            }
                        })
                    }} />
            </View>
        )
    };

    return (
        <View style={styles.screen}>
            <FlatList
                style={{ width: '100%' }}
                data={displayedMeals}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
            />
        </View>
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
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mealItem: {
        padding: 10
    }
});

export default CategoryMealsScreen;