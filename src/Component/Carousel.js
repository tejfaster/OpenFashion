import React, { useRef, useState } from "react"
import { View, ImageBackground, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { appfont } from "../Constant/fonts"
import { height, width } from "../Constant/constant"
import CtsButton from "./CtsButton"
import { Icons } from "../Constant/images"

export default Carousel = (props) => {
    const currentRef = useRef()
    const [activeIndex, setActiveIndex] = useState(0)
    return (
        <View style={styles.conatiner}>
            {
                props.data?.length > 1 ?
                    <>
                        <FlatList
                            ref={currentRef}
                            data={props.data}
                            horizontal
                            pagingEnabled
                            showsHorizontalScrollIndicator={false}
                            onMomentumScrollEnd={ev => setActiveIndex(Math.floor(ev.nativeEvent.contentOffset.x / Math.floor(width * 0.949)))}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => {
                                return (<View style={styles.subcontainer}>
                                    <ImageBackground
                                        source={item.image}
                                        style={styles.image} >
                                        {
                                            props.explore && <CtsButton style={[styles.explore, { alignSelf: 'center' }]} txt={"EXPLORE COLLECTION"} Txtstyle={styles.collection} />
                                        }
                                        {
                                            props.zoom && <CtsButton src={Icons.zoom} style={styles.zoomcontainer} Imgstyle={styles.zoom} />
                                        }
                                    </ImageBackground>
                                </View>)
                            }}
                            onEndThreshold={0}
                        />
                        <View style={styles.dotContainer}>
                            {props.data?.map((item, index) => { return (<View style={[styles.dots, { backgroundColor: activeIndex === index ? "black" : "white" }]} key={item.id} />) })}
                        </View>
                    </> : <View style={styles.subcontainer}>
                        <ImageBackground
                            source={props.data}
                            style={styles.image} >
                            {
                                props.explore && <CtsButton style={[styles.explore, { alignSelf: 'center' }]} txt={"EXPLORE COLLECTION"} Txtstyle={styles.collection} />
                            }
                            {
                                props.zoom && <CtsButton src={Icons.zoom} style={styles.zoomcontainer} Imgstyle={styles.zoom} />
                            }
                        </ImageBackground>
                    </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        alignItems: "center"
    },
    subcontainer: {
        width: width,
        height: height * 0.7,
        padding: 10
    },
    image: {
        width: width * 0.95,
        height: height * 0.7,
        // alignItems: 'center',
        justifyContent: "flex-end",
        paddingBottom: 10
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
        borderRadius: 50,
        marginBottom: 10
    },
    collection: {
        color: "white",
        fontFamily: appfont,
        fontSize: 14
    },
    zoomcontainer: {
        alignItems: 'flex-end',
        marginBottom: 10,
        marginRight: 10
    },
    zoom: {
        height: 40,
        width: 40
    }
})