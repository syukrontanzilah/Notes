import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const index = () => {
    return (
        <View style={styles.page}>
            <Text>Create page</Text>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor:'wheat'
    }
})
