import React, { useState, useEffect } from "react";
import {
    View, StyleSheet,
    Text, ImageBackground, Image, TouchableOpacity
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


//Login Screen for Client or the Manufacturer.

function Win({ navigation }) {

    const [score, setScore] = useState();

    useEffect(() => {
        getsScore();


    }, [])

    async function getsScore() {

        const score = await AsyncStorage.getItem('score');

        setScore(score);

        console.log(score);
    }

    return (
        <View style={styles.mainContainer}>



            <ImageBackground source={require('../Assets/mainBackground.png')} style={{ height: '100%', width: '100%' }}>
                <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                    <Image source={require('../Assets/flag.png')} style={{ width: 80, height: 80, }} />

                </TouchableOpacity>


                <View style={{ marginTop: 100, width: 500, height: 500, alignSelf: 'center', marginTop: 250 }}>
                    <ImageBackground source={require('../Assets/emptyCard.png')} style={{ width: 200, height: 100, alignSelf: 'center' }} >
                        <Text style={{
                            fontSize: 24, alignSelf: 'center', marginTop: 30, fontWeight: 'bold', color: '#404040'
                        }}>
                            {score}
                        </Text>

                    </ImageBackground>
                </View>

            </ImageBackground >
        </View >
    )
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },


});

export default Win;