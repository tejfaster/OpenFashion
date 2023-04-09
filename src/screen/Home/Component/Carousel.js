import React, { useRef, useState } from "react"
import { View, Text, FlatList, StyleSheet, Image, Dimensions } from 'react-native'
import { Icons } from "../../../Constant/constant"

const { width, height } = Dimensions.get('screen')

const Data = [
    { id: 1, image: Icons.banner_1 },
    { id: 2, image: Icons.cardigan },
    { id: 3, image: Icons.cashmere_blend },
    { id: 4, image: Icons.silver_cardigan },
]

export default Carousel = (props) => {
    const currentRef = useRef()
    const [activeIndex, setActiveIndex] = useState(0)
    return (
        <View style={styles.conatiner}>
            <FlatList
                ref={currentRef}
                data={Data}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={ev => setActiveIndex(Math.floor(ev.nativeEvent.contentOffset.x / Math.floor(width * 0.949)))}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) => {
                    return (<View>
                        <Image source={item.image} style={styles.image} />
                    </View>)
                }}
                onEndThreshold={0}
            />
            <View style={styles.dotContainer}>
                {Data.map((item, index) => { return (<View style={[styles.dots, { backgroundColor: activeIndex === index ? "black" : "white" }]} key={item.id} />) })}
            </View>
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
        flexDirection: "row",
    },
    dots: {
        height: 10,
        width: 10,
        borderWidth: 1,
        borderRadius: 25,
        margin: 10,
    },

})