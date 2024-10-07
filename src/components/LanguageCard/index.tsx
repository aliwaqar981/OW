import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {FONTS} from '../../themes';
import {ReactNode} from 'react';

// Define the props interface for LanguageCard
interface LanguageCardProps {
  flag: ReactNode;
  icon: ReactNode;
  onPress?: (val: string) => void;
}

const LanguageCard: React.FC<LanguageCardProps> = ({flag, icon, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {flag}
      <Text style={styles.language}>LanguageCard</Text>
      {icon}
    </TouchableOpacity>
  );
};

export default LanguageCard;

const styles = StyleSheet.create({
  container: {
    height: 54,
    backgroundColor: '#FAFAFA',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  language: {
    fontSize: 14,
    color: '#292D32',
    marginLeft: 11,
    flex: 1,
    fontFamily: FONTS.Nunito_Regular,
  },
});
