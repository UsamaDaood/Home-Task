// Global loader for whole application //

import React from 'react';
import {StyleSheet, Image} from 'react-native';
//** Iterfaces */
import {ImageProps} from '../../Interfaces';

const TabImageItem = ({imageSource, imageStyle}: ImageProps) => {
  return <Image source={imageSource} style={[styles.imageStyle, imageStyle]} />;
};
const styles = StyleSheet.create({
  imageStyle: {
    width: 20,
    height: 20,
  },
});

export default TabImageItem;
