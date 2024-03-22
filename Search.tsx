import React, { useState } from 'react'
import { Button, Keyboard, StyleSheet, TextInput, View } from 'react-native'

const Search = () => {
    const [searchText, setSearchText] = useState('')
    const handleSearch = (searchText: string) => {
        console.log(searchText)
        Keyboard.dismiss()
    }

    return (
        <View>
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
        </View>
    )
}

// TODO: KACKE STYLES SCHÖNER MACHEN
const styles = StyleSheet.create({ 
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      borderRadius: 20,
      padding: 10,
    },
  });

export default Search