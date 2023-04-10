import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import CtsButton from './CtsButton'
import { Icons } from "../Constant/images"

export default Header = () => {
    return (
        <View style={styles.container}>
            <CtsButton img={Icons.menu} Imgstyle={styles.menu} />
            <View style={styles.logoContainer}>
                <CtsButton disabled img={Icons.logo} Imgstyle={styles.logo} />
            </View>
            <View style={styles.subcontainer}>
                <CtsButton img={Icons.search} Imgstyle={styles.menu} />
                <CtsButton img={Icons.shopping_Bag} Imgstyle={styles.menu} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 10
    },
    menu: {
        height: 30,
        width: 30
    },
    logoContainer: {
        marginLeft:10,
        width: "74%",
        alignItems: 'center'
    },
    logo: {
        height: 37,
        width: 110
    },
    subcontainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    }
})