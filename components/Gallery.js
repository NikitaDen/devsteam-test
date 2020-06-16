import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {getPhotosThunkCreator, setCurrentPage} from '../redux/gallery-reducer';
import PhotoItem from './PhotoItem';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Gallery = (props) => {
  const [leftDisabled, setLeftDisabled] = useState(true);

  useEffect(() => {
    props.getPhotosThunkCreator(props.currentPage);
  }, []);

  useEffect(() => {
    if (props.currentPage <= 1) {
      setLeftDisabled(true);
    }
  }, [props.currentPage]);

  const loadPreviousPage = () => {
    if (props.currentPage > 1) {
      const page = props.currentPage - 1;
      props.getPhotosThunkCreator(page);
      setLeftDisabled(false);
    } else {
      setLeftDisabled(true);
    }
  };

  const loadNextPage = () => {
    props.getPhotosThunkCreator(props.currentPage + 1);
    setLeftDisabled(false);
  };

  return (
    <View style={styles.container}>
      {props.isLoading ?
        <ActivityIndicator size="large" color="#0000ff" style={{paddingTop: 15}}/>
        :
        <View>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={leftDisabled && {opacity: .5}} onPress={loadPreviousPage}>
              <Icon name="arrow-circle-o-left" size={30}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={loadNextPage}>
              <Icon name="arrow-circle-o-right" size={30}/>
            </TouchableOpacity>
          </View>

          <FlatList
            style={styles.container}
            data={props.photos}
            renderItem={({item}) => <PhotoItem item={item} navigation={props.navigation}/>}
            keyExtractor={item => item.id}
          />
        </View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20
  }
});

const mapStateToProps = (state) => ({
  photos: state.photos.photos,
  currentPage: state.photos.currentPage,
  isLoading: state.photos.isLoading,
});

export default connect(mapStateToProps, {getPhotosThunkCreator, setCurrentPage})(Gallery);
