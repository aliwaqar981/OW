/* eslint-disable react-native/no-inline-styles */
import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../../themes';
import {CommunityCard} from '../../../components';
import {CommunityList, routes} from '../../../constants';

const Community = ({navigation}) => {
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
          contentContainerStyle={{marginBottom: 30}}
          renderItem={item => {
            return (
              <CommunityCard
                key={`item-${item.id}`}
                title={'Topic Name'}
                subTitle={'75 people are participating'}
                containerStyle={{marginTop: 14}}
                onPress={() => navigation.navigate(routes.CHATDETAILS)}
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
    fontWeight: '700',
    color: COLORS.white,
  },
  headerParagraph: {
    fontSize: 12,
    color: COLORS.white,
  },
  title: {
    fontSize: 16,
    color: COLORS.black,
    fontWeight: '700',
  },
});
