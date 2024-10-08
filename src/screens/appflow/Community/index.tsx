import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS, FONTS} from '../../../themes';
import {CommunityCard} from '../../../components';
import {CommunityList} from '../../../constants';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../../navigation/HomeStack';
type Props = NativeStackScreenProps<HomeStackParamList, 'Community'>;

const Community: FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        {/* HEADER_TITLE */}
        <Text style={styles.headerTitle}>Welcome to OW community</Text>
        {/* HEADER_PARAGRAPH */}
        <Text style={styles.headerParagraph}>Lorem ipsum dor sit met ato</Text>
      </View>
      {/* TITLE */}
      <View style={{paddingHorizontal: 20, marginTop: 24}}>
        <Text style={styles.title}>Select Topic</Text>

        {/* COMMUNITY_LIST */}
        <FlatList
          data={CommunityList}
          contentContainerStyle={{}}
          renderItem={item => {
            return (
              <CommunityCard
                key={`item-${item.id}`}
                title={'Topic Name'}
                subTitle={'75 people are participating'}
                containerStyle={{marginTop: 14}}
                onPress={() => navigation.navigate('ChatDetails')}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default Community;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    backgroundColor: COLORS.red,
    height: 80,
    borderTopRightRadius: 80 / 2,
    borderBottomRightRadius: 80 / 2,
    marginTop: 15,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  headerTitle: {
    fontSize: 20,
    color: COLORS.white,
    fontFamily: FONTS.Nunito_ExtraBold,
  },
  headerParagraph: {
    fontSize: 12,
    color: COLORS.white,
    fontFamily: FONTS.Nunito_Regular,
  },
  title: {
    fontSize: 16,
    color: COLORS.black,
    fontFamily: FONTS.Nunito_Bold,
  },
});
