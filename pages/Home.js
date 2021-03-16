import React, {useState} from 'react'
import {Text,SafeAreaView,Button,TextInput,StyleSheet,TouchableOpacity} from 'react-native'


const Home = ({ navigation }) => {
    const [user,setUser] = useState('')
    console.log(user)
  
    
    
   
    return (
        <SafeAreaView style={{justifyContent:'center',
        alignItems:'center',flex:1}}>
            <Text>Buscar Usuário:</Text>
            <TextInput
            style={styles.input}
            onChangeText={text=>(setUser(text))}
            value={user}
            
            
            />
            
            <TouchableOpacity
            style={styles.button}
            onPress={()=>navigation.navigate('Sobre',
            {nome:`${user}`})}
            >
            
            
            

        <Text style={{color:'white'}}>Buscar</Text>


</TouchableOpacity>

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    title:{
        fontSize:20
    },
    input:{
   
        width:200,
        height:40,
        backgroundColor:'#DDDDDD',
        marginVertical:10,
        borderRadius:4,
        textAlign:'center'

    },
    button:{
        width:200,
        height:40,
        backgroundColor:'#DDDDDD',
        marginVertical:10,
        borderRadius:4,
        textAlign:'center',
        justifyContent:'center',
        backgroundColor:'red',
        alignItems:'center',

    }
})

export default Home
