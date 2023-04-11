import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import { Icons } from '../../../../Constant/images'
import { brand, width } from '../../../../Constant/constant'

export default Brand = (props) => {
    return (
        <View style={styles.container}>
            <Image source={Icons.diamond_line} style={styles.diamond} />
            <FlatList
                data={brand}
                keyExtractor={item => item.id}
                numColumns={3}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity>
                            <Image source={item.image} style={styles.brandimage} />
                        </TouchableOpacity>
                    )
                }}
            />
            <Image source={Icons.diamond_line} style={styles.diamond} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    diamond: {
        width: 150,
        height: 15,
        marginVertical:15
    },
    brandimage: {
        height: 40,
        width: 80,
        resizeMode: 'contain',
        marginHorizontal: 15
    }
})