import React, { useEffect } from 'react';
import { View, StyleSheet, Image, ImageBackground, Text, Dimensions, TouchableOpacity } from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    heightPercentageToDP,
    widthPercentageToDP,
} from 'react-native-responsive-screen';
//Splash Screen for the User experience.

const { height, width } = Dimensions.get('window');

const Menu = ({ navigation }) => {

    return (
        <View style={styles.mainContainer}>
            <ImageBackground source={require('../Assets/mainBackground.png')} style={{ height: '100%', width: '100%' }}>

                <View style={styles.buttonview}>
                    <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                        <ImageBackground source={require('../Assets/emptybox.png')} style={styles.setting}>
                            <Text style={{ fontSize: 24, alignItems: 'center', color: '#000000' }}>
                                Settings
                            </Text>

                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Game')}>
                        <ImageBackground source={require('../Assets/emptybox.png')} style={styles.Game}>
                            <Text style={{ fontSize: 24, alignItems: 'center', color: '#000000' }}>
                                Game
                            </Text>

                        </ImageBackground>
                    </TouchableOpacity>




                </View>
                <Image source={require('../Assets/football.png')} style={styles.football} />



            </ImageBackground >
        </View >
    )
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },

    buttonview: {
        width: '100%',
        height: '50%',
        alignItems: 'center',
    },

    setting: {

        width: 273,
        height: 68,
        // marginLeft: 150,
        marginTop: 160,
        justifyContent: 'center',
        alignItems: 'center',

    },
    Game: {

        width: 273,
        height: 68,
        // marginLeft: 150,
        marginTop: 60,
        justifyContent: 'center',
        alignItems: 'center',

    },
    football: {
        width: 200,
        height: 200,
        marginTop: 175,
        alignSelf: 'flex-end',

    }

});

export default Menu;