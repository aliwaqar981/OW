import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
  TextStyle,
} from 'react-native';

interface PointObject {
  top: number;
  right: number;
  marginRight?: number;
  label?: string;
  key: string;
  line: React.ComponentType;
  cicle: React.ComponentType;
  cicle1?: React.ComponentType;
}

interface Item {
  isOpened: boolean;
  selected: PointObject;
  notSelected: PointObject;
}

interface LeftPointProps {
  item: Item;
  handleOpenedPoint: (key: string) => void;
}

const LeftPoint: React.FC<LeftPointProps> = ({item, handleOpenedPoint}) => {
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
              backgroundColor: '#114EBE',
            },
          ]}>
          <Text style={{color: 'white'}}>{slectedObject.label}</Text>
        </View>
        <View
          style={{flexDirection: 'row', zIndex: 4}}
          hitSlop={{left: 10, right: 10, top: 10, bottom: 10}}>
          <View
            style={{
              marginBottom: 12,
              alignItems: 'center',
              width: 50,
              height: 40,
            }}>
            <slectedObject.line />
          </View>
          <TouchableOpacity
            onPress={() => handleOpenedPoint(slectedObject.key)}
            style={{alignSelf: 'flex-end'}}>
            <slectedObject.cicle1 />
          </TouchableOpacity>
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
      <TouchableOpacity onPress={() => handleOpenedPoint(slectedObject.key)}>
        <slectedObject.cicle />
      </TouchableOpacity>
    </View>
  );
};

export default LeftPoint;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    alignSelf: 'baseline',
    position: 'absolute',
    zIndex: 2,
  },
  info: {
    height: 30,
    backgroundColor: '#114EBE',
    marginRight: -30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,
    borderRadius: 40 / 2,
    alignSelf: 'flex-start',
  },
});
