import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS, FONTS} from '../../../themes';
import {FlatList} from 'react-native';
import {AllContacts, routes} from '../../../constants';
import {ChatCard} from '../../../components';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../../navigation/HomeStack';
type Props = NativeStackScreenProps<HomeStackParamList, 'Chats'>;

const Chats: FC<Props> = ({navigation}) => {
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
              onPress={() => navigation.navigate('ChatDetails')}
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
    color: COLORS.black,
    paddingLeft: 17,
    fontFamily: FONTS.Nunito_Bold,
  },
});
