import React, { useState } from "react";
import { View, Text, FlatList, ScrollView, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native'
import Header from "../../Component/Header";
import { appfont } from "../../Constant/fonts";
import DropDown from "../../Component/DropDown";
import { CollectionType, ViewType, collection, height, pagination, width } from "../../Constant/constant";
import { useSelector } from "react-redux";
import CtsButton from "../../Component/CtsButton";
import { Icons } from "../../Constant/images";
import Footer from "../../Component/Footer";

export default Category = () => {
    const [active, setActive] = useState(1)
    const [activePage, setActivepage] = useState(1)

    console.log(activePage)

    return (
        <View style={{ flex: 1 }}>
            <Header />
            <ScrollView
                style={styles.container}>

                <View style={styles.contcent}>
                    <Text style={styles.toitemtxt}>4500 APPAREL</Text>
                    <View style={styles.filcent}>
                        {
                            ViewType.map(item => {
                                return (
                                    <CtsButton
                                        style={[styles.viewTypeContainer, { backgroundColor: active === item.id ? "white" : "#F1F1F1", borderWidth: active === item.id ? 1 : 0, borderColor: "grey" }]}
                                        src={item.image}
                                        key={item.id}
                                        Imgstyle={styles.viewType}
                                        onPress={() => setActive(item.id)}

                                    />
                                )
                            })
                        }
                    </View>
                </View>
                <FlatList
                    data={collection}
                    key={(active === 2 ? 2 : 1)}
                    numColumns={(active === 2 ? 2 : 1)}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.cardContainer}>
                                <TouchableOpacity
                                    style={{ flexDirection: active === 1 ? "row" : "column" }}>
                                    <ImageBackground
                                        resizeMode="contain"
                                        source={item.image}
                                        style={[styles.cardImage, {
                                            height: active === 1 ? height * 0.225 : active === 2 ? height * 0.3 : height * 0.6,
                                            width: active === 3 ? width * 0.95 : width * 0.45
                                        }]}>
                                        {
                                            active !== 1 && <CtsButton src={Icons.heart} Imgstyle={styles.heart} />
                                        }
                                    </ImageBackground>
                                    <View style={{ margin: active !== 2 && active !== 3 ? 15 : 0, width: active === 1 ? width * 0.45 : active === 2 ? width * 0.5 : width * 0.9 }}>
                                        <Text style={[styles.title, { fontSize: active === 1 ? 22 : active === 2 ? 15 : 28, marginVertical: active === 1 ? 3 : 2.5 }]}>{item.title}</Text>
                                        <View style={{ flexDirection: active === 3 ? 'row' : "column", justifyContent: 'space-between' }}>
                                            <Text style={[styles.title, { fontSize: active === 1 ? 17.5 : active === 2 ? 15 : 18, marginVertical: active === 1 ? 3 : 2.5 }]}>{item.description}</Text>
                                            <Text style={[styles.title, { fontSize: active === 1 ? 21 : active === 2 ? 16 : 20, color: "darkorange" }]}>${item.price}</Text>
                                        </View>
                                        {
                                            active === 1 &&
                                            <>
                                                <View style={{ flexDirection: 'row', marginVertical: 10, alignItems: 'center' }}>
                                                    <Image source={Icons.star} style={styles.star} />
                                                    <Text style={styles.startxt}>{item.rating} Rating</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <Text style={[styles.title, { fontSize: 18 }]}>Size</Text>
                                                        {
                                                            item?.size.map(item => {
                                                                return (
                                                                    <CtsButton key={item.id} txt={item.item} Txtstyle={{ fontFamily: appfont, fontSize: 15 }} style={styles.sizecontainer} />
                                                                )
                                                            })
                                                        }
                                                    </View>
                                                    <CtsButton
                                                        src={Icons.heart}
                                                        // Imgstyle={{ height: 26, width: 26 }} 
                                                        Imgstyle={styles.heart}
                                                    />
                                                </View>
                                            </>
                                        }
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                />
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 20 }}>
                    {
                        activePage !== 1 &&
                        <CtsButton src={Icons.backward} Imgstyle={styles.forward} onPress={() => setActivepage(activePage - 1)} />
                    }
                    {
                        pagination.map(item => {
                            return (
                                <CtsButton
                                    key={item.id}
                                    txt={item.id}
                                    style={[styles.paginationcard, { backgroundColor: activePage === item.id ? "black" : "#F1F1F1" }]}
                                    Txtstyle={[styles.paginationtxt, { color: activePage === item.id ? "white" : "black" }]}
                                    onPress={() => setActivepage(item.id)}
                                />
                            )
                        })
                    }
                    <CtsButton src={Icons.forward} Imgstyle={styles.forward} onPress={() => setActivepage(activePage + 1)} />
                </View>
                <Footer />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    contcent: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    toitemtxt: {
        fontFamily: appfont,
        fontSize: 18,
        color: "black"
    },
    filcent: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    cardContainer: {
        margin: 10,
        width: width * 0.45,
    },
    cardImage: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        resizeMode: 'contain',
    },
    heart: {
        height: 28,
        width: 28,
        resizeMode: 'contain',
        marginBottom: 10,
        marginRight: 5
    },
    title: {
        fontFamily: appfont,
    },
    viewTypeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        borderRadius: 25,
        marginHorizontal: 5
    },
    viewType: {
        height: 25,
        width: 25
    },
    star: {
        height: 20,
        width: 20,
    },
    startxt: {
        fontFamily: appfont,
        fontSize: 20,
        marginLeft: 10,
        top: 2
    },
    sizecontainer: {
        height: 25,
        width: 25,
        borderWidth: 1,
        borderColor: "darkgrey",
        borderRadius: 50,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    paginationcard: {
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    paginationtxt: {
        fontFamily: appfont,
        fontSize: 20,
    },
    forward: {
        height: 30,
        width: 30
    }
})