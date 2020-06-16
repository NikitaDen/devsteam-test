import React, {useState} from 'react';
import {View, Image, ActivityIndicator, StyleSheet} from 'react-native';

const Photo = ({route}) => {
  const [isLoading, setIsLoading] = useState(true);
  const {uri} = route.params;

  const endLoading = () => {
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator size="large" color="#0000ff" style={{paddingTop: 15}}/>}

      <Image onLoadEnd={endLoading} source={{uri}} style={styles.img}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default Photo;
