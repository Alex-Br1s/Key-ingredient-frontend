import { Text, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
    text: {
        color: theme.colors.primary,
        fontSize: theme.fontSizes.body,
        fontWeight: theme.fontWeight.normal,
        padding: 5
    },
    bgColor: {
       backgroundColor: theme.backgroundColor.bgPrimary,
       backgroundColor: theme.backgroundColor.bgSecondary
    },
    colorSecondary: {
        color: theme.colors.textSecondary
    },
    fontWeight: {
        fontWeight: theme.fontWeight.bold
    },
    subHeading: {
        fontSize: theme.fontSizes.subHeading
    }
})

export default function TagsTextStyles ({children, color, fontSize, fontWeight, backgroundColor, style, ...restOfProps}) {
    
    const TagsTextStyles = [
        styles.text,
        color === 'secondary' && styles.colorSecondary,
        fontSize === 'subHeading' && styles.subHeading,
        fontWeight === 'bold' && styles.fontWeight,
        backgroundColor === 'bgPrimary' && styles.bgColor,
        backgroundColor === 'bgSecondary' && styles.bgColor,
        style
    ]
    return (
        <Text style={TagsTextStyles} {...restOfProps}>
            {children}
        </Text>
    )
}