import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/colors';
import CategoryGridTile from '../components/CategoryGridTile';


const CategoriesScreen = props => {



    const renderGridItem = (itemData) => {
        return <CategoryGridTile 
        title={itemData.item.title}
        color={itemData.item.color}
            onSelect={() => {
                props.navigation.navigate({
                    routeName: 'CategoryMeals',
                    params: {
                        categoryId: itemData.item.id
                    }
                });
            }}
        />
    }

    return (

        <FlatList
            //keyExtractor={(item,index)=>item.id} //not required in new versions of react native
            numColumns={2}
            data={CATEGORIES}
            renderItem={renderGridItem} />
    );

};

//here navigationsOptions is a static object associated with the CategoriesScreen(function/object/class)
//(we can also have it as a function associated with the CategoriesScreen)
CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',


}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    header: {
        backgroundColor: Colors.primaryColor
    }
});

export default CategoriesScreen;

/*
<Button title="Go To Meals!" onPress={() => {
                props.navigation.navigate({
                    routeName: 'CategoryMeals' //route names are registered in MealNavigator(MealsNavigation.js)

                });
                //Alternatively push() can be used.
                //It will push the screen onto stack no matter if we are already on the screen
                //props.navigation.push('Categories');
            }} />
*/