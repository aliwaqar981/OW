import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../themes';

interface ChooseTimeProps {
  day: string;
  containerStyle?: ViewStyle;
  onToPress: () => void;
  onFromPress: () => void;
}

const ChooseTime: React.FC<ChooseTimeProps> = ({
  day,
  containerStyle,
  onToPress,
  onFromPress,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity style={{flex: 1, flexDirection: 'row'}}>
        <View style={styles.icon} />
        {/* DAY */}
        <Text style={styles.label}>{day}</Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {/* TO */}
        <TouchableOpacity style={styles.chooseTime} onPress={onToPress}>
          <Text>8:00 PM</Text>
        </TouchableOpacity>
        {/* FROM */}
        <Text style={{marginHorizontal: 10}}>-</Text>
        <TouchableOpacity style={styles.chooseTime} onPress={onFromPress}>
          <Text>8:00 PM</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChooseTime;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 15,
    height: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.black,
  },
  label: {
    fontSize: 13,
    color: '#2B2B2B',
    marginLeft: 9,
    textTransform: 'capitalize',
    flex: 1,
    fontFamily: FONTS.Nunito_Regular,
  },
  chooseTime: {
    width: 70,
    height: 35,
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ECECEC',
    borderRadius: 8,
    fontFamily: FONTS.Nunito_Regular,
  },
});
