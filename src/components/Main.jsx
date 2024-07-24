import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import AppBar from "./AppBar";
import Constants from 'expo-constants'
import CardRecipes from "./CardRecipes";
import TagsIngredient from "./TagsIngredient";
import { AppContext } from "../context/RecipesContext";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";
import SkeletonMain from "../ui/SkeletonMain";


const Main = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { 
        fetchGetRecipesByName, 
        searchRecipeByTags, 
        setSearchRecipeByTags, 
        allRecipes, 
        fetchGetRecipesAll, 
        isSearching, 
        fetchGetRecipesByTags, 
        searchTags, 
        setIsSearching,
    } = useContext(AppContext);
    const navigation = useNavigation();

    const getRecipesByName = async (query) => {
        setIsLoading(true);
        await fetchGetRecipesByName(query);
        setIsLoading(false);
        navigation.navigate('SearchRecipe');
    };

    useEffect(() => {
        const fetchRecipes = async () => {
            setIsLoading(true);
            if (searchTags.length === 0) {
                await fetchGetRecipesAll();
                setIsSearching(false);
            } else {
                setSearchRecipeByTags([]);
                await fetchGetRecipesByTags(searchTags);
                setIsSearching(true);
            }
            setIsLoading(false);
        };

        fetchRecipes();
    }, [searchTags]);

    const recipesToShow = isSearching ? searchRecipeByTags : allRecipes;

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content"
                backgroundColor="#6B8A7A"
            />
            <FlatList
                ListHeaderComponent={() => (
                    <View>
                        <AppBar onSearch={getRecipesByName} />
                        <TagsIngredient />
                    </View>
                )}
                data={recipesToShow}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.recipeCard}>
                        <CardRecipes recipes={[item]} />
                    </View>
                )}
                numColumns={2}
                columnWrapperStyle={styles.row}
                ListEmptyComponent={() => (
                    isLoading ? (
                        <SkeletonMain />
                    ) : (
                        <Text style={styles.noResultsText}>No se encontró la receta</Text>
                    )
                )}
                showsVerticalScrollIndicator={false}
            />
           
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 3
    },
    cardsContainer: {
        marginTop: 40,
    },
    recipeCard: {
        flex: 1,
        marginHorizontal: 3,
        marginBottom: 20, 
    },
    loadingText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 18,
        color: '#333',
    },
    noResultsText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 20,
        color: '#333',
    },
    resultSearch: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingVertical: 20
    },
    subContainer: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 5,
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight
    },
    row: {
        justifyContent: 'space-between',
    },
});

export default Main;
