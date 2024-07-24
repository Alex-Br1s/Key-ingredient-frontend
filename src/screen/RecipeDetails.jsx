import React, {useEffect, useContext, useState} from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { AppContext } from "../context/RecipesContext";
import SkeletonDetail from "../ui/SkeletonDetail";

const RecipeDetails = ({ route }) => {
    const { recipeId } = route.params;
    const { fetchGetRecipesById, getRecipeById } = useContext(AppContext);
    const [isLoanding, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchRecipe = async () => {
            await fetchGetRecipesById(recipeId.toString());
            setIsLoading(false); 
        };
        fetchRecipe()
    }, [recipeId]);

    return (
        <View style={styles.container}>
            {isLoanding ? (
                <SkeletonDetail />
            ) :(
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.imagen} resizeMode="stretch" source={{uri: getRecipeById.imagenes[0] || 'https://via.placeholder.com/150'}}/>
                    </View>
        
                    <Text style={styles.nombre}>{getRecipeById.nombre}</Text>
                    
                    <Text style={styles.titleDetail}>Información</Text>
                    {getRecipeById.informacion && getRecipeById.informacion.map((info, index) => (
                        <Text key={index} style={styles.listDetail}>{info}</Text>         
                   ))}
                    <Text style={styles.titleDetail}>Ingredientes</Text>
                    {getRecipeById.ingredientes && getRecipeById.ingredientes.map((ingrediente, index) => (
                        <Text key={index} style={styles.listDetail}>• {ingrediente}</Text>  
                    ))}
                    
                    <View style={styles.footer}>

                    <Text style={styles.titleDetail}>Preparación</Text>
                    {getRecipeById.resumeRecipe && getRecipeById.resumeRecipe.map((resumen, index) => (
                        <Text key={index} style={styles.listDetail}>{index + 1}. {resumen}</Text>
                        ))}
                    </View>         
                </ScrollView>       
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 20,
        display: 'flex',
      
    },
    imageContainer: {
        width: 370,
        height: 330,
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 5,
        margin: 'auto'
    },
    imagen: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    nombre: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#6B8A7A',
        margin: 'auto'
    },
    titleDetail: {
        fontSize: 26,
        marginTop: 50,
        paddingBottom: 5,
        fontWeight: "600",
        color: '#6B8A7A'
    },
    listDetail: {
        fontSize: 19,
        paddingBottom: 5,
        fontWeight: "500"
    },
    footer: {
        marginBottom: 100
    }
})

export default RecipeDetails