import React from 'react'
import { View, Text, TouchableOpacity, FlatList, ImageBackground, StyleSheet, ScrollView } from 'react-native'
import Header from '../../Component/Header'
import Carousel from './Component/DashBoard/Carousel'
import NewArrival from './Component/DashBoard/NewArrival'
import Brand from './Component/DashBoard/Brand'
import Collection from './Component/DashBoard/Collection'
import JustForYou from './Component/DashBoard/JustForYou'

export default DashBoard = () => {

    return (
        <View>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.subcontainer} >
                    <Carousel />
                    <NewArrival />
                    <Brand />
                </View>
                <Collection />
                <JustForYou />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        // position: "absolute",
    },
    subcontainer: {
        marginTop: 5,
        // marginHorizontal: 10
    }
})