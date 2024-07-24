
import React, {useContext} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Constants from 'expo-constants'
import { AppContext } from '../context/RecipesContext';
import CardRecipes from '../components/CardRecipes';

const SearchRecipeScreen = () => {
  const {searchRecipeByName} = useContext(AppContext)

  return (
    <View style={styles.container}>
     
      {searchRecipeByName && searchRecipeByName.length > 0 ? (
        <FlatList
          data={searchRecipeByName}
          keyExtractor={(item) => item.id.toString()} 
          renderItem={({ item }) => (
            <View style={styles.recipeCard}>
              <CardRecipes recipes={[item]} />
            </View>
          )}
          numColumns={2} 
          columnWrapperStyle={styles.row} 
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Text style={styles.noResultsText}>No se encontraron recetas</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 5,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight
  },
  row: {
    justifyContent: 'space-between', 
  },
  recipeCard: {
    flex: 1,
    marginHorizontal: 3, 
    marginBottom: 20, 
  },
  noResultsText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    color: '#333',
  },
  resultSearch: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingVertical: 20
  }
});

export default SearchRecipeScreen;
