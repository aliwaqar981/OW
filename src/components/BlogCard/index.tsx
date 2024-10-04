import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Blog} from '../../assets/images';
import {COLORS, FONTS} from '../../themes';

interface BlogCardProps {
  onPress: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({onPress}) => {
  return (
    <TouchableOpacity style={[styles.container]} onPress={onPress}>
      <Image
        source={Blog}
        style={{width: '100%', height: 140, borderRadius: 10}}
      />
      <Text style={styles.title}>
        Lorem ipsum dolor sit amet consectetur...
      </Text>
      <Text style={styles.time}>Lorem ipsum dolor sit amet consectetur...</Text>
    </TouchableOpacity>
  );
};

export default BlogCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F7F7',
    marginTop: 16,
    borderRadius: 10,
    paddingBottom: 16,
  },
  title: {
    fontSize: 14,
    color: COLORS.black,
    marginTop: 11,
    paddingHorizontal: 14,
    fontFamily: FONTS.Nunito_Bold,
  },
  time: {
    fontSize: 10,
    color: COLORS.black,
    marginTop: 5,
    paddingHorizontal: 14,
  },
});
