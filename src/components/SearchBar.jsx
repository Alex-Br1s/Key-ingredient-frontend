import React, {useState} from "react";
import { View, TextInput, StyleSheet, TouchableOpacity, Alert, Keyboard  } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; 
import Toast from "react-native-toast-message";


const SearchBar = ({onSearch}) => {
    const [searchRecipe, setSearchRecipe] = useState('')


    const handleSearchInputChange = (text) => {
        setSearchRecipe(text);
    }
    const handleSearchSubmit = () => {
        if(searchRecipe.length == 0){
            return Toast.show({
                type: 'error',
                text1: 'Inválido',
                text2: 'Escriba una receta o ingrediente',
                position: 'bottom',
                visibilityTime: 3000,
                autoHide: true,
                topOffset: 30,
                bottomOffset: 40,
                text1Style:{
                    fontSize: 16
                },
                text2Style:{
                    fontSize: 16
                },
            })
        }
        onSearch(searchRecipe)
        setSearchRecipe('')
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputWrapper}>
                <TouchableOpacity style={styles.iconContainer} onPress={handleSearchSubmit} >
                    <Icon name="search" style={styles.icon} />
                </TouchableOpacity>
                <TextInput 
                    style={styles.inputSearch} 
                    placeholder="Buscar receta o ingrediente" 
                    placeholderTextColor="gray" 
                    value={searchRecipe}
                    onChangeText={handleSearchInputChange}
                    onSubmitEditing={handleSearchSubmit}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        width: '75%',
        height: 40,
    },
    iconContainer: {
        paddingHorizontal: 10,
    },
    icon: {
        fontSize: 23,
        color: 'gray',
    },
    inputSearch: {
        flex: 1,
        height: '100%',

    },
});

export default SearchBar;
