import { SafeAreaView, Text, Image, StyleSheet } from 'react-native';

const Details = ({ navigation, route }) => {
    const recipe = route.params.recipe

    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={{ uri: recipe.image }}
                style={styles.image}>
            </Image>
            <Text>{recipe.label}</Text>
            {recipe.ingredients.map(((ingredient, index) => (
                <Text key={index}>{ingredient.text}</Text>
            )
            ))}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    image: {
        width: 300,
        height: 300,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10,
    },
})

export default Details