/* eslint-disable react-native/no-inline-styles */
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../../themes';
import {FlatList} from 'react-native';
import {AllContacts, routes} from '../../../constants';
import {ChatCard} from '../../../components';

const Chats = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Chat</Text>
      {/* CONTACK_LIST */}
      <FlatList
        data={AllContacts}
        contentContainerStyle={{marginTop: 36}}
        renderItem={({item}) => {
          return (
            <ChatCard
              item={item}
              onPress={() => navigation.navigate(routes.CHATDETAILS)}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Chats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: COLORS.white,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.black,
    paddingLeft: 17,
  },
});
