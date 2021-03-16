import React from 'react'
import {Text,SafeAreaView} from 'react-native'

const Perfil = ({route}) => {
    return(
    <SafeAreaView>
    <Text>Perfil: {route.params?.nome}</Text>
</SafeAreaView>  
    )      
    
}

export default Perfil
