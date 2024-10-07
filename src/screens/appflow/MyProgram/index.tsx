import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../../themes';
import {AllPrograms} from '../../../constants';
import {Program} from '../../../components';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../../navigation/HomeStack';
type Props = NativeStackScreenProps<HomeStackParamList, 'MyProgram'>;

const MyProgram: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* TITLE */}
      <Text style={styles.title}>Continue Watching</Text>
      {/* ALL_PROGRAM_LISTS */}
      <View style={{marginTop: 18}}>
        {AllPrograms.map(item => {
          return (
            <Program
              key={item.key}
              item={item}
              containerStyle={{marginBottom: 16}}
              showButton={false}
              showLoading={true}
              onPress={() => navigation.navigate('ProgramDetails')}
              onBadgePress={() => {}}
            />
          );
        })}
      </View>
    </View>
  );
};

export default MyProgram;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 16,
    color: COLORS.black,
    marginTop: 33,
    fontFamily: FONTS.Nunito_Bold,
  },
});
