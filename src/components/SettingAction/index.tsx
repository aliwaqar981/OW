import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../themes';
import ToggleSwitch from 'toggle-switch-react-native';

interface SettingActionProps {
  containerStyle?: ViewStyle;
  icon?: React.ReactNode;
  label: string;
  showSwitch?: boolean;
  onPress?: () => void;
}

const SettingAction: React.FC<SettingActionProps> = ({
  containerStyle,
  icon,
  label,
  showSwitch,
  onPress,
}) => {
  const [toggleSwitch, setToggleSwitch] = React.useState(false);

  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      {icon}
      <Text
        style={{
          fontSize: 14,
          color: COLORS.black,
          marginLeft: 14,
          flex: 1,
          fontFamily: FONTS.Nunito_SemiBold,
        }}>
        {label}
      </Text>
      {showSwitch && (
        <ToggleSwitch
          isOn={toggleSwitch}
          onColor={'#00DD6E'}
          offColor={'#00DD6E'}
          size="small"
          onToggle={isOn => setToggleSwitch(isOn)}
          trackOffStyle={{width: 44, height: 23}}
          trackOnStyle={{width: 44, height: 23}}
          thumbOffStyle={styles.thumbOffStyle}
          thumbOnStyle={styles.thumbOnStyle}
          animationSpeed={200}
        />
      )}
    </TouchableOpacity>
  );
};

export default SettingAction;

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#F9F9F9',
    borderRadius: 6,
    alignItems: 'center',
    paddingHorizontal: 14,
    flexDirection: 'row',
    marginBottom: 7,
  },
  thumbOffStyle: {
    width: 21,
    height: 21,
    borderRadius: 21 / 2,
    marginLeft: 2,
  },
  thumbOnStyle: {
    width: 21,
    height: 21,
    borderRadius: 21 / 2,
    marginRight: 3,
  },
});
