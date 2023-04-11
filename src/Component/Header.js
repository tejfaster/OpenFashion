import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { Icons } from "../Constant/images"
import CtsButton from './CtsButton'

export default Header = () => {
    return (
        <View style={styles.container}>
            <CtsButton src={Icons.menus} Imgstyle={styles.menu} />
            <View style={styles.logoContainer}>
                <CtsButton disabled src={Icons.logo} Imgstyle={styles.logo} />
            </View>
            <View style={styles.subcontainer}>
                <CtsButton src={Icons.search} Imgstyle={styles.menu} />
                <CtsButton src={Icons.shopping_Bag} Imgstyle={styles.menu} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 10,
        marginVertical: 5
    },
    menu: {
        height: 30,
        width: 30
    },
    logoContainer: {
        marginLeft: 10,
        width: "74%",
        alignItems: 'center'
    },
    logo: {
        height: 37,
        width: 110,
        resizeMode: 'contain'
    },
    subcontainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: -10
    }
})