import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Easing,
  Image,
} from 'react-native';
import {useUser} from '../../user';

export const ClassicCoinFlip = () => {
  const {user, saveUser} = useUser();
  const [isPlaying, setIsPlaying] = useState(false);
  const [blueCount, setBlueCount] = useState(0);
  const [yellowCount, setYellowCount] = useState(0);
  const [selectedImage, setSelectedImage] = useState(
    require('../../assets/images/blue_coin.png'),
  ); // Додаємо стан для зображення
  const translateY = useRef(new Animated.Value(0)).current;
  const animationRef = useRef<Animated.CompositeAnimation | null>(null);

  const startAnimation = () => {
    setIsPlaying(true);
    translateY.setValue(-150);
    setSelectedImage(require('../../assets/images/blue_coin.png'));

    animationRef.current = Animated.loop(
      Animated.sequence([
        Animated.timing(translateY, {
          toValue: 230,
          duration: 300,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: -150,
          duration: 300,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
    );

    animationRef.current.start();

    setTimeout(() => {
      animationRef.current?.stop();
      translateY.stopAnimation(() => {
        const isBlue = Math.random() < 0.5;
        const newResult = {
          id: Date.now(),
          result: isBlue ? 'Tails (Blue)' : 'Heads (Red)',
          timestamp: new Date().toISOString(),
        };

        setSelectedImage(
          isBlue
            ? require('../../assets/images/blue_coin.png')
            : require('../../assets/images/red_coin.png'),
        );

        if (isBlue) {
          setBlueCount(prev => prev + 1);
        } else {
          setYellowCount(prev => prev + 1);
        }

        // Збереження результату в user?.history
        saveUser({
          ...user,
          history: [...(user?.history || []), newResult],
        });

        setIsPlaying(false);
      });
    }, 3000);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          width: 308,
          height: 112,
          borderRadius: 22,
          backgroundColor: 'black',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 20,
        }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: '700',
            color: 'rgba(255, 255, 255, 1)',
          }}>
          Chances to Choose
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '400',
            color: 'rgba(255, 255, 255, 1)',
            textAlign: 'center',
          }}>
          Adjust your odds manually and{'\n'}make decisions easily
        </Text>
      </View>

      <View style={{flexDirection: 'row', marginBottom: 32, gap: 15}}>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            paddingBottom: 15,
            paddingLeft: 35,
            paddingTop: 15,
            paddingRight: 35,
            backgroundColor: 'rgba(109, 129, 255, 1)',
            borderRadius: 14,
            borderColor: 'rgba(255, 255, 255, 1)',
            borderWidth: 1,
            gap: 5,
          }}>
          <Text style={{fontSize: 18, color: 'white', fontWeight: '600'}}>
            Tails
          </Text>
          <Text style={{fontSize: 18, color: 'white', fontWeight: '600'}}>
            {blueCount}
          </Text>
        </View>

        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            paddingBottom: 15,
            paddingLeft: 35,
            paddingTop: 15,
            paddingRight: 35,
            backgroundColor: 'rgba(165, 15, 49, 1)',
            borderRadius: 14,
            borderColor: 'rgba(255, 255, 255, 1)',
            borderWidth: 1,
            gap: 5,
          }}>
          <Text style={{fontSize: 18, color: 'white', fontWeight: '600'}}>
            Heads
          </Text>
          <Text style={{fontSize: 18, color: 'white', fontWeight: '600'}}>
            {yellowCount}
          </Text>
        </View>
      </View>

      <View
        style={{
          width: 308,
          height: 237,
          overflow: 'hidden',
          borderRadius: 18,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {selectedImage && <Image source={selectedImage} />}
      </View>

      <TouchableOpacity
        onPress={startAnimation}
        disabled={isPlaying}
        style={{
          marginTop: 20,
          padding: 10,
          backgroundColor: 'rgba(255, 106, 109, 1)',
          width: 308,
          height: 62,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 18,
        }}>
        <Text style={{color: 'white'}}>Try</Text>
      </TouchableOpacity>
    </View>
  );
};
