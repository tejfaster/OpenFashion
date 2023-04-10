import React, { useRef, useState } from "react"
import { View, ImageBackground, Text, FlatList, StyleSheet,TouchableOpacity, Dimensions } from 'react-native'
import { Icons } from "../../../Constant/images"
import { appfont } from "../../../Constant/fonts"

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
                renderItem={({ item}) => {
                    return (<View>
                        <ImageBackground
                            source={item.image}
                            style={styles.image} >
                            <TouchableOpacity style={styles.explore}>
                                <Text style={styles.collection}>EXPLORE COLLECTION</Text>
                            </TouchableOpacity>
                        </ImageBackground>
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
        height: height * 0.7,
        alignItems: 'center',
        justifyContent: "flex-end",
        paddingBottom:10
    },
    dotContainer: {
        flexDirection: "row",
    },
    dots: {
        height: 6,
        width: 6,
        borderWidth: 1,
        borderRadius: 25,
        margin: 10,        
    },
    explore: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: width * 0.5,
        backgroundColor: "rgba(0,0,0,0.3)",
        borderRadius:50
    },
    collection:{
        color:"white",
        fontFamily:appfont,
        fontSize:14
    }
})