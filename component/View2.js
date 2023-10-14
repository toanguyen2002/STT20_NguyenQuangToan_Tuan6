import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Image } from 'react-native'
import { Dimensions } from 'react-native'
import { Pressable } from 'react-native'

const View2 = () => {
    const [idImg, setIdImg] = useState(-1)
    const router = useRoute()
    const nav = useNavigation()
    const items = [
        {
            id: 0,
            color: 'blue',
            url: require('../assets/blue.png'),
        },
        {
            id: 1,
            color: 'red',
            url: require('../assets/red.png'),
            title1: 'Dien thoại này oke',
            title2: 'Dien thoại này oke'

        },
        {
            id: 2,
            color: 'black',
            url: require('../assets/black.png'),
            title1: 'Dien thoại này oke',
            title2: 'Dien thoại này oke'

        },
        {
            id: 3,
            color: 'white',
            url: require('../assets/white.png'),
            title1: 'Dien thoại này oke',
            title2: 'Dien thoại này oke'
        },
    ]

    const setIdimg = (id) => {
        setIdImg(id)
        console.log(items[idImg].url);
    }
    return (
        <View style={{ position: 'relative', flex: 1 }}>
            <Pressable onPress={() => { console.log(router.params?.img) }}>
                <View style={styles.white}>
                    <Image source={items[idImg]?.url == null ? router?.params?.img : items[idImg]?.url} style={{ height: 100, width: 130, resizeMode: "contain" }} />
                    <View>
                        <Text>{router?.params?.productName}</Text>
                        <Text>{items[idImg]?.title1}</Text>
                        <Text>{items[idImg]?.title2}</Text>
                    </View>
                </View>
            </Pressable>

            <View style={{ padding: 5, justifyContent: 'center', alignItems: 'center', backgroundColor: '#aaa' }}>
                {items.map((item, index) => (
                    <Pressable onPress={() => setIdimg(item.id)}>
                        <View style={{ marginTop: 5, backgroundColor: item?.color, width: 100, height: 100 }}>

                        </View>
                    </Pressable>
                ))}
                <Pressable onPress={() => nav.navigate('view1', {
                    urlImg: items[idImg]?.url
                })}>
                    <View style={{ marginTop: 10, width: 380, height: 50, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>XONG</Text>
                    </View>
                </Pressable>
            </View>


        </View>
    )
}

export default View2

const styles = StyleSheet.create({
    white: {
        backgroundColor: 'white',
        flexDirection: 'row',
        padding: 5,
    }
})