import React from 'react'
import { View, Text, TouchableOpacity,FlatList, ImageBackground, StyleSheet, ScrollView } from 'react-native'
import Header from '../../Component/Header'

export default DashBoard = () => {
    return (
        <View>
            <View style={styles.header}>
                <Header />
            </View>
            <ScrollView>
                <ImageBackground ></ImageBackground>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        position: "absolute",
    }

})