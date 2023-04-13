import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native'
import CtsButton from "./CtsButton";
import { Icons } from "../Constant/images";
import { Bodoni_Italic, appfont } from "../Constant/fonts";

export default Footer = () => {
    return (
        <View style={styles.container}>
            <View style={styles.socialmedia}>
                <CtsButton src={Icons.twitter} Imgstyle={styles.socialImage} />
                <CtsButton src={Icons.instagram_logo} Imgstyle={styles.socialImage} />
                <CtsButton src={Icons.youtube} Imgstyle={styles.socialImage} />
            </View>
            <Image source={Icons.diamond_line} style={styles.diamond} />
            <Text style={styles.supporttxt}>@Support</Text>
            <Text style={styles.supporttxt}>OpenFashion@gmail.com</Text>
            <Text style={styles.supporttxt}>+91 8459 5461 58</Text>
            <Image source={Icons.diamond_line} style={styles.diamond} />
            <View style={styles.footer}>
                <CtsButton txt="About" Txtstyle={styles.supporttxt1} />
                <CtsButton txt="Contact" Txtstyle={styles.supporttxt1} />
                <CtsButton txt="Blog" Txtstyle={styles.supporttxt1} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    socialmedia: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    socialImage: {
        height: 35,
        width: 30,
        resizeMode: 'contain',
        marginHorizontal: 30
    },
    diamond: {
        width: 150,
        height: 15,
        marginVertical: 20
    },
    supporttxt: {
        fontFamily: appfont,
        marginVertical: 10,
        color: 'black',
        fontSize: 25
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    supporttxt1: {
        fontFamily: appfont,
        marginVertical: 10,
        color: 'black',
        fontSize: 20,
        marginHorizontal: 15
    },
})