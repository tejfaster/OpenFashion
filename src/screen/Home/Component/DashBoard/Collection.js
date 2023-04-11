import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { Icons } from "../../../../Constant/images";
import { height, width } from "../../../../Constant/constant";
import { Bodoni_Italic, appfont } from "../../../../Constant/fonts";

export default Collection = (props) => {
    return (
        <View>
            <Text style={styles.header}>COLLECTIONS</Text>
            <ImageBackground source={Icons.collection} style={styles.colimage1}>
                <View style={styles.colconatiner} >
                    <Text style={styles.season}>Season</Text>
                    <Text style={styles.coltxt}>COLLECTION</Text>
                </View>
            </ImageBackground>
            <ImageBackground source={Icons.collection_part} style={styles.colimage2}>
                <View style={styles.colconatiner2} >
                    <Text style={styles.season2}>Summer</Text>
                    <Text style={styles.coltxt2}>COLLECTION</Text>
                </View>
            </ImageBackground>
            <TouchableOpacity onPress={props.onPress}>
                <Image source={Icons.video} style={styles.video} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    conatiner: {},
    header: {
        fontFamily: appfont,
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 25,
        color: 'black'
    },
    colimage1: {
        width: width,
        height: height * 0.3,
        resizeMode: 'contain',
        justifyContent: 'center'
    },
    colconatiner: {
        alignSelf: 'flex-end',
        marginBottom:height * 0.04
    },
    season: {
        fontFamily: Bodoni_Italic,
        color: "white",
        fontSize: 60,
        marginTop: 20
    },
    coltxt: {
        fontFamily: appfont,
        color: 'white',
        fontSize: 18,
        marginTop: -10,
        textAlign: 'center'
    },
    colconatiner2: {
        alignSelf: 'flex-end',
        marginTop: height * 0.08,
        marginRight: width * 0.01,

    },
    colimage2: {
        margin: 30,
        width: width * 0.85,
        height: height * 0.5,
        resizeMode: 'contain',
    },
    season2: {
        fontFamily: Bodoni_Italic,
        color: "grey",
        fontSize: 50,
    },
    coltxt2: {
        fontFamily: appfont,
        color: 'grey',
        fontSize: 18,
        marginTop: -10,
        textAlign: 'center'
    },
    video: {
        height: height * 0.218,
        width: width,
        resizeMode: 'contain'
    },
    
}) 