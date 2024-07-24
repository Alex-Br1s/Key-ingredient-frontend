import React, {useState, createContext} from 'react'
import {ENDPOINT_URL} from "@env"
const AppContext = createContext()

const AppProvider = ({children}) => {
    const [searchText, setSearchText] = useState('')
    const [selectedTags, setSelectedTags] = useState([])
    const [searchRecipeByName, setSearchRecipeByName] = useState(null)
    const [searchRecipeByTags, setSearchRecipeByTags] = useState([])
    const [allRecipes, setAllRecipes] = useState([])
    const [isSearching, setIsSearching] = useState(false); 
    const [searchTags, setSearchTags] = useState([]); 
    const [getRecipeById, setGetRecipeById] = useState(null)


    const fetchGetRecipesByName = async (query) => {
        try {
            const response = await fetch(`${ENDPOINT_URL}/recipesName?name=${query}`)
            const data = await response.json()            
            setSearchRecipeByName(data)
        } catch (error) {
            console.log('Error al buscar una receta por nombre: ' + error.message)
        }
    }

    const fetchGetRecipesByTags = async(tags) => {
        const queryParams = tags.map(tag => `tags=${encodeURIComponent(tag)}`).join('&');
        const url = `${ENDPOINT_URL}/recipesTags?${queryParams}`;
        try {
            const response = await fetch(url)
            const data = await response.json()
            setSearchRecipeByTags(data)
        } catch (error) {
            console.log('Error al buscar recetas por ingredientes: ' + error.message);
        }
    }
    
    const fetchGetRecipesAll = async () => {
        try {
            const response = await fetch(`${ENDPOINT_URL}/recipes`)
            const data = await response.json();
            setAllRecipes(data)
        } catch (error) {
            console.log('Error al obtener todas las recetas de la base de datos: ' + error.message)
        }
    }

    const fetchGetRecipesById = async(id) => {
        try {
            const response = await fetch(`${ENDPOINT_URL}/recipes/${id}`)
            const data = await response.json()
            setGetRecipeById(data)
        } catch (error) {
            console.log('Error al obtener una receta por su id: ' + error.message)
        }
    }

    return (
       <AppContext.Provider value={
        {
            searchText,
            setSearchText,
            selectedTags,
            setSelectedTags,
            searchRecipeByName,
            fetchGetRecipesByName,
            searchRecipeByTags,
            fetchGetRecipesByTags,
            allRecipes,
            fetchGetRecipesAll,
            setSearchRecipeByTags,
            isSearching,
            setIsSearching,
            searchTags, 
            setSearchTags,
            fetchGetRecipesById,
            getRecipeById,
        }
       }>
       {children}
       </AppContext.Provider>
    )
}

export {AppProvider, AppContext}