/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../themes';

const Point = ({item, handleOpenedPoint, front}) => {
  // const [showComponent, setShowComponent] = React.useState(null);

  console.log('---------- item:');

  let slectedObject = item.isOpened ? item.selected : item.notSelected;

  if (item.isOpened) {
    return (
      <View
        style={[
          styles.container,
          {top: slectedObject.top, right: slectedObject.right},
        ]}>
        <View
          style={[
            styles.info,
            {
              marginRight: slectedObject.marginRight,
              backgroundColor: front ? '#114EBE' : COLORS.red,
            },
          ]}>
          <Text style={styles.label}>{slectedObject.label}</Text>
          {slectedObject.discription && (
            <Text style={styles.discription}>{slectedObject.discription}</Text>
          )}
        </View>
        <View
          style={{
            flexDirection: item.isOnLeftSide ? 'row-reverse' : 'row',
            alignItems: 'flex-end',
            zIndex: 4,
          }}>
          <TouchableOpacity
            onPress={
              () => handleOpenedPoint(slectedObject.key)
              // setShowComponent(!showComponent)
            }
            hitSlop={{left: 10, right: 10, top: 10, bottom: 10}}>
            <slectedObject.cicle1 />
          </TouchableOpacity>
          <View style={{marginBottom: 12, width: front ? 50 : 70, height: 40}}>
            <slectedObject.line />
          </View>
        </View>
      </View>
    );
  }
  return (
    <View
      style={[
        styles.container,
        {top: slectedObject.top, right: slectedObject.right, zIndex: 4},
      ]}>
      <TouchableOpacity
        onPress={
          () => handleOpenedPoint(slectedObject.key)
          // setShowComponent(!showComponent)
        }>
        <slectedObject.cicle />
      </TouchableOpacity>
    </View>
  );
};

export default Point;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    alignSelf: 'baseline',
    position: 'absolute',
    zIndex: 2,
  },
  info: {
    backgroundColor: '#114EBE',
    marginRight: -30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,
    borderRadius: 50,
    paddingVertical: 6,
  },
  label: {
    fontSize: 15,
    color: COLORS.white,
    fontFamily: FONTS.Nunito_Bold,
  },
  discription: {
    fontSize: 12,
    color: COLORS.white,
    fontFamily: FONTS.Nunito_Light,
  },
});
