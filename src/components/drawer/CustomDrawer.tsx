import React, { FC } from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { ImageBackground, Image, View, StyleSheet } from 'react-native';
import IMAGES from '../../constants/images';

export const CustomDrawer: FC<DrawerContentComponentProps> = props => {
  return (
    <DrawerContentScrollView {...props}>
      <ImageBackground source={IMAGES.bgPattern} style={styles.imageBackground}>
        <Image source={IMAGES.user} style={styles.userImg} />
      </ImageBackground>
      <View style={styles.drawerListWrapper}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  userImg: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
    position: 'absolute',
    left: '50%',
    bottom: -110 / 2,
    borderWidth: 4,
    borderColor: '#fff',
    transform: [{ translateX: -110 / 2 }],
  },
  drawerListWrapper: {
    marginTop: 65,
  },
  imageBackground: {
    height: 140,
  },
});
