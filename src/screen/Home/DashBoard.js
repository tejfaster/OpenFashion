import React from 'react'
import { View, Text, TouchableOpacity, FlatList, ImageBackground, StyleSheet, ScrollView, Image } from 'react-native'
import Header from '../../Component/Header'
import Carousel from '../../Component/Carousel'
import NewArrival from './Component/DashBoard/NewArrival'
import Brand from './Component/DashBoard/Brand'
import Collection from './Component/DashBoard/Collection'
import JustForYou from './Component/DashBoard/JustForYou'
import { Icons } from '../../Constant/images'
import { appfont } from '../../Constant/fonts'
import { banner, height, trending, width } from '../../Constant/constant'
import Footer from '../../Component/Footer'

export default DashBoard = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.subcontainer} >
                    <Carousel data={banner} explore />
                    <NewArrival 
                    dot
                    title="NEW ARRIVAl"
                    exploreButtton={() => navigation.navigate("Category")} />
                    <Brand />
                </View>
                <Collection />
                <JustForYou />
                <View style={styles.trendingcontainer}>
                    <Text style={styles.trendtxt}>@TRENDING</Text>
                    <FlatList
                        data={trending}
                        keyExtractor={item => item.id}
                        numColumns={3}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity style={styles.subtrendcontainer}>
                                    <Text style={styles.trendtitletxt}>{item.title}</Text>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
                <Image source={Icons.openfashion} style={styles.opfsbanner} />
                <Image source={Icons.follow_us} style={styles.opfsbanner1} />
                <Footer />
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
    },
    subcontainer: {
        marginTop: 5,
    },
    trendingcontainer: {
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    trendtxt: {
        fontFamily: appfont,
        fontSize: 20,
        color: 'black',
        marginBottom: 10
    },
    subtrendcontainer: {
        padding: 8,
        // borderWidth: 1,
        marginHorizontal: 20,
        borderRadius: 25,
        marginVertical: 5,
        marginTop: 10,
        backgroundColor: "#F1F1F1"
    },
    trendtitletxt: {
        fontFamily: appfont,
        fontSize: 15,

    },
    opfsbanner: {
        height: height * 0.56,
        width: width,
        resizeMode: 'contain'
    },
    opfsbanner1: {
        height: height * 0.7,
        width: width,
        resizeMode: 'contain'
    },
})