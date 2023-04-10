import React from 'react'
import { View, Text, TouchableOpacity, FlatList, ImageBackground, StyleSheet, ScrollView } from 'react-native'
import Header from '../../Component/Header'
import Carousel from './Component/Carousel'
import NewArrival from './Component/NewArrival'

export default DashBoard = () => {
    return (
        <View>
            <View style={styles.header}>
                <Header />
            </View>
            <ScrollView style={styles.subcontainer}>
                <Carousel />
                <NewArrival />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        position: "absolute",
    },
    subcontainer: {
        marginTop: 40,
        marginHorizontal: 10
    }
})