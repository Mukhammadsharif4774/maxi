import React, {useContext, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import {AppContext} from '../components/AppContext';
import MaxiHeader from '../components/MaxiHeader';
import MaxiMenuComponent from '../components/MaxiMenuComponent';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import {maxiProducts} from '../helpers/maxiProducts';

const categories = [
  {label: 'Напитки'},
  {label: 'Торты'},
  {label: 'Пирожные'},
  {label: 'Мини-торты'},
];

const OnwSportCategoryButton = ({label, active, onPress, image}) => (
  <TouchableOpacity
    onPress={onPress}
    style={active ? styles.categoryButtonActive : styles.categoryButton}>
    <Text style={active ? styles.categoryActive : styles.category}>
      {label}
    </Text>
  </TouchableOpacity>
);

export default function () {
  const [category, setCategory] = useState(0);
  const {shouldRefresh, toggleRefresh} = useContext(AppContext);

  const handleCategoryChange = index => {
    setCategory(index);
    toggleRefresh(!shouldRefresh);
  };

  return (
    <View style={styles.container}>
      <MaxiHeader />

      <View style={styles.categoryContainer}>
        {categories.map((item, index) => (
          <OnwSportCategoryButton
            key={index}
            label={item.label}
            active={category === index}
            onPress={() => handleCategoryChange(index)}
            image={item?.image}
          />
        ))}
      </View>

      <ScrollView style={styles.flex} contentContainerStyle={styles.main}>
        {maxiProducts[category].map((product, index) => (
          <MaxiMenuComponent key={index} item={product} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    flex: 1,
    backgroundColor: COLORS.blue,
  },
  categoryContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width,
    marginVertical: 15,
    paddingHorizontal: 40,
  },
  categoryButton: {
    width: '47%',
    marginTop: 5,
    padding: 8,
  },
  categoryButtonActive: {
    width: '47%',
    marginTop: 5,
    borderRadius: 8,
    borderColor: COLORS.main,
    borderWidth: 2,
    padding: 8,
    backgroundColor: COLORS.main,
  },
  category: {
    fontFamily: FONTS.regular,
    color: COLORS.white,
    fontSize: 14,
    textAlign: 'center',
    verticalAlign: 'middle',
  },
  categoryActive: {
    fontFamily: FONTS.bold,
    color: COLORS.white,
    fontSize: 14,
    textAlign: 'center',
    verticalAlign: 'middle',
  },
  main: {
    paddingBottom: 100,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});
