import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View, SafeAreaView } from 'react-native'
import { fetchRecipes } from './fetchData'

const Search = ({navigation}) => {
    const [searchText, setSearchText] = useState('')

    const handleSearch = async () => {
        const fetchedRecipes = await fetchRecipes(searchText);
        navigation.navigate('Results', {recipes: fetchedRecipes})
    }

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                style={styles.input}
                enterKeyHint='search'
                placeholder='Enter recipe to search'
                onChangeText={text => setSearchText(text)}
                onSubmitEditing={() => handleSearch()} >
            </TextInput>
            <Button
                title={'Search'}
                onPress={() => {
                    handleSearch()
                }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
    },
});

export default Search