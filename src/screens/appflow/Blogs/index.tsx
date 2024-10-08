import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../../themes';
import {Blog} from '../../../assets/images';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../../navigation/HomeStack';
type Props = NativeStackScreenProps<HomeStackParamList, 'Blogs'>;

const Blogs: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      {/* TITLE */}
      <Text style={styles.title}>
        Lorem ipsum dolor sit amet consectetur...
      </Text>
      {/* PARAGRAPH */}
      <Text style={styles.paragraph}>
        Lorem ipsum dolor sit amet consectetur. Etiam faucibus vestibulum tortor
        nunc donec ipsum aliquam rhoncus. Nibh in neque arcu non elit proin.
        Curabitur ac turpis ipsum egestas est odio erat. Scelerisque nisl sem
        nisi quam semper aliquam magna augue. Curabitur senectus cras et egestas
        enim habitasse accumsan. Sit scelerisque turpis pharetra nibh. Cras quis
        quam elementum augue. Dictum tellus velit lacus dictum feugiat felis at
        risus. Amet neque amet ultricies nulla.
      </Text>
      {/* IMAGE */}
      <Image source={Blog} style={styles.imageContainer} />
      {/* PARAGRAPH */}
      <Text style={[styles.paragraph, {paddingTop: 24}]}>
        Lorem ipsum dolor sit amet consectetur. Etiam faucibus vestibulum tortor
        nunc donec ipsum aliquam rhoncus. Nibh in neque arcu non elit proin.
        Curabitur ac turpis ipsum egestas est odio erat. Scelerisque nisl sem
        nisi quam semper aliquam magna augue. Curabitur senectus cras et egestas
        enim habitasse accumsan. Sit scelerisque turpis pharetra nibh. Cras quis
        quam elementum augue. Dictum tellus velit lacus dictum feugiat felis at
        risus. Amet neque amet ultricies nulla. nisi quam semper aliquam magna
        augue. Curabitur senectus cras et egestas enim habitasse accumsan. Sit
        scelerisque turpis pharetra nibh. Cras quis quam elementum augue. Dictum
        tellus velit lacus dictum feugiat felis at risus. Amet neque amet
        ultricies nulla.
      </Text>
    </View>
  );
};

export default Blogs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  paragraph: {
    fontSize: 14,
    color: '#989898',
    fontFamily: FONTS.Nunito_Regular,
  },
  imageContainer: {
    width: '100%',
    height: 130,
    marginTop: 15,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    color: '#2C2C2C',
    fontFamily: FONTS.Nunito_SemiBold,
    paddingBottom: 7,
  },
});
