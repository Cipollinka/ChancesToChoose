import React from 'react';
import {
  Image,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useUser} from '../../user';

export const History = () => {
  const {user} = useUser();

  // Фільтруємо дані з історії на дві категорії
  const chancesMode = user?.history?.filter(item => item.color) || [];
  const coinflipMode = user?.history?.filter(item => item.result) || [];

  const handleShare = async (item: any) => {
    try {
      const message = `📜 History Record:\n🕒 ${new Date(
        item.timestamp,
      ).toLocaleString()}\n📌 Result: ${item.color || item.result}`;
      await Share.share({
        message,
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <View>
      <View style={styles.header_text}>
        <Text style={styles.header_title}>History</Text>
      </View>

      <View style={styles.history_container}>
        {/* Chances Mode */}
        <View>
          <Text style={styles.section_title}>Chances Mode:</Text>
          <View style={{height: 200}}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{alignItems: 'center', gap: 10}}>
                {chancesMode.length > 0 ? (
                  chancesMode.map((item, index) => (
                    <View
                      key={index}
                      style={[
                        styles.input_color,
                        {backgroundColor: item.color},
                      ]}>
                      <View>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: '400',
                            color: 'rgba(0, 0, 0, 1)',
                          }}>
                          {new Date(item.timestamp).toLocaleString()}
                        </Text>
                        <Text style={styles.history_text}>
                          Result:
                          {item.color}
                        </Text>
                      </View>
                      <TouchableOpacity
                        onPress={() => handleShare(item)}
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 10,
                          backgroundColor: 'rgba(25, 25, 25, 1)',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Image
                          source={require('../../assets/icons/shaired.png')}
                        />
                      </TouchableOpacity>
                    </View>
                  ))
                ) : (
                  <Text style={styles.empty_text}>No records</Text>
                )}
              </View>
            </ScrollView>
          </View>
        </View>

        {/* Coinflip Mode */}
        <View>
          <Text style={styles.section_title}>Coinflip Mode:</Text>
          <View style={{height: 150}}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{gap: 10, alignItems: 'center'}}>
                {coinflipMode.length > 0 ? (
                  coinflipMode.map((item, index) => (
                    <View
                      key={index}
                      style={{
                        backgroundColor: 'rgba(41, 41, 41, 1)',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: 'row',
                        padding: 10,
                        width: 308,
                        height: 80,
                        borderRadius: 22,
                      }}>
                      <View>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: '400',
                            color: 'rgba(0, 0, 0, 1)',
                          }}>
                          {new Date(item.timestamp).toLocaleString()}
                        </Text>
                        <Text style={styles.history_text}>
                          Result:
                          {item.result}
                        </Text>
                      </View>
                      <TouchableOpacity
                        onPress={() => handleShare(item)}
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 10,
                          backgroundColor: 'rgba(25, 25, 25, 1)',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Image
                          source={require('../../assets/icons/shaired.png')}
                        />
                      </TouchableOpacity>
                    </View>
                  ))
                ) : (
                  <Text style={styles.empty_text}>No records</Text>
                )}
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
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
  history_container: {
    padding: 10,
  },
  section_title: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
    marginBottom: 10,
  },
  history_text: {
    fontWeight: '900',
    fontSize: 22,
    color: 'black',
  },
  empty_text: {
    fontSize: 16,
    color: 'gray',
  },
  input_color: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    width: 308,
    height: 80,
    borderRadius: 22,
  },
});
