import {StyleSheet, View} from 'react-native';
import {Footer} from './footer-menu.tsx';
import {useState} from 'react';
import {Settings} from '../Settings/settings.tsx';
import {ChancesToChoose} from '../ChancesToChoose/chances-to-choose.tsx';
import {ClassicCoinFlip} from '../ClassicCoinflip/classic-coinflip.tsx';
import {History} from '../History/history.tsx';
import {RandomInspiration} from '../RandomInspiration/random-inspiration.tsx';

export const Main = () => {
  const [activeScreen, setActiveScreen] = useState('ChancesToChoose');

  const handlePage = (pageName: string) => {
    setActiveScreen(pageName);
  };

  const renderScreen = () => {
    switch (activeScreen) {
      case 'settings':
        return <Settings />;
      case 'ChancesToChoose':
        return <ChancesToChoose />;
      case 'ClassicCoinflip':
        return <ClassicCoinFlip />;
      case 'history':
        return <History />;
      case 'RandomInspiration':
        return <RandomInspiration />;
    }
  };

  return (
    <View style={styles.container}>
      {renderScreen()}
      <Footer activePage={activeScreen} openScreen={handlePage} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(26, 26, 26, 1)',
  },
});
