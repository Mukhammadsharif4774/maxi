import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import MaxiHeader from '../components/MaxiHeader';
import {useNavigation} from '@react-navigation/native';
import Event_1 from '../assets/event_1.png';
import Event_2 from '../assets/event_2.png';
import Event_3 from '../assets/event_3.png';
import Event_4 from '../assets/event_4.png';
import Event_5 from '../assets/event_5.png';
import Event_6 from '../assets/event_6.png';
import BackgroundImage from '../assets/events_background.png';

const events = [
  {title: 'Эксклюзивный вечер', image: Event_1, time: '10.02 / 19:00'},
  {
    title: 'Путешествие вкусов',
    image: Event_2,
    time: '15.02 / 21:00',
  },
  {
    title: 'Кулинарный мастер-класс ',
    image: Event_3,
    time: '19.02 / 20:00',
  },
  {title: 'Кинематографический вкус', image: Event_4, time: '12.03 / 20:00'},
  {title: 'Вечер с Тайным Гостем', image: Event_5, time: '15.03 / 21:00'},
  {title: 'Лотерея', image: Event_6, time: '25.03 / 18:00'},
];

const EventButton = ({title, image, onPress, index, time}) => (
  <View style={styles.event}>
    <TouchableOpacity style={styles.button} onPress={() => onPress(image)}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.time}>{time}</Text>
    </TouchableOpacity>
  </View>
);

export default function () {
  const navigation = useNavigation();

  const handlePress = image => {
    navigation.navigate('DrawerNavigator', {
      screen: 'MaxiEventDetailScreen',
      params: {image},
    });
  };

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <MaxiHeader />

      <View style={styles.content}>
        {events.map((event, index) => (
          <EventButton
            key={index}
            index={index}
            title={event.title}
            image={event.image}
            onPress={handlePress}
            time={event.time}
          />
        ))}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
    backgroundColor: COLORS.white,
    justifyContent: 'space-between',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    width: width,
  },
  title: {
    fontSize: 14,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    textAlign: 'left',
    width: '60%',
  },
  time: {
    color: COLORS.white,
    fontSize: 14,
    fontFamily: FONTS.extraBold,
    textAlign: 'left',
    width: '35%',
    borderRadius: 12,
  },
  button: {
    paddingVertical: 10,
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  event: {
    width: '100%',
  },
});
