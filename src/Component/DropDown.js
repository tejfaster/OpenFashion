import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native'
import { appfont } from "../Constant/fonts";
import { height } from "../Constant/constant";
import CtsButton from "./CtsButton";
import { Icons } from "../Constant/images";
import { useSelector, useDispatch } from "react-redux";
import { ViewTypes, CollType } from "../store/action/filter";

export default DropDown = (props) => {
    const [select, setSelect] = useState(1)
    const [active, setActive] = useState(false)
    const dispatch = useDispatch()


    let result = props.data?.filter(item => item?.id === select)

    return (
        <View >
            <View style={styles.dropdown}>
                {
                    props.txt && <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.ddtxt}>{result[0]?.title}</Text>
                        <CtsButton src={Icons.dropdown} Imgstyle={styles.ddimage} onPress={() => setActive(!active)} />
                    </View>
                }
                {
                    props.img && <CtsButton src={result[0]?.image} Imgstyle={styles.viewType} onPress={() => setActive(!active)} />
                }
            </View>
            <View >
                {
                    active === true &&
                    <View style={[styles.ddview, { left: props.img ? 5 : 20 }]}>
                        {
                            props.data.map(item => {
                                return (
                                    <>
                                        {
                                            props.txt && <CtsButton
                                                style={styles.ddcontainer}
                                                key={item.id}
                                                onPress={() => { setSelect(item.id), setActive(!active), dispatch(CollType(item.id)) }}
                                                txt={item.title}
                                                Txtstyle={styles.ddtxt}
                                            />
                                        }
                                        {
                                            props.img &&
                                            <CtsButton
                                                style={[styles.ddcontainer, { borderRadius: 25 }]}
                                                key={item.id}
                                                onPress={() => { setSelect(item.id), setActive(!active), dispatch(ViewTypes(item.id)) }}
                                                src={item.image}
                                                Imgstyle={styles.viewType}
                                            />
                                        }
                                    </>
                                )
                            })
                        }
                    </View>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    dropdown: {
        backgroundColor: "#F1F1F1",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        borderRadius: 25,
        marginHorizontal: 5
    },
    ddview: {
        position: 'absolute',
        left: 20,
    },
    ddimage: {
        height: 20,
        width: 20
    },
    viewType: {
        height: 25,
        width: 25
    },
    container: {
        height: height * 0.06,
    },
    ddcontainer: {
        backgroundColor: "#F1F1F1",
        padding: 5,
        margin: 1,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ddtxt: {
        fontFamily: appfont,
        fontSize: 20,

    }
})


