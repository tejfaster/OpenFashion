import React, { useRef, useState } from 'react'
import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import { appfont } from '../../../Constant/fonts'
import { Icons } from '../../../Constant/images'
import { newArrival_Data } from '../../../Constant/constant'

export default NewArrival = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headertxt}>NEW ARRIVAL</Text>
                <Image source={Icons.diamond_line} style={styles.diamond} />
            </View>
            <View style={styles.arrivalcontainer}>
                {
                    newArrival_Data.map((item, index) => {
                        return (
                            <View style={styles.arrivalheader} key={item.id}>
                                <Text style={[styles.arrivalItem, { color: activeIndex === index ? "black" : "grey" }]}>{item.title}</Text>
                                <View style={[styles.arrivaldot, { backgroundColor: activeIndex === index ? "gold" : "white", borderColor: activeIndex === index ? "gold" : "grey" }]} />
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
                renderItem={({ item, index }) => {

                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        alignItems: 'center'
    },
    headertxt: {
        fontFamily: appfont,
        fontSize: 25,
    },
    diamond: {
        width: 150,
        height: 15,
    },
    arrivalcontainer: {
        flexDirection: 'row',
        justifyContent: "space-evenly"
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
    }
})
