import React, { useContext, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { BlogContext } from '../context/BlogContext';


const Tulis = ({route, navigation}) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const {state, dispatch} = useContext(BlogContext)
    return (
        <View style={styles.page}>
            <Text style={{fontSize:20}}>Tulis Judul</Text>
            <TextInput style={styles.input}
            value={title}
            onChangeText={(text)=> setTitle(text)}
            />

            <Text style={{fontSize:20}}>Tulis Catatan</Text>
            <TextInput
            value={content}
            onChangeText={(text)=> setContent(text)}
            style={styles.input}
            // underlineColorAndroid="gray"
            multiline={true}
            numberOfLines={4}/>

            <TouchableOpacity
            onPress={()=>{
                dispatch({type:"ADD_POST", payload:{title, content}})
                navigation.goBack()
            }}
            style={styles.button}>
              <Text style={{fontSize:18, color:'white'}}>Post</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Tulis

const styles = StyleSheet.create({
    page:{
        flex:1,
        margin:20
    },
    input:{
        fontSize:20,
        borderWidth:1,
        borderColor:'lightgray', 
        marginVertical:8,
        borderRadius:5,
        paddingHorizontal:10,
        // justifyContent: "flex-start"
    },
    button:{
        height:50, 
        backgroundColor:'green',
        width:100,
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:10,

    }
})
