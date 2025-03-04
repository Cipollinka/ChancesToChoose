import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  ScreenName,
  useNavigation,
} from '../../user/lib/hooks/use-navigation.tsx';
import {useUser} from '../../user';

interface OnboardingScreen {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  image: any;
}

const onboardingData: OnboardingScreen[] = [
  {
    id: 1,
    title: 'Welcome to Chances!',
    description:
      "Make the tough decisions easier with our fun and simple app. Here's how it works:",
    buttonText: 'How it works?',
    image: require('../../assets/images/ONBOARD_ONE.png'),
  },
  {
    id: 2,
    title: 'Chances Mode',
    description:
      'Customize the chances for two options (yellow or blue), and let the app make a random decision for you.',
    buttonText: 'Next',
    image: require('../../assets/images/ONBOARD_TWO.png'),
  },
  {
    id: 3,
    title: 'Classic Coinflip',
    description:
      'Decide between "Heads" or "Tails" for a quick and simple choice.',
    buttonText: 'Next',
    image: require('../../assets/images/ONBOARD_THREE.png'),
  },
  {
    id: 4,
    title: 'History',
    description: 'Review all your past decisions in the "History" section.',
    buttonText: 'Next',
    image: require('../../assets/images/ONBOARD_FOUR.png'),
  },
  {
    id: 5,
    title: 'Random Inspiration',
    description:
      'Need a little boost? Get some random inspiration to help guide you!',
    buttonText: 'Get Started',
    image: require('../../assets/images/ONBOARD_SIX.png'),
  },
];

export const OnBoards = () => {
  const navigation = useNavigation();
  const {user, saveUser} = useUser();
  const [currentStep, setCurrentStep] = useState(0);

  // Перевіряємо, чи онбординг вже пройдено
  useEffect(() => {
    if (user?.onBoards) {
      navigation.navigate(ScreenName.Main);
    }
  }, [user, navigation]);

  const handleNext = () => {
    if (currentStep < onboardingData.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Зберігаємо стан проходження онбордингу
      saveUser({...user, onBoards: true});
      // Перенаправляємо на головний екран
      navigation.navigate(ScreenName.Main);
    }
  };

  const {title, description, buttonText, image} = onboardingData[currentStep];

  return (
    <ImageBackground source={image} style={styles.background}>
      <View style={styles.overlay}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  overlay: {
    backgroundColor: 'rgba(41, 41, 41, 1)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: 308,
    marginBottom: 10,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    color: '#ddd',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'rgba(255, 106, 109, 1)',
    width: 308,
    height: 62,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OnBoards;
