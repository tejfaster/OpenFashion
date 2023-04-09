import React, { useRef, useEffect } from "react"
import { View, Text, FlatList, StyleSheet, Image, Dimensions } from 'react-native'
import { Icons } from "../../../Constant/constant"

const { width,height } = Dimensions.get('screen')

const Data = [
    { id: 1, image: Icons.banner_1 },
    { id: 2, image: Icons.cardigan },
    { id: 3, image: Icons.cashmere_blend },
    { id: 4, image: Icons.silver_cardigan },
]

export default Carousel = (props) => {
    const currentRef = useRef()
    return (
        <View style={styles.conatiner}>
            <FlatList
                data={Data}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) => {
                    return (<View>
                        <Image source={item.image} style={styles.image} />
                    </View>)
                }}
            />
            <Dot data={Data} />
        </View>
    )
}

const Dot = (props) => {
    return (
        <View style={styles.dotContainer}>
            {props.data.map(item => <View style={[styles.dots]} key={item.id} />)}
        </View>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        alignItems: "center"
    },
    image: {
        width: width * 0.95,
        height: height * 0.7
    },
    dotContainer: {
        flexDirection:"row",        
    },
    dots: {
        height: 10,
        width: 10,
        borderWidth: 1,
        borderRadius: 25,
        margin:10,
    },
 
})