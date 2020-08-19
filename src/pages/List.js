import React, { useContext } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { BlogContext } from '../context/BlogContext'

const List = ({ navigation }) => {
    const { state, dispatch } = useContext(BlogContext)
    return (
        <View style={styles.page}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom:20, marginTop:10 }}>
                <Ionicons name="add" size={30} color="green" onPress={() => dispatch({type:"ADD"})} />
             
                <Ionicons name="create" size={30} color="green"
                    onPress={() => navigation.navigate("Tulis")}
                />
            </View>

            <FlatList
                data={state}
                keyExtractor={post => post.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                        onPress={()=> navigation.navigate("Show", {id:item.id})}
                        >
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginHorizontal: 20,
                                marginBottom: 10,
                                backgroundColor: 'lightgray',
                                padding: 10,
                                elevation: 4
                            }}>
                                <Text style={{ fontSize: 22 }}>{item.title}</Text>
                                <Ionicons name="trash" size={30} color="salmon" onPress={() => dispatch({type:"REMOVE", payload:item.id})} />
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />

        </View>
    )
}

export default List

const styles = StyleSheet.create({
    page: {
        flex: 1
    }
})
