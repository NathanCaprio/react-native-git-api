import styled from 'styled-components/native'

export const Title = styled.Text`
color: ${props=>props.theme.color};
font-size:28px

`
export const Container = styled.View`
flex:1;
justify-content: center;
align-items: center;
background-color: ${props=>props.theme.bg}


`