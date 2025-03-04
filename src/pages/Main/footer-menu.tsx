import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

interface FooterProps {
  activePage: string;
  openScreen: (pageName: string) => void;
}

export const Footer = ({activePage, openScreen}: FooterProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => openScreen('settings')}
        style={[
          styles.button,
          {
            backgroundColor:
              activePage === 'settings'
                ? 'rgba(255, 255, 255, 1)'
                : 'rgba(25, 25, 25, 1)',
          },
        ]}>
        <Image
          source={
            activePage === 'settings'
              ? require('../../assets/icons/active_settings_icon.png')
              : require('../../assets/icons/settings_icon.png')
          }
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => openScreen('ClassicCoinflip')}
        style={[
          styles.button,
          {
            backgroundColor:
              activePage === 'ClassicCoinflip'
                ? 'rgba(255, 255, 255, 1)'
                : 'rgba(25, 25, 25, 1)',
          },
        ]}>
        <Image
          source={
            activePage === 'ClassicCoinflip'
              ? require('../../assets/icons/active_classic_coinflip_icon.png')
              : require('../../assets/icons/classic_coinflip_icon.png')
          }
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => openScreen('ChancesToChoose')}
        style={[
          styles.button,
          {
            backgroundColor:
              activePage === 'ChancesToChoose'
                ? 'rgba(255, 255, 255, 1)'
                : 'rgba(25, 25, 25, 1)',
          },
        ]}>
        <Image
          source={
            activePage === 'ChancesToChoose'
              ? require('../../assets/icons/active_ic_twotone-flip.png')
              : require('../../assets/icons/ic_twotone-flip.png')
          }
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => openScreen('history')}
        style={[
          styles.button,
          {
            backgroundColor:
              activePage === 'history'
                ? 'rgba(255, 255, 255, 1)'
                : 'rgba(25, 25, 25, 1)',
          },
        ]}>
        <Image
          source={
            activePage === 'history'
              ? require('../../assets/icons/active_material-symbols_history-rounded.png')
              : require('../../assets/icons/material-symbols_history-rounded.png')
          }
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => openScreen('RandomInspiration')}
        style={[
          styles.button,
          {
            backgroundColor:
              activePage === 'RandomInspiration'
                ? 'rgba(255, 255, 255, 1)'
                : 'rgba(25, 25, 25, 1)',
          },
        ]}>
        <Image
          source={
            activePage === 'RandomInspiration'
              ? require('../../assets/icons/active_mingcute_ai-fill.png')
              : require('../../assets/icons/mingcute_ai-fill.png')
          }
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 308,
    height: 60,
    marginBottom: 50,
    borderRadius: 18,
    flexDirection: 'row',
    backgroundColor: 'rgba(47, 47, 47, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  button: {
    width: 50,
    height: 50,
    alignItems: 'center',
    borderRadius: 15.52,
    justifyContent: 'center',
  },
});
