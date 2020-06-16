import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const PhotoItem = ({item, navigation}) => {
  const switchToPhoto = () => navigation.navigate('Photo', {uri: item.urls.regular});

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={switchToPhoto}>
        <Image style={styles.img} source={{uri: item.urls.small}}/>
      </TouchableOpacity>

      <View style={styles.info}>
        <Text style={styles.name}>{item.user.username}</Text>
        <Text>{item.description || item['alt_description']}</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 15,
    flexDirection: 'row',
    minHeight: 120,
  },
  info: {flex: 1, paddingLeft: 10},
  name: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
  img: {
    borderRadius: 120 / 2,
    height: 120,
    width: 120,
    marginRight: 15,
    alignSelf: 'center',
    backgroundColor: 'rgba(0, 0, 0, .25)',
  }
});

export default PhotoItem;
