import React,{useEffect,useState} from 'react'
import {Text,Button,SafeAreaView,Image,ActivityIndicator} from 'react-native'
const Sobre = ({route}) => {
        const [data,setData]= useState([])
        useEffect(() => {
            getData()
            
            
        }, [])
       async function getData (){
            const response = await fetch(`https://api.github.com/users/${route.params?.nome}`)
            const result = await response.json()
            setData(result)
            console.log(data.login)
           
        }


        console.log(data.avatar_url)
    

    return (
        <SafeAreaView style={{flex:1,alignItems:'center',
        justifyContent:'center'}}>
            <Image style={{
                width:120,
                height:120,
                borderRadius:60,
                marginBottom:20,
                borderWidth:5,
                borderColor:'white'

            }}         source={{
                uri: `${data.avatar_url} `
              }}
       >
                </Image>
            <Text style={{fontSize:20}}>Nome do Usuário:</Text>
            <Text style={{fontSize:20}}>{ }</Text>
            <Text style={{fontSize:20}}>{  data.login== undefined ? "Usuário não encontrado" : data.login}</Text>
            <Text style={{fontSize:20}}>Número do Usuário:</Text>
            <Text>{data.id == undefined? "Usuário não encontrado":data.id}</Text>
        </SafeAreaView>
    )
            }

export default Sobre
