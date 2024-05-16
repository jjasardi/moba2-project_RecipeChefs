import { SafeAreaView, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Details = ({ navigation, route }) => {
    const recipe = route.params.recipe

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Image
                    source={{ uri: recipe.image }}
                    style={styles.image}
                    resizeMode="contain">
                </Image>
                <Text style={styles.label}>{recipe.label}</Text>
                <Text style={styles.heading}>Ingredients:</Text>
                {recipe.ingredients.map(((ingredient, index) => (
                    <Text key={index} style={styles.ingredient}>{ingredient.text}</Text>
                )
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    image: {
        width: '100%',
        height: 300,
        marginBottom: 10,
    },
    label: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    ingredient: {
        fontSize: 16,
        marginBottom: 5,
    },
})

export default Details