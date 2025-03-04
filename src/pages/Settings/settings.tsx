import {
  Alert,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export const Settings = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Check out this awesome app! Download it now: https://your-app-link.com',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('Shared with activity type: ', result.activityType);
        } else {
          console.log('Shared');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Dismissed');
      }
    } catch (error) {
      Alert.alert('Something went wrong', 'Unable to share the app');
      console.error(error);
    }
  };
  return (
    <View>
      <View style={styles.header_text}>
        <Text style={styles.header_title}>Settings</Text>
      </View>
      <TouchableOpacity onPress={onShare} style={styles.shearedBtn}>
        <Text style={styles.sheared_text}>Share app</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  header_text: {
    height: 69,
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
