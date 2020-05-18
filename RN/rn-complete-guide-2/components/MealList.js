import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import MealItem from '../components/MealItem';

const MealList = props => {

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

    return <View style={styles.list}>
        <FlatList
            style={{ width: '100%' }}
            data={props.listData}
            keyExtractor={(item, index) => item.id}
            renderItem={renderMealItem}
        />
    </View>
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default MealList;