import { View, StyleSheet } from "react-native";
import Constants from 'expo-constants'
import SearchBar from "./SearchBar";


const AppBar = ({onSearch}) => {
    return (
        <View style={styles.container}>
        <SearchBar onSearch={onSearch}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
    }
})

export default AppBar