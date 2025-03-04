import {Image, StyleSheet, View} from 'react-native';
import {
  ScreenName,
  useNavigation,
} from '../../user/lib/hooks/use-navigation.tsx';
import {useUser} from '../../user';

export const Loader = () => {
  const {user} = useUser();
  const navigation = useNavigation();

  setTimeout(() => {
    if (user?.onBoards) {
      navigation.navigate(ScreenName.Main);
    } else {
      navigation.navigate(ScreenName.OnBoards);
    }
  }, 2000);

  return (
    <View>
      <View style={styles.container}>
        <Image
          style={{width: 243, height: 203}}
          source={require('../../assets/icons/loader_icon_screen_three.png')}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(26, 26, 26, 1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
