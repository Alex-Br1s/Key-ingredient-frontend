import React, {useContext} from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { AppContext } from '../context/RecipesContext';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const CardRecipes = ({recipes}) => {
    const navigation = useNavigation()
    const {selectedTags} = useContext(AppContext)
   
    const getCaloriesInfo = (informacion) => {
        const caloriasInfo = informacion.find(info => info.includes("Calorías"));
        return caloriasInfo ? caloriasInfo : 'N/A'; 
    };
    
    return (
        <View style={styles.cardContainer}>
            {selectedTags && recipes.map((recipe, index) => (
            <TouchableOpacity 
            key={index}
            onPress={() => navigation.navigate('RecipeDetails', { recipeId: recipe.id.toString() })}
            >
                <View key={index} style={styles.container}>
                    <Image
                        style={styles.image}
                        source={{ uri: recipe.imagenes[0] || 'https://via.placeholder.com/150' }}
                        resizeMode="cover"
                        />
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{recipe.nombre}</Text>
                        <Text style={styles.subtitle}>{getCaloriesInfo(recipe.informacion)}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    container: {
        backgroundColor: 'white',
        borderRadius: 8,
        overflow: 'hidden',
        width: '100%',
        height: 300,
        elevation: 3,
        marginBottom: 10, 
        
    },
    image: {
        width: '100%',
        height: 160,
    },
    textContainer: {
        padding: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 16,
        color: 'gray',
        marginBottom: 4,
    },
});

export default CardRecipes;
