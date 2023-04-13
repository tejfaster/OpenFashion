import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import { appfont } from "../../../../Constant/fonts";
import { Icons } from "../../../../Constant/images";
import { height, justForYou, width } from "../../../../Constant/constant";
import CtsButton from "../../../../Component/CtsButton";

export default JustForYou = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    return (
        <View style={styles.container}>
            <Text style={styles.jtfytxt}>JUST FOR YOU</Text>
            <Image source={Icons.diamond_line} style={styles.diamond} />
            <FlatList
                data={justForYou}
                horizontal
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={ev => setActiveIndex(Math.floor(Math.floor(ev.nativeEvent.contentOffset.x) / Math.floor(width * 0.7)))}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.jtfycontainer}>
                            <CtsButton src={item.image} Imgstyle={styles.jtfyimage} />
                            <Text style={styles.jtfytxts}>{item.description}</Text>
                            <Text style={styles.jtfyprice}>${item.price}</Text>
                        </View>
                    )
                }}
            />
            {
                <View style={styles.dotContainer}>
                    {justForYou.map((item, index) => { return (<View style={[styles.dots, { backgroundColor: activeIndex === index ? "black" : "white" }]} key={item.id} />) })}
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: 65
    },
    jtfytxt: {
        fontFamily: appfont,
        color: 'black',
        fontSize: 25
    },
    diamond: {
        width: 150,
        height: 15,
        marginVertical: 10
    },
    jtfycontainer: {
        alignItems: 'center',
    },
    jtfyimage: {
        height: height * 0.45,
        width: width * 0.8,
        marginHorizontal: 10,
        resizeMode: 'contain'
    },
    jtfytxts: {
        fontFamily: appfont,
        fontSize: 15
    },
    jtfyprice: {
        fontFamily: appfont,
        fontSize: 15,
        color: 'gold'
    },
    dotContainer: {
        flexDirection: "row",
    },
    dots: {
        height: 6,
        width: 6,
        borderWidth: 1,
        borderRadius: 25,
        margin: 5,
    },
})

