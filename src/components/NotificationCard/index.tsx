import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../themes';

interface NotificationCardProps {
  label: string;
  time: string;
  containerStyle?: ViewStyle;
  color: string;
  icon: React.ReactNode;
}

const NotificationCard: React.FC<NotificationCardProps> = ({
  label,
  time,
  containerStyle,
  color,
  icon,
}) => {
  return (
    <TouchableOpacity style={{...styles.container, ...containerStyle}}>
      <View style={{...styles.iconContainer, backgroundColor: color}}>
        {icon}
      </View>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={styles.label}>{label}</Text>
      </View>
      <Text style={styles.timeText}>{time}</Text>
    </TouchableOpacity>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    marginHorizontal: 16,
    elevation: 2.5,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    shadowColor: COLORS.black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#FF6C7C66',
    borderRadius: 40 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 12,
    lineHeight: 14,
    color: '#252525',
    marginLeft: 10,
    fontFamily: FONTS.Nunito_SemiBold,
  },
  timeText: {
    fontSize: 8,
    lineHeight: 10,
    color: '#737373',
    marginLeft: 15,
    marginTop: 7,
    fontFamily: FONTS.Nunito_Light,
  },
});
