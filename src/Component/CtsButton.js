import React from 'react'
import {Text, TouchableOpacity, Image } from 'react-native'

export default CtsButton = (props) => {
    return (
        <TouchableOpacity  disabled={props.disabled && true} style={props.style}>
        {
            props.img && <Image resizeMode="contain" style={props.Imgstyle} source={props.img} />
        }
        {
            props.txt && <Text style={props.Txtstyle}>{props.txt}</Text>
        }    
        </TouchableOpacity>
    )
}