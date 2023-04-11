import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import { appfont } from "../../../../Constant/fonts";
import { Icons } from "../../../../Constant/images";
import { justForYou } from "../../../../Constant/constant";

export default JustForYou = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    return (
        <View style={styles.container}>
            <Text style={styles.jtfytxt}>JUST FOR YOU</Text>
            <Image source={Icons.diamond_line} style={styles.diamond} />
            <FlatList
                data={justForYou}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={ev => setActiveIndex(Math.floor(ev.nativeEvent.contentOffset.x / Math.floor(width * 0.949)))}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return (
                        <View>
                        {/* <Image

                        /> */}
                        </View>
                    )
                }}
            />
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
})

