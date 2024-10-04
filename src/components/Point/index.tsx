import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../themes';

interface SelectedObject {
  top: number;
  right: number;
  marginRight: number;
  label: string;
  discription?: string;
  cicle: React.ReactNode;
  cicle1: React.ReactNode;
  line: React.ReactNode;
  key: string;
}

interface PointProps {
  item: {
    isOpened: boolean;
    selected: SelectedObject;
    notSelected: SelectedObject;
    isOnLeftSide?: boolean;
  };
  handleOpenedPoint: (key: string) => void;
  front: boolean;
}

const Point: React.FC<PointProps> = ({item, handleOpenedPoint, front}) => {
  let selectedObject = item.isOpened ? item.selected : item.notSelected;

  if (item.isOpened) {
    return (
      <View
        style={[
          styles.container,
          {top: selectedObject.top, right: selectedObject.right},
        ]}>
        <View
          style={[
            styles.info,
            {
              marginRight: selectedObject.marginRight,
              backgroundColor: front ? '#114EBE' : COLORS.red,
            },
          ]}>
          <Text style={styles.label}>{selectedObject.label}</Text>
          {selectedObject.discription && (
            <Text style={styles.description}>{selectedObject.discription}</Text>
          )}
        </View>
        <View
          style={{
            flexDirection: item.isOnLeftSide ? 'row-reverse' : 'row',
            alignItems: 'flex-end',
            zIndex: 4,
          }}>
          <TouchableOpacity
            onPress={() => handleOpenedPoint(selectedObject.key)}
            hitSlop={{left: 10, right: 10, top: 10, bottom: 10}}>
            {selectedObject.cicle1}
          </TouchableOpacity>
          <View style={{marginBottom: 12, width: front ? 50 : 70, height: 40}}>
            {selectedObject.line}
          </View>
        </View>
      </View>
    );
  }

  return (
    <View
      style={[
        styles.container,
        {top: selectedObject.top, right: selectedObject.right, zIndex: 4},
      ]}>
      <TouchableOpacity onPress={() => handleOpenedPoint(selectedObject.key)}>
        {selectedObject.cicle}
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
  description: {
    fontSize: 12,
    color: COLORS.white,
    fontFamily: FONTS.Nunito_Light,
  },
});
