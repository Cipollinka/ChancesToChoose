import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const inspirationQuotes: string[] = [
  'Never give up, even when it feels like there’s no way out.',
  'True strength lies in moving forward despite the struggles.',
  'Each day is a new beginning. Write your own story.',
  'Seize every opportunity, even when it seems insignificant.',
  'You are capable of more than you think.',
  'Courage isn’t the absence of fear; it’s the ability to act despite it.',
  'Never give in to your doubts.',
  'Life is a journey, not a finish line.',
  'Small steps lead to great achievements.',
  'Success comes to those who aren’t afraid to start over.',
  'You create your own reality.',
  'Happiness is not a destination, but a way of life.',
  'Change your thoughts, and you change your world.',
  'The only way to do great work is to love what you do.',
  'Believe in yourself, even when others don’t.',
  'Don’t wait for the perfect moment, make the moment perfect.',
  'Dream big, start small, act now.',
  'The harder you work for something, the greater you’ll feel when you achieve it.',
  'Success is the sum of small efforts, repeated day in and day out.',
  'Everything you need is already within you.',
];

export const RandomInspiration = () => {
  const defaultText = 'Tap the button to get the\ninspiration';
  const [quote, setQuote] = useState<string>(defaultText);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * inspirationQuotes.length);
    setQuote(inspirationQuotes[randomIndex]);
  };

  return (
    <View>
      <View style={styles.header_text}>
        <Text style={styles.header_title}>Random Inspiration</Text>
        <Text style={styles.paragraph}>
          Get random inspiration, maybe it{'\n'}will be useful for you :)
        </Text>
      </View>
      <View
        style={[
          styles.container,
          {
            backgroundColor:
              quote === defaultText
                ? 'rgba(41, 41, 41, 1)'
                : 'rgba(109, 129, 255, 1)',
          },
        ]}>
        <Image source={require('../../assets/icons/mingcute_ai-fill.png')} />
        <Text style={styles.container_title}>Your inspiration:</Text>
        <Text style={styles.paragraph}>{quote}</Text>
      </View>
      <TouchableOpacity style={styles.shearedBtn} onPress={getRandomQuote}>
        <Text style={styles.sheared_text}>Get Inspired</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header_text: {
    height: 90,
    width: 308,
    marginTop: 50,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(41, 41, 41, 1)',
  },
  header_title: {
    fontSize: 24,
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 1)',
  },
  container: {
    height: 155,
    width: 308,
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 20,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_title: {
    fontSize: 18,
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 1)',
    marginBottom: 5,
    marginTop: 10,
  },
  paragraph: {
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 1)',
  },
  sheared_text: {
    fontSize: 18,
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 1)',
  },
  shearedBtn: {
    height: 62,
    width: 308,
    marginTop: 20,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 106, 109, 1)',
  },
});
