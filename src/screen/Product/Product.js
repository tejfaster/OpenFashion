import React, { useState } from 'react'
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import Header from '../../Component/Header'
import Carousel from '../../Component/Carousel'
import { banner, height, width } from '../../Constant/constant'
import { appfont } from '../../Constant/fonts'
import CtsButton from '../../Component/CtsButton'
import { Icons } from '../../Constant/images'
import Footer from '../../Component/Footer'
import NewArrival from '../Home/Component/DashBoard/NewArrival'

export default Product = ({ navigation, route }) => {
    const { data } = route.params
    const [selectColor, setSelectColor] = useState(1)
    const [selectSize, setSelectSize] = useState(1)

    return (
        <View style={styles.container}>
            <Header />
            <ScrollView>
                <Carousel data={data?.image} zoom />
                <View style={styles.subcontainer}>
                    <Text style={styles.title}>{data?.title}</Text>
                    <Text style={[styles.title, { fontSize: 18 }]}>{data?.description}</Text>
                    <Text style={[styles.title, { fontSize: 22, color: "darkorange" }]}>${data?.price}</Text>
                    <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                        {
                            data?.color.length > 0 && <Text style={[styles.title, { fontSize: 18 }]}>Color:</Text>
                        }
                        {
                            data?.color.map(item => {
                                return (
                                    <View key={item.id} style={[styles.colorView, { borderColor: selectColor === item.id ? "black" : "white" }]}>
                                        <CtsButton onPress={() => setSelectColor(item.id)} style={[styles.color, { backgroundColor: item.item }]} />
                                    </View>
                                )
                            })
                        }
                        {
                            data?.size.length > 0 && <Text style={[styles.title, { fontSize: 18, marginLeft: 10 }]}>Size: </Text>
                        }
                        {
                            data?.size.map(item => {
                                return (
                                    <CtsButton key={item.id} onPress={() => setSelectSize(item.id)} txt={item.item} Txtstyle={[styles.sizetxt, { color: selectSize === item.id ? "white" : "black" }]} style={[styles.size, { backgroundColor: selectSize === item.id ? "black" : "white" }]} />
                                )
                            })
                        }
                    </View>
                </View>
                <View style={styles.AddToBasket}>
                    <CtsButton
                        src={Icons.white_Plus}
                        txt={"ADD TO BASKET"}
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                        Imgstyle={styles.plusimg}
                        Txtstyle={styles.a2btxt}
                    />
                    <CtsButton
                        src={Icons.white_heart}
                        Imgstyle={styles.heartimg}
                    />
                </View>
                <View style={[styles.subcontainer, { marginTop: 10 }]}>
                    <Text style={[styles.title, { fontSize: 22 }]}>MATERIALS</Text>
                    <Text style={[styles.title, { fontSize: 20, marginVertical: 10 }]}>{data?.material}</Text>
                    <Text style={[styles.title, { fontSize: 22, marginTop: 15 }]}>CARE</Text>
                    <Text style={[styles.title, { fontSize: 20, marginVertical: 10 }]}>{data?.material}</Text>
                    {
                        data?.careitem.map(item => {
                            return (
                                <CtsButton
                                    style={styles.careitem}
                                    src={item.image}
                                    txt={item.title}
                                    Imgstyle={styles.careimg}
                                    Txtstyle={styles.caretxt}
                                />
                            )
                        })
                    }
                </View>
                <NewArrival  
                    title="YOU MAY ALSO LIKE"
                />
                <Footer />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    subcontainer: {
        margin: 10,
        marginTop: 20
    },
    title: {
        fontFamily: appfont,
        fontSize: 30,
        color: "black",
        marginVertical: 2,
    },
    colorView: {
        height: 30,
        width: 30,
        marginHorizontal: 5,
        borderRadius: 50,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    color: {
        height: 22,
        width: 22,
        borderRadius: 50,
    },
    size: {
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        marginHorizontal: 5,
        borderRadius: 50
    },
    sizetxt: {
        fontFamily: appfont,
        fontSize: 15,
    },
    AddToBasket: {
        width: width,
        height: height * 0.1,
        backgroundColor: "black",
        marginVertical: 10,
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    plusimg: {
        height: 30,
        width: 30,
        resizeMode: 'contain'
    },
    a2btxt: {
        fontFamily: appfont,
        color: "white",
        fontSize: 20,
        marginLeft: 10
    },
    heartimg: {
        height: 30,
        width: 30,
        resizeMode: 'contain'
    },
    careitem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 4
    },
    careimg: {
        height: 30,
        width: 30,
        resizeMode: 'contain',
        marginRight: 10
    },
    caretxt: {
        fontSize: 18
    }
})