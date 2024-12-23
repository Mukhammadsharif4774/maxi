import React, {useContext, useEffect, useState, useCallback} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppContext} from './AppContext';
import {COLORS, FONTS} from '../helpers/colors';

export default function ({item}) {
  const {shouldRefresh, toggleRefresh} = useContext(AppContext);
  const [added, setAdded] = useState(false);

  const updateCart = useCallback(async () => {
    const cartList = await AsyncStorage.getItem('cartList');
    const cartArray = cartList ? JSON.parse(cartList) : [];
    const isProductInCart = cartArray.some(cart => cart.name === item.name);
    setAdded(isProductInCart);
  }, [item.name]);

  const handleCartUpdate = async action => {
    const cartList = await AsyncStorage.getItem('cartList');
    let cartArray = cartList ? JSON.parse(cartList) : [];

    if (action === 'add') {
      if (!cartArray.some(cart => cart.name === item.name)) {
        cartArray.push({...item, count: 1});
      }
    } else if (action === 'remove') {
      cartArray = cartArray.filter(cart => cart.name !== item.name);
    }

    await AsyncStorage.setItem('cartList', JSON.stringify(cartArray));
    toggleRefresh(prev => !prev);
  };

  const toggleCart = () => {
    added ? handleCartUpdate('remove') : handleCartUpdate('add');
  };

  useEffect(() => {
    updateCart();
  }, [updateCart, shouldRefresh]);

  return (
    <View style={styles.main}>
      <Image source={item?.image} style={styles.image} />

      <View
        style={{
          width: '48%',
          justifyContent: 'space-between',
          marginLeft: 10,
          height: 140,
          paddingVertical: 5,
        }}>
        <Text style={styles.title}>{item?.name}</Text>

        <Text style={styles.description}>{item?.description}</Text>

        <View style={styles.row}>
          <Text style={styles.price}>{item?.price} $</Text>

          <TouchableOpacity onPress={toggleCart}>
            <Text style={styles.button}>{added ? 'убрать' : 'добавить'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: '100%',
    alignSelf: 'center',
    height: 130,
    marginTop: 35,
    backgroundColor: COLORS.white,
    justifyContent: 'space-between',
    elevation: 10,
    borderRadius: 12,
    flexDirection: 'row',
  },
  image: {
    width: '48%',
    height: '100%',
    borderRadius: 12,
    alignSelf: 'center',
    marginLeft: -2,
  },
  title: {
    fontSize: 16,
    fontFamily: FONTS.bold,
    color: COLORS.blue,
    width: '100%',
  },
  description: {
    fontSize: 12,
    fontFamily: FONTS.light,
    color: COLORS.radial,
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  price: {
    fontSize: 20,
    fontFamily: FONTS.bold,
    textAlign: 'center',
    verticalAlign: 'middle',
    color: COLORS.main,
    borderRadius: 8,
  },
  button: {
    fontSize: 12,
    fontFamily: FONTS.medium,
    color: COLORS.white,
    backgroundColor: COLORS.blue,
    marginRight: 10,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
});
