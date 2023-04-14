import React, { useRef, useState } from 'react'
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { appfont } from '../../../../Constant/fonts'
import { Icons } from '../../../../Constant/images'
import { Apparel, height, newArrival_Data, width } from '../../../../Constant/constant'

export default NewArrival = (props) => {
    const [activeIndex, setActiveIndex] = useState(0)

    const renderItem = () => {
        return (
            <View style={styles.rowFlatlist}>
                <FlatList
                    data={Apparel}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={styles.apparelcontainer} onPress={props.cardButton}>
                                <Image source={item.image} style={styles.apparelimage} />
                                <Text style={styles.appareltxt}>{item.description}</Text>
                                <Text style={styles.apparelprice}>${item.price}</Text>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headertxt}>{props.title}</Text>
                <Image source={Icons.diamond_line} style={styles.diamond} />
            </View>
            <View style={styles.arrivalcontainer}>
                {
                    props.dot && newArrival_Data.map((item, index) => {
                        return (
                            <View style={styles.arrivalheader} key={item.id}>
                                <Text style={[styles.arrivalItem, { color: activeIndex === index ? "black" : "grey" }]}>{item.title}</Text>
                                <View style={[styles.arrivaldot, { backgroundColor: activeIndex === index ? "darkorange" : "white", borderColor: activeIndex === index ? "darkorange" : "grey" }]} />
                            </View>
                        )
                    })
                }
            </View>
            <FlatList
                data={newArrival_Data}
                keyExtractor={item => item.id}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={ev => setActiveIndex(Math.floor(ev.nativeEvent.contentOffset.x / Math.floor(width * 0.949)))}
                renderItem={({ item, index }) => renderItem(item, index)}
            />
            {
                props.exploreButtton && <TouchableOpacity onPress={props.exploreButtton} style={styles.expmrButton}>
                    <Text style={styles.expmrtxt}>Explore More</Text>
                    <Image source={Icons.forward_Arrow} style={styles.expmrarw} />
                </TouchableOpacity>
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        alignItems: 'center',
        marginTop: 40
    },
    headertxt: {
        fontFamily: appfont,
        fontSize: 25,
        color: 'black'
    },
    diamond: {
        width: 150,
        height: 15,
    },
    arrivalcontainer: {
        flexDirection: 'row',
        justifyContent: "space-evenly",
        marginBottom: 10,
    },
    arrivalheader: {
        alignItems: 'center'
    },
    arrivalItem: {
        marginVertical: 10,
        fontFamily: appfont,
    },
    arrivaldot: {
        height: 7,
        width: 7,
        borderRadius: 25,
        borderWidth: 1
    },
    apparelcontainer: {
        width: width * 0.47,
        alignItems: 'center',
        justifyContent: 'center',

    },
    apparelimage: {
        height: height * 0.3,
        width: width * 0.47,
        resizeMode: 'contain'
    },
    rowFlatlist: {
        width: width,
        height: height * 0.74,
        alignItems: 'center',
        padding: 10,
        // borderWidth: 1
    },
    appareltxt: {
        fontFamily: appfont,
        textAlign: 'center',
    },
    apparelprice: {
        fontFamily: appfont,
        color: "darkorange"
    },
    expmrButton: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 25,
        marginBottom: 45
    },
    expmrtxt: {
        fontFamily: appfont,
        fontSize: 20,
        marginHorizontal: 10,
        color: "black"
    },
    expmrarw: {
        height: 20,
        width: 25
    }
})
