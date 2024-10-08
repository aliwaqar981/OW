import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
  TextStyle,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../themes';
import TextButton from '../TextButton';

// Define the props interface for EmptyState
interface EmptyStateProps {
  title?: string;
  paragraph: string;
  image: ImageSourcePropType;
  labelStyle?: TextStyle;
  paragraphStyle?: TextStyle;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  paragraph,
  image,
  labelStyle,
  paragraphStyle,
}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={{width: '100%', height: 250}} />
      {title && <Text style={[styles.title, labelStyle]}>{title}</Text>}
      <Text style={[styles.paragraph, paragraphStyle]}>{paragraph}</Text>
      {title && (
        <TextButton
          label={'Browse therapists'}
          containerStyle={styles.broseButton}
        />
      )}
    </View>
  );
};

export default EmptyState;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    color: '#030F1C',
    textAlign: 'center',
    marginHorizontal: 30,
    fontFamily: FONTS.Nunito_ExtraBold,
  },
  paragraph: {
    fontSize: 12,
    color: COLORS.black,
    textAlign: 'center',
    marginTop: 8,
    fontFamily: FONTS.Nunito_Regular,
  },
  broseButton: {
    height: 50,
    backgroundColor: COLORS.red,
    borderRadius: 8,
    width: '100%',
    marginTop: 60,
  },
});
