import React, { useState } from 'react'
import { Button, Keyboard, StyleSheet, TextInput, View, SafeAreaView } from 'react-native'

const Search = () => {
    const [searchText, setSearchText] = useState('')
    const handleSearch = (searchText: string) => {
        console.log(searchText)
        Keyboard.dismiss()
    }

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                style={styles.input}
                enterKeyHint='search'
                placeholder='Enter recipe to search'
                onChangeText={text => setSearchText(text)}
                onSubmitEditing={() => handleSearch(searchText)} >
            </TextInput>
            <Button
                title={'Search'}
                onPress={() => {
                    handleSearch(searchText)

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