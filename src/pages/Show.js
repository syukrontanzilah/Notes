import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BlogContext } from '../context/BlogContext';

const Show = ({route}) => {
    const {id} = route.params;
    const {state, dispatch} = useContext(BlogContext)
    const BlogPost = state.find((post)=>{
        return post.id === id    
    })
    return (
        <View
        style={styles.page}>
            <Text style={{
                fontSize:20, fontWeight:'bold',
                marginBottom:10,
                paddingBottom:5,
                borderBottomWidth:1,
                borderBottomColor:'lightgray'

            }}>{BlogPost.title}</Text>
            <Text style={{fontSize:18, }}>{BlogPost.content}</Text>

        </View>
    )
}

export default Show

const styles = StyleSheet.create({
    page:{
        marginHorizontal:10,
        marginVertical:10,
        borderRadius:5,
        borderWidth:1, 
        borderColor:'lightgray', 
        padding:10

    }
})
