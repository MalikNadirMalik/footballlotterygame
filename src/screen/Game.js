import React, { useState, useEffect } from "react";
import {
    View, StyleSheet, Text,
    TouchableOpacity, ImageBackground, Image
} from 'react-native';




const Game = ({ navigation }) => {

    useEffect(() => {

        setTimeout(() => {
            navigation.replace('GameStart')
        }, 1000); // amount of time the splash is shown from the time component is rendered
    }, []);

    return (
        <View style={styles.mainContainer}>



            <ImageBackground source={require('../Assets/mainBackground.png')} style={{ height: '100%', width: '100%' }}>
                <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                    <Image source={require('../Assets/flag.png')} style={{ width: 80, height: 80, }} />

                </TouchableOpacity>

                <View style={styles.timer}>
                    <Image source={require('../Assets/clock.png')} style={{ width: 100, height: 100, }} />
                    <Text style={{ fontSize: 24, color: '#404040', marginTop: 45, marginLeft: 15, fontWeight: 'bold' }}>
                        00:59
                    </Text>
                </View>
                <View style={{ marginTop: 10, marginBottom: 20 }}>
                    <ImageBackground source={require('../Assets/emptyCard.png')} style={{ width: 150, height: 50, alignSelf: 'center' }}>
                        <Text style={{
                            fontSize: 24, alignSelf: 'center', marginTop: 5
                        }}>
                            0
                        </Text>

                    </ImageBackground>
                </View>
                <View style={styles.boxes}>
                    <Image source={require('../Assets/blackCard.png')} style={{ width: 60, height: 50, }} />
                    <Image source={require('../Assets/blackCard.png')} style={{ width: 60, height: 50, }} />
                    <Image source={require('../Assets/blackCard.png')} style={{ width: 60, height: 50, }} />
                    <Image source={require('../Assets/blackCard.png')} style={{ width: 60, height: 50, }} />
                    <Image source={require('../Assets/blackCard.png')} style={{ width: 60, height: 50, }} />
                </View>

                <View style={styles.boxes}>
                    <Image source={require('../Assets/blackCard.png')} style={{ width: 60, height: 50, }} />
                    <Image source={require('../Assets/blackCard.png')} style={{ width: 60, height: 50, }} />
                    <Image source={require('../Assets/blackCard.png')} style={{ width: 60, height: 50, }} />
                    <Image source={require('../Assets/blackCard.png')} style={{ width: 60, height: 50, }} />
                    <Image source={require('../Assets/blackCard.png')} style={{ width: 60, height: 50, }} />
                </View>

                <View style={styles.boxes}>
                    <Image source={require('../Assets/blackCard.png')} style={{ width: 60, height: 50, }} />
                    <Image source={require('../Assets/blackCard.png')} style={{ width: 60, height: 50, }} />
                    <Image source={require('../Assets/blackCard.png')} style={{ width: 60, height: 50, }} />
                    <Image source={require('../Assets/blackCard.png')} style={{ width: 60, height: 50, }} />
                    <Image source={require('../Assets/blackCard.png')} style={{ width: 60, height: 50, }} />
                </View>

                <View style={styles.boxes}>
                    <Image source={require('../Assets/blackCard.png')} style={{ width: 60, height: 50, }} />
                    <Image source={require('../Assets/blackCard.png')} style={{ width: 60, height: 50, }} />
                    <Image source={require('../Assets/blackCard.png')} style={{ width: 60, height: 50, }} />
                    <Image source={require('../Assets/blackCard.png')} style={{ width: 60, height: 50, }} />
                    <Image source={require('../Assets/blackCard.png')} style={{ width: 60, height: 50, }} />
                </View>

                <View style={styles.boxes}>
                    <Image source={require('../Assets/blackCard.png')} style={{ width: 60, height: 50, }} />
                    <Image source={require('../Assets/blackCard.png')} style={{ width: 60, height: 50, }} />
                    <Image source={require('../Assets/blackCard.png')} style={{ width: 60, height: 50, }} />
                    <Image source={require('../Assets/blackCard.png')} style={{ width: 60, height: 50, }} />
                    <Image source={require('../Assets/blackCard.png')} style={{ width: 60, height: 50, }} />
                </View>









            </ImageBackground >
        </View >
    )
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    timer: {
        width: 170,
        height: 110,
        marginTop: 100,
        alignSelf: 'center',
        flexDirection: 'row',
        marginRight: 50
    },
    boxes: {
        flexDirection: 'row',
        width: '100%',
        height: 60,
        justifyContent: 'space-evenly',

    }
});


export default Game;