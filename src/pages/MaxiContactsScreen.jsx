import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import {useNavigation} from '@react-navigation/native';
import MaxiHeader from '../components/MaxiHeader';
import MaxiComponent from '../components/MaxiComponent';

export default function () {
  const navigation = useNavigation();

  const handleNavigateHome = () => {
    navigation.navigate('DrawerNavigator', {screen: 'MaxiHomeScreen'});
  };

  const renderTextInput = placeholder => (
    <View style={styles.textInputContainer}>
      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        placeholderTextColor={COLORS.placeholder}
        editable={false}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <MaxiHeader />

      <Text style={styles.title}>Контакты</Text>

      <View style={styles.main}>
        {renderTextInput('Номер')}
        {renderTextInput('Адрес')}
        {renderTextInput('Данные')}
        {renderTextInput('Индекс')}
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
  flex: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    margin: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontFamily: FONTS.bold,
    color: COLORS.placeholder,
    width: '100%',
    paddingLeft: 30,
    marginVertical: 10,
  },
  main: {
    paddingBottom: 50,
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 30,
    width: width * 0.95,
    alignSelf: 'center',
    borderRadius: 25,
    height: height * 0.55,
  },
  textInputContainer: {
    width: '100%',
  },
  textInput: {
    height: 60,
    width: '100%',
    fontSize: 14,
    fontFamily: FONTS.bold,
    textAlign: 'left',
    color: COLORS.placeholder,
    marginTop: 10,
    backgroundColor: COLORS.blue,
    borderBottomWidth: 1,
    borderColor: COLORS.placeholder,
  },
  button: {
    position: 'absolute',
    bottom: 50,
  },
});
