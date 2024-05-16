import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, SafeAreaView, Text, Keyboard } from 'react-native'
import { fetchRecipes } from './fetchData'

const Search = ({ navigation }) => {
    const [searchText, setSearchText] = useState('')
    const [errorMessage, setErrorMessage] = useState('');

    const handleSearch = async () => {
        const fetchedRecipes = await fetchRecipes(searchText);
        if (fetchedRecipes.length === 0) {
            setErrorMessage(`No recipes found for ${searchText}.`);
            setSearchText('')
        } else {
            navigation.navigate('Results', { recipes: fetchedRecipes })
            Keyboard.dismiss()
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                style={styles.input}
                enterKeyHint='search'
                placeholder='Enter recipe to search'
                value={searchText}
                onChangeText={text => setSearchText(text)}
                onSubmitEditing={() => handleSearch()} >
            </TextInput>
            <Button
                title={'Search'}
                onPress={() => {
                    handleSearch()
                }} />
            {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
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
    errorText: {
        color: 'red',
        textAlign: 'center',
        marginTop: 10,
        fontSize: 16,
    },
});

export default Search