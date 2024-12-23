import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS} from './helpers/colors';
import MaxiHomeScreen from './pages/MaxiHomeScreen';
import MaxiCartScreen from './pages/MaxiCartScreen';
import MaxiCartSuccessScreen from './pages/MaxiCartSuccessScreen';
import MaxiReservationScreen from './pages/MaxiReservationScreen';
import MaxiReservationSuccessScreen from './pages/MaxiReserveSuccessScreen';
import MaxiContactsScreen from './pages/MaxiContactsScreen';
import MaxiEventsScreen from './pages/MaxiEventsScreen';
import MaxiEventDetailScreen from './pages/MaxiEventDetailScreen';
import MaxiTranslationsScreen from './pages/MaxiTranslationsScreen';
import CloseIcon from './assets/close_icon.png';
import CartIcon from './assets/cart_icon.png';
import Logo from './assets/logo.png';
import BackgroundImage from './assets/drawer_background.png';

const {width, height} = Dimensions.get('window');
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width,
          height,
          backgroundColor: COLORS.radial,
        },
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      {drawerScreens.map(({name, component}) => (
        <Drawer.Screen key={name} name={name} component={component} />
      ))}
    </Drawer.Navigator>
  );
}

function CustomDrawerContent(props) {
  const navigation = useNavigation();

  const drawerItems = [
    {
      label: 'МАГАЗИН',
      screen: 'MaxiHomeScreen',
      image: require('./assets/shop_icon.png'),
    },
    {
      label: 'ТРАНСЛЯЦИИ',
      screen: 'MaxiTranslationsScreen',
      image: require('./assets/translations_icon.png'),
    },
    {
      label: 'КОНТАКТЫ',
      screen: 'MaxiContactsScreen',
      image: require('./assets/contacts_icon.png'),
    },
    {
      label: 'РЕЗЕРВ СТОЛИКА',
      screen: 'MaxiReservationScreen',
      image: require('./assets/book_icon.png'),
    },
    {
      label: 'СОБЫТИЯ',
      screen: 'MaxiEventsScreen',
      image: require('./assets/translations_icon.png'),
    },
  ];

  const navigateToScreen = screen => {
    navigation.navigate('DrawerNavigator', {screen});
  };

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <View style={styles.closeIconContainer}>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Image source={CloseIcon} style={styles.closeIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
      </View>

      <View style={styles.mainContainer}>
        {drawerItems.map(({label, screen, image}) => (
          <TouchableOpacity
            key={screen}
            onPress={() => navigateToScreen(screen)}
            style={styles.drawerItem}>
            <Image source={image} style={styles.image} />
            <Text style={styles.itemText}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity onPress={() => navigateToScreen('MaxiCartScreen')}>
        <Image source={CartIcon} style={styles.cartIcon} />
      </TouchableOpacity>
    </ImageBackground>
  );
}

const drawerScreens = [
  {name: 'MaxiHomeScreen', component: MaxiHomeScreen},
  {name: 'MaxiCartScreen', component: MaxiCartScreen},
  {name: 'MaxiCartSuccessScreen', component: MaxiCartSuccessScreen},
  {name: 'MaxiReservationScreen', component: MaxiReservationScreen},
  {
    name: 'MaxiReservationSuccessScreen',
    component: MaxiReservationSuccessScreen,
  },
  {name: 'MaxiContactsScreen', component: MaxiContactsScreen},
  {name: 'MaxiEventsScreen', component: MaxiEventsScreen},
  {name: 'MaxiEventDetailScreen', component: MaxiEventDetailScreen},
  {name: 'MaxiTranslationsScreen', component: MaxiTranslationsScreen},
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 60,
    height: height,
    width: width,
  },
  closeIconContainer: {
    position: 'absolute',
    left: 20,
    bottom: 40,
  },
  closeIcon: {
    width: 25,
    height: 25,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
    marginTop: 40,
  },
  logo: {
    width: width * 0.8,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  mainContainer: {
    marginTop: 40,
    alignItems: 'center',
    width: width,
  },
  drawerItem: {
    width: '70%',
    marginTop: 15,
    paddingVertical: 15,
    borderColor: COLORS.white,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 16,
    fontFamily: FONTS.black,
    color: COLORS.white,
    paddingLeft: 20,
  },
  cartIcon: {
    width: 60,
    height: 70,
    alignSelf: 'center',
    objectFit: 'contain',
    position: 'absolute',
    top: 100,
  },
  image: {
    width: 30,
    height: 30,
    objectFit: 'contain',
  },
});
