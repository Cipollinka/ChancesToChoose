import React, {useState, useRef} from 'react';
import {View, Text, TouchableOpacity, Animated, Easing} from 'react-native';
import {useUser} from '../../user';

export const ChancesToChoose = () => {
  const {user, saveUser} = useUser();
  const [isPlaying, setIsPlaying] = useState(false);
  const [blueCount, setBlueCount] = useState(0);
  const [yellowCount, setYellowCount] = useState(0);
  const translateY = useRef(new Animated.Value(0)).current;
  const animationRef = useRef<Animated.CompositeAnimation | null>(null);

  const startAnimation = () => {
    setIsPlaying(true);
    translateY.setValue(-150);

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
        // Випадковий вибір: чи зупиниться лінія на верхній чи нижній частині
        const randomStop = Math.random() < 0.5 ? 'blue' : 'yellow';

        const newResult = {
          color: randomStop,
          timestamp: new Date().toISOString(),
        };

        if (randomStop === 'blue') {
          setBlueCount(prev => prev + 1); // Синя частина
        } else {
          setYellowCount(prev => prev + 1); // Жовта частина
        }

        saveUser({
          ...user,
          history: [...(user?.history || []), newResult],
        });

        setIsPlaying(false);
      });
    }, 6000);
  };
  console.log('History', user?.history);
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
            Blues
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
            backgroundColor: 'rgba(253, 195, 0, 1)',
            borderRadius: 14,
            borderColor: 'rgba(255, 255, 255, 1)',
            borderWidth: 1,
            gap: 5,
          }}>
          <Text style={{fontSize: 18, color: 'white', fontWeight: '600'}}>
            Yellows
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
          backgroundColor: 'black',
          overflow: 'hidden',
          borderRadius: 18,
        }}>
        <View
          style={{
            width: '100%',
            height: '50%',
            backgroundColor: 'rgba(109, 129, 255, 1)', // Синя частина
          }}
        />
        <View
          style={{
            width: '100%',
            height: '50%',
            backgroundColor: 'rgba(253, 195, 0, 1)', // Жовта частина
          }}
        />
        <Animated.View
          style={{
            position: 'absolute',
            width: '100%',
            height: 4,
            backgroundColor: 'white',
            transform: [{translateY}],
          }}
        />
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
