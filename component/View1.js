import { useNavigation, useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { Dimensions } from 'react-native';
import { Pressable } from 'react-native';
import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

const View1 = () => {
    const [idImg, setIdImg] = useState(1)
    const nav = useNavigation()
    const rou = useRoute()
    const items = [
        {
            id: 1,
            color: 'blue',
            url: require('../assets/blue.png'),
        },
        {
            id: 2,
            color: 'red',
            url: require('../assets/red.png'),
        },
        {
            id: 3,
            color: 'black',
            url: require('../assets/black.png'),
        },
        {
            id: 4,
            color: 'white',
            url: require('../assets/white.png'),
        },
    ]
    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <Image style={{ width: Dimensions.get('window').width, height: 350, resizeMode: 'contain' }} source={rou.params?.urlImg == null ? items[idImg].url : rou.params?.urlImg} />
            </View>
            <View>
                <Text style={{ textAlign: 'left' }}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
            </View>
            <View style={{ width: Dimensions.get('window').width, flexDirection: 'row', marginRight: 110, alignItems: 'center', marginTop: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={{ marginRight: 4, width: 15, height: 20, resizeMode: 'contain' }} source={require('../assets/star.png')} />
                    <Image style={{ marginRight: 4, width: 15, height: 20, resizeMode: 'contain' }} source={require('../assets/star.png')} />
                    <Image style={{ marginRight: 4, width: 15, height: 20, resizeMode: 'contain' }} source={require('../assets/star.png')} />
                    <Image style={{ marginRight: 4, width: 15, height: 20, resizeMode: 'contain' }} source={require('../assets/star.png')} />
                    <Image style={{ marginRight: 4, width: 15, height: 20, resizeMode: 'contain' }} source={require('../assets/star.png')} />
                </View>
                <Text style={{ marginLeft: 60 }}>(Xem 828 đánh giá)</Text>
            </View>
            <View style={{ width: Dimensions.get('window').width / 2 + 80, flexDirection: 'row', marginRight: 110, alignItems: 'center', marginTop: 10, justifyContent: 'space-between' }}>
                <Text style={{ fontWeight: 'bold', }}>1.790.000 đ</Text>
                <Text style={{ fontWeight: 'normal', textDecorationLine: 'line-through' }}>1.790.000 đ</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <Text style={{ fontWeight: 'bold', color: 'red' }}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                <Text style={{ marginLeft: 10, borderWidth: 1, borderRadius: 100, fontSize: 10, width: 15, height: 15, textAlign: 'center' }}>?</Text>
            </View>
            <Pressable onPress={() => nav.navigate("view2", {
                img: rou.params?.urlImg === null ? items[idImg].url : rou.params?.urlImg,
                productName: 'Điện Thoại Vsmart Joy 3 - Hàng chính hãng',
            })}>
                <View style={{ borderRadius: 10, height: 30, borderWidth: 1, marginTop: 20, justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                    <Text>4 MÀU-CHỌN MÀU</Text>
                    {/* <Text>{rou.params?.urlImg}</Text> */}
                </View>

            </Pressable>
            <View style={{ position: 'absolute', backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', width: Dimensions.get('window').width - 50, bottom: 20, height: 40, borderRadius: 10 }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: '20' }}>CHỌN MUA</Text>
            </View>
        </View>
    )
}

export default View1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        position: 'relative'
    },
});
