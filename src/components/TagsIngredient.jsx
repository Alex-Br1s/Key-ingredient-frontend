import React, {useContext} from 'react'
import { View, StyleSheet, ScrollView, Pressable, Text } from 'react-native'
import TagsTextStyles from './TagsTextStyles'
import { AppContext } from '../context/RecipesContext'

const TagsIngredient = () => {
    const {selectedTags, setSelectedTags, fetchGetRecipesAll, setIsSearching, setSearchTags } = useContext(AppContext)
    
        const handlePress = (ingredient) => {
        setSelectedTags(prevSelected => {
            const updatedTags = prevSelected.includes(ingredient)
                ? prevSelected.filter(tag => tag !== ingredient)
                : [...prevSelected, ingredient];

            
            if (updatedTags.length === 0) {
                setSearchTags([]); 
                setIsSearching(false); 
                fetchGetRecipesAll(); 
            }

            return updatedTags;
        });
    };

    const handleSearchByTags = () => {
        if (selectedTags.length > 0) {
            setSearchTags(selectedTags);
            setIsSearching(true); 
        }
    };

    return (
    <ScrollView horizontal={true} style={styles.scrollHorizontal} showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Pressable onPress={() => handlePress('Recetas de huevos')}>
                    <TagsTextStyles 
                    style={[
                    styles.tagsText,
                    { backgroundColor: selectedTags.includes('Recetas de huevos') ? '#254336' : '#6B8A7A' }]}
                    color='primary' 
                    fontSize='subHeading' 
                    fontWeight='bold'>
                    Huevos
                    </TagsTextStyles>
                </Pressable>

                <Pressable onPress={() => handlePress('Recetas de verduras')}>
                    <TagsTextStyles               
                    style={[
                    styles.tagsText,
                    { backgroundColor: selectedTags.includes('Recetas de verduras') ? '#254336' : '#6B8A7A' }]}
                    color='primary' 
                    fontSize='subHeading' 
                    fontWeight='bold'>
                    Verduras</TagsTextStyles>
                </Pressable>

                <Pressable onPress={() => handlePress('Recetas con pollo')}>
                    <TagsTextStyles 
                    style={[
                    styles.tagsText,
                    { backgroundColor: selectedTags.includes('Recetas con pollo') ? '#254336' : '#6B8A7A' }]}
                    color='primary' 
                    fontSize='subHeading' 
                    fontWeight='bold'
                    >Pollo</TagsTextStyles>
                </Pressable>

                <Pressable onPress={() => handlePress('Recetas con queso')}>
                    <TagsTextStyles
                    style={[
                    styles.tagsText,
                    { backgroundColor: selectedTags.includes('Recetas con queso') ? '#254336' : '#6B8A7A' }]}
                    color='primary' 
                    fontSize='subHeading' 
                    fontWeight='bold'
                    >Queso</TagsTextStyles>
                </Pressable>

                <Pressable onPress={() => handlePress('Recetas de pescado')}>
                 <TagsTextStyles 
                   style={[
                    styles.tagsText,
                    { backgroundColor: selectedTags.includes('Recetas de pescado') ? '#254336' : '#6B8A7A' }]}
                    color='primary' 
                    fontSize='subHeading' 
                    fontWeight='bold'
                    >Pescado</TagsTextStyles>
                </Pressable>
            </View>

            <View style={styles.subContainer}>
                <Pressable onPress={() => handlePress('Recetas con carne picada')}>
                    <TagsTextStyles 
                    style={[
                    styles.tagsText,
                    { backgroundColor: selectedTags.includes('Recetas con carne picada') ? '#254336' : '#6B8A7A' }]}
                    color='primary' 
                    fontSize='subHeading' 
                    fontWeight='bold'
                    >Carne</TagsTextStyles>
                </Pressable>
              
                <Pressable onPress={() => handlePress('Recetas de legumbres')}>
                    <TagsTextStyles 
                    style={[
                    styles.tagsText,
                    { backgroundColor: selectedTags.includes('Recetas de legumbres') ? '#254336' : '#6B8A7A' }]}
                    color='primary' 
                    fontSize='subHeading' 
                    fontWeight='bold'
                    >Legumbres</TagsTextStyles>
                </Pressable>
               
                <Pressable onPress={() => handlePress('Recetas de ensaladas')}>
                    <TagsTextStyles 
                    style={[
                    styles.tagsText,
                    { backgroundColor: selectedTags.includes('Recetas de ensaladas') ? '#254336' : '#6B8A7A' }]}
                    color='primary' 
                    fontSize='subHeading' 
                    fontWeight='bold'
                    >Ensaladas</TagsTextStyles>
                </Pressable>

                <Pressable onPress={() => handlePress('Recetas de pasta')}>
                    <TagsTextStyles 
                    style={[
                    styles.tagsText,
                    { backgroundColor: selectedTags.includes('Recetas de pasta') ? '#254336' : '#6B8A7A' }]}
                    color='primary' 
                    fontSize='subHeading' 
                    fontWeight='bold'>
                    Pasta</TagsTextStyles>
                </Pressable>

                <Pressable onPress={() => handlePress('Recetas de tortilla')}>
                    <TagsTextStyles 
                    style={[
                    styles.tagsText,
                    {backgroundColor: selectedTags.includes('Recetas de tortilla') ? '#254336' : '#6B8A7A' }]}
                    color='primary' 
                    fontSize='subHeading' 
                    fontWeight='bold'>
                    Tortilla</TagsTextStyles>
                </Pressable>
            </View>
                
            {selectedTags.length > 0 && (
                <Pressable onPress={handleSearchByTags} style={styles.button}>
                    <Text style={styles.buttonSend}>
                        Buscar
                    </Text>
                </Pressable>
            )}
        </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollHorizontal: {  
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
    },
    container: {
        display: 'flex',
        paddingBottom: 20
    },
    subContainer: {
        display: 'flex',
        flexDirection: 'row',
        margin: 5,
    },
    tagsText: {
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: 5,
        alignItems: 'center',
        paddingHorizontal: 20
    },
    buttonSend: {
        fontSize: 20,
        fontWeight: 'bold',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 10, 
        paddingHorizontal: 20, 
        margin: 10,
        color: 'white',
        alignSelf: 'flex-start', 
        backgroundColor: '#B7B597'
    },
})

export default TagsIngredient