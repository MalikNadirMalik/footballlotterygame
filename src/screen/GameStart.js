import React, { useState, useEffect } from "react";
import {
  View, StyleSheet,
  Text, ImageBackground, Image, TouchableOpacity
} from 'react-native';
// import AsyncStorage from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Countdown from 'react-native-countdown-component';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Images = [
  {
    val: 1, name: 'bagOfGold', image: require('../Assets/bagOfGold.png')
  },
  {
    val: 2, name: 'coin', image: require('../Assets/goldCard.png')
  },
  {
    val: 3, name: 'redCard', image: require('../Assets/redCard.png')
  },
  {
    val: 4, name: 'yellowCard', image: require('../Assets/yellowCard.png')
  },
  {
    val: 5, name: 'emptyCard', image: require('../Assets/emptyCard.png')
  },
  {
    val: 6, name: 'blackCard', image: require('../Assets/blackCard.png')
  },

];


function GameStart({ navigation }) {
  const [randomSelection, setRandomSelection] = useState(Math.floor(Math.random() * 25) + 1);
  const [randomImageIndex, setRandomImageIndex] = useState(Math.floor(Math.random() * Images.length));
  const [score, setScore] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [randomImage, setRandomImage] = useState([
    require('../Assets/blackCard.png'),
    require('../Assets/blackCard.png'),
    require('../Assets/blackCard.png'),
    require('../Assets/blackCard.png'),
    require('../Assets/blackCard.png'),
    require('../Assets/blackCard.png'),
    require('../Assets/blackCard.png'),
    require('../Assets/blackCard.png'),
    require('../Assets/blackCard.png'),
    require('../Assets/blackCard.png'),
    require('../Assets/blackCard.png'),
    require('../Assets/blackCard.png'),
    require('../Assets/blackCard.png'),
    require('../Assets/blackCard.png'),
    require('../Assets/blackCard.png'),
    require('../Assets/blackCard.png'),
    require('../Assets/blackCard.png'),
    require('../Assets/blackCard.png'),
    require('../Assets/blackCard.png'),
    require('../Assets/blackCard.png'),
    require('../Assets/blackCard.png'),
    require('../Assets/blackCard.png'),
    require('../Assets/blackCard.png'),
    require('../Assets/blackCard.png'),
    require('../Assets/blackCard.png')
  ]);



  function getNumberOfOccurence(item, array) {
    let occurence = 0;
    for (let i = 0; i < array.length; i++) {
      if (item == array[i]) {
        occurence++;
      }
    }
    return occurence;
  }

  async function selectedImage(number) {
    setTimeout(() => {
      let randomIndex = Math.floor(Math.random() * (Images.length - 1));
      switch (randomIndex) {
        case 0:
          selectedCards.push("bagOfGold");
          let num = getNumberOfOccurence("bagOfGold", selectedCards);
          if (num == 1) {
            setScore(score + 3);
          } else if (num > 1) {
            setScore(score + 10);
          }
        case 1:
          selectedCards.push("coin");
          let num1 = getNumberOfOccurence("coin", selectedCards);
          if (num1 == 1) {
            setScore(score + 1);
          } else if (num1 > 1) {
            setScore(score + 3);
          }
        case 2:
          selectedCards.push("redCard");
          let num2 = getNumberOfOccurence("redCard", selectedCards);
          if (num2 == 1) {
            score > 3 ? setScore(score - 3) : setScore(0);
          } else if (num2 > 1) {
            score > 7 ? setScore(score - 7) : setScore(0);
          }
        case 3:
          selectedCards.push("yellowCard");
          let num3 = getNumberOfOccurence("yellowCard", selectedCards);
          if (num3 == 1) {
            setScore(score + 2);
          } else if (num3 > 1) {
            setScore(score + 3);
          }
      }
      console.log(randomIndex)
      let imageSrc = Images[randomIndex].image;
      randomImage[number] = imageSrc;
      // setRandomImage({ number: imageSrc });

      console.log('score', score);

      // const jsonValue = JSON.stringify(score)


      // localStorage.setItem("lastname", "score");
      // console.log('score', score);
    }, 3000);

    await AsyncStorage.setItem('score', score.toString());

  };




  useEffect(() => {

    selectedImage()

    if (completed) {
      // Navigate to the next component after 1 minute
      setTimeout(() => {
        navigation.navigate('Win'); // Replace 'NextComponent' with your component name
      },); // 1 minute = 60,000 milliseconds
    }
  }, [completed, navigation]);

  const handleCompletion = () => {
    setCompleted(true);


  };



  return (
    <View style={styles.mainContainer}>



      <ImageBackground source={require('../Assets/mainBackground.png')} style={{ height: '100%', width: '100%' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
          <Image source={require('../Assets/flag.png')} style={{ width: 80, height: 80, }} />

        </TouchableOpacity>

        <View style={styles.timer}>
          <Image source={require('../Assets/clock.png')} style={{ width: 100, height: 100, }} />
          {/* <Text style={{ fontSize: 24, color: '#404040', marginTop: 45, marginLeft: 15, fontWeight: 'bold' }}>
            00:38
          </Text> */}
          <Countdown
            style={{ fontSize: 24, color: '#404040', marginTop: 45, }}
            until={60}
            onFinish={handleCompletion}
            size={20}
            timeToShow={['M', 'S']}
            timeLabels={{ m: 'Minutes', s: 'Seconds' }}
          />
        </View>
        <View style={{ marginTop: 10, marginBottom: 20 }}>
          <ImageBackground source={require('../Assets/emptyCard.png')} style={{ width: 150, height: 50, alignSelf: 'center' }} >
            <Text style={{
              fontSize: 24, alignSelf: 'center', marginTop: 5, fontWeight: 'bold', color: '#404040'
            }}>
              {score}
            </Text>

          </ImageBackground>
        </View>
        <View style={styles.boxes}>
          <TouchableOpacity onPress={() => selectedImage(0)} activeOpacity={0.75}>
            <Image source={randomImage[0]} style={{ width: 60, height: 50, }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => selectedImage(1)}>
            <Image source={randomImage[1]} style={{ width: 60, height: 50, }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => selectedImage(2)}>
            <Image source={randomImage[2]} style={{ width: 60, height: 50, }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => selectedImage(3)}>
            <Image source={randomImage[3]} style={{ width: 60, height: 50, }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => selectedImage(4)}>
            <Image source={randomImage[4]} style={{ width: 60, height: 50, }} />
          </TouchableOpacity>
        </View>

        <View style={styles.boxes}>
          <TouchableOpacity onPress={() => selectedImage(5)}>
            <Image source={randomImage[5]} style={{ width: 60, height: 50, }} />
          </TouchableOpacity >
          <TouchableOpacity onPress={() => selectedImage(6)}>
            <Image source={randomImage[6]} style={{ width: 60, height: 50, }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => selectedImage(7)}>
            <Image source={randomImage[7]} style={{ width: 60, height: 50, }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => selectedImage(8)}>
            <Image source={randomImage[8]} style={{ width: 60, height: 50, }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => selectedImage(9)}>
            <Image source={randomImage[9]} style={{ width: 60, height: 50, }} />
          </TouchableOpacity>
        </View>

        <View style={styles.boxes}>
          <TouchableOpacity onPress={() => selectedImage(10)}>
            <Image source={randomImage[10]} style={{ width: 60, height: 50, }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => selectedImage(11)}>
            <Image source={randomImage[11]} style={{ width: 60, height: 50, }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => selectedImage(12)}>
            <Image source={randomImage[12]} style={{ width: 60, height: 50, }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => selectedImage(13)}>
            <Image source={randomImage[13]} style={{ width: 60, height: 50, }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => selectedImage(14)}>
            <Image source={randomImage[14]} style={{ width: 60, height: 50, }} />
          </TouchableOpacity>
        </View>

        <View style={styles.boxes}>
          <TouchableOpacity onPress={() => selectedImage(15)}>
            <Image source={randomImage[15]} style={{ width: 60, height: 50, }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => selectedImage(16)}>
            <Image source={randomImage[16]} style={{ width: 60, height: 50, }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => selectedImage(17)}>
            <Image source={randomImage[17]} style={{ width: 60, height: 50, }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => selectedImage(18)}>
            <Image source={randomImage[18]} style={{ width: 60, height: 50, }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => selectedImage(19)}>
            <Image source={randomImage[19]} style={{ width: 60, height: 50, }} />
          </TouchableOpacity>
        </View>

        <View style={styles.boxes}>
          <TouchableOpacity onPress={() => selectedImage(20)}>
            <Image source={randomImage[20]} style={{ width: 60, height: 50, }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => selectedImage(21)}>
            <Image source={randomImage[21]} style={{ width: 60, height: 50, }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => selectedImage(22)}>
            <Image source={randomImage[22]} style={{ width: 60, height: 50, }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => selectedImage(23)}>
            <Image source={randomImage[23]} style={{ width: 60, height: 50, }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => selectedImage(24)}>
            <Image source={randomImage[24]} style={{ width: 60, height: 50, }} />
          </TouchableOpacity>
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


export default GameStart;