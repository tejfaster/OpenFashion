import React from 'react'
import { View, Text, TouchableOpacity, FlatList, ImageBackground, StyleSheet, ScrollView } from 'react-native'
import Header from '../../Component/Header'
import Carousel from './Component/Carousel'
import NewArrival from './Component/NewArrival'
import Brand from './Component/Brand'

export default DashBoard = () => {

    return (
        <View>
            <View style={styles.header}>
                <Header />
            </View>
            <ScrollView style={styles.subcontainer} showsVerticalScrollIndicator={false}>
                <Carousel />
                <NewArrival />
                <Brand />
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