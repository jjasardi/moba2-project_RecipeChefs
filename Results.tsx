import { FlatList, SafeAreaView, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Recipe } from './fetchData';

const Results = ({ navigation, route }) => {
    const recipes: [Recipe] = route.params.recipes

    const goToDetails = (selectedRecipe) => {
        navigation.navigate('Details', { recipe: selectedRecipe })
    }

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => goToDetails(item.recipe)}
                style={styles.itemContainer}>
                <Image
                    source={{ uri: item.recipe.images.THUMBNAIL.url }}
                    style={styles.image}>
                </Image>
                <Text style={styles.label}>{item.recipe.label}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={recipes}
                renderItem={renderItem}
                keyExtractor={item => item.recipe.uri}
            >
            </FlatList>
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
        width: 70,
        height: 70,
        borderRadius: 15,
        marginRight: 10,
    },
    label: {
        fontSize: 16,
    },
})

export default Results