import React from 'react'
import { Text, TouchableOpacity, Image } from 'react-native'

export default CtsButton = (props) => {
    return (
        <TouchableOpacity disabled={props.disabled && true} style={props.style} onPress={props.onPress}>
            {
                props.src && <Image style={props.Imgstyle} source={props.src} />
            }
            {
                props.txt && <Text style={props.Txtstyle}>{props.txt}</Text>
            }
        </TouchableOpacity>
    )
}