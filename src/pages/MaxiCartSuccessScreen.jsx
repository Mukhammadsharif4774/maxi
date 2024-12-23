import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import QRCode from 'react-native-qrcode-svg';
import {useNavigation} from '@react-navigation/native';
import MaxiHeader from '../components/MaxiHeader';
import MaxiComponent from '../components/MaxiComponent';
import SuccessIcon from '../assets/success_icon.png';
export default function () {
  const navigation = useNavigation();

  const handleNavigateHome = () => {
    navigation.navigate('DrawerNavigator', {screen: 'MaxiHomeScreen'});
  };

  return (
    <View style={styles.container}>
      <MaxiHeader />

      <Image
        source={SuccessIcon}
        style={{
          width: width * 0.5,
          height: width * 0.5,
          alignSelf: 'center',
          objectFit: 'contain',
          marginTop: '15%',
        }}
      />

      <Text style={styles.text}>Спасибо за {'\n'} заказ!</Text>

      <View style={styles.qrContainer}>
        <QRCode
          value="https://www.zapolarye.ru/restaurants/restoran-standart/"
          size={Dimensions.get('window').width / 2.5}
          color={COLORS.black}
        />
      </View>

      <MaxiComponent
        text="На главную"
        style={styles.button}
        onPress={handleNavigateHome}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
    backgroundColor: COLORS.blue,
  },
  qrContainer: {
    alignItems: 'center',
    marginTop: '15%',
  },
  button: {
    position: 'absolute',
    bottom: 50,
  },
  successIcon: {
    marginTop: 20,
    width: width * 0.5,
    height: width * 0.5,
    objectFit: 'contain',
    alignSelf: 'center',
  },
  text: {
    color: COLORS.white,
    textAlign: 'center',
    fontFamily: FONTS.black,
    fontSize: 25,
    marginTop: '5%',
    paddingVertical: 15,
  },
  image: {
    width: width * 0.35,
    height: width * 0.35,
    alignSelf: 'center',
    objectFit: 'contain',
    marginTop: 20,
  },
});
