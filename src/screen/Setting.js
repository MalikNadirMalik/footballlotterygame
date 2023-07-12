import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, ImageBackground, Image, SafeAreaView, TouchableOpacity, Vibration } from 'react-native';
import dings from '../Assets/songs/ding.mp3';

const DURATION = 2000;



var Sound = require('react-native-sound');

Sound.setCategory('Playback');

var ding = new Sound(dings, error => {
    if (error) {
        console.log('failed to load the sound', error);
        return;
    }


    // if loaded successfully
    console.log(
        'duration in seconds: ' +
        ding.getDuration() +
        'number of channels: ' +
        ding.getNumberOfChannels(),
    );
});

// const Separator = () => {
//     return <View style={Platform.OS === 'android' ? styles.separator : null} />;
// };




const Setting = ({ navigation }) => {

    const [playing, setPlaying] = useState();
    const [vibration, setVibration] = useState(true);
    const [show, setShow] = useState(true);





    const Fibration = () => {

        if (vibration == true) {
            Vibration.vibrate(50000);
            setVibration(false);
        } else {
            Vibration.cancel();
            setVibration(true);
        }
    }


    const startVibration = () => {
        Vibration.vibrate(DURATION);

    }

    // const stopVibration = () => {
    //     Vibration.cancel();
    // }



    useEffect(() => {
        ding.setVolume(1);
        return () => {
            ding.release();
        };

    }, []);

    const playPause = () => {
        if (ding.isPlaying()) {
            ding.pause();
            setPlaying(false);
            setShow(false);
        } else {
            setPlaying(true);
            setShow(true);
            ding.play(success => {
                if (success) {
                    setPlaying(false);
                    console.log('successfully finished playing');
                } else {
                    setPlaying(false);
                    console.log('playback failed due to audio decoding errors');
                }
            });
        }
    };



    return (
        <View style={styles.mainContainer}>
            <ImageBackground source={require('../Assets/mainBackground.png')} style={{ height: '100%', width: '100%' }}>
                <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                    <Image source={require('../Assets/flag.png')} style={{ width: 80, height: 80, }} />

                </TouchableOpacity>
                <View style={styles.buttonview}>

                    <View style={styles.sound}>
                        <Text style={{
                            alignSelf: 'center', marginTop: 5, fontSize: 24, color: '#000000'
                        }}>
                            Sound
                        </Text>
                        <View style={{ width: 130, height: 90, backgroundColor: '#00AEA5' }}>
                            <TouchableOpacity onPress={playPause}>
                                <View style={{ width: 100, height: 70, backgroundColor: '#404040', alignSelf: 'center', marginTop: 10 }}>
                                    {
                                        (show) ? <Text style={{ alignSelf: 'center', marginTop: 15, color: '#ffff', fontSize: 24 }}>
                                            OFF
                                        </Text> :
                                            <Text style={{ alignSelf: 'center', marginTop: 15, color: '#ffff', fontSize: 24 }}>
                                                ON
                                            </Text>}
                                </View>
                            </TouchableOpacity>
                        </View>


                    </View>
                    <View style={styles.Vibration}>
                        <Text style={{
                            alignSelf: 'center', marginTop: 5, fontSize: 24, color: '#000000'
                        }} >
                            Vibration
                        </Text>
                        <View style={{ width: 130, height: 90, backgroundColor: '#00AEA5' }}>
                            <TouchableOpacity onPress={Fibration}>
                                <View style={{ width: 100, height: 70, backgroundColor: '#404040', alignSelf: 'center', marginTop: 10 }}>
                                    {
                                        (vibration) ? <Text style={{ alignSelf: 'center', marginTop: 15, color: '#ffff', fontSize: 24 }}>
                                            ON
                                        </Text> :
                                            <Text style={{ alignSelf: 'center', marginTop: 15, color: '#ffff', fontSize: 24 }}>
                                                OFF
                                            </Text>
                                    }
                                </View>
                            </TouchableOpacity>
                        </View>


                    </View>







                </View >



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
        marginTop: 100
    },
    sound: {
        marginTop: 50
    },
    Vibration: {
        marginTop: 100,
    }








});


export default Setting;