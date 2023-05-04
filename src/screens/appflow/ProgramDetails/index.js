/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../../themes';
import {ProgramDetail, Tabs} from '../../../components';
import {ShoulderExercise} from '../../../constants/AllProgramAndExercise';

const ProgramDetails = () => {
  const [selectedTab, setSelectedTab] = useState('week1');
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.headerContainer}>
        {/* TABS */}
        <Tabs
          label={'Week 1'}
          ActiveTabColor={selectedTab == 'week1' ? COLORS.red : '#515151'}
          labelColor={selectedTab == 'week1' ? COLORS.red : '#515151'}
          onPress={() => setSelectedTab('week1')}
        />
        <Tabs
          label={'Week 2'}
          ActiveTabColor={selectedTab == 'week2' ? COLORS.red : '#515151'}
          labelColor={selectedTab == 'week2' ? COLORS.red : '#515151'}
          onPress={() => setSelectedTab('week2')}
        />
        <Tabs
          label={'Week 3'}
          ActiveTabColor={selectedTab == 'week3' ? COLORS.red : '#515151'}
          labelColor={selectedTab == 'week3' ? COLORS.red : '#515151'}
          onPress={() => setSelectedTab('week3')}
        />
      </View>
      <View style={styles.innerContainer}>
        {/* PARAGRAPH */}
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur. Etiam faucibus vestibulum
          tortor nunc donec ipsum aliquam rhoncus. Nibh in neque arcu non elit
          proin. Curabitur ac turpis ipsum egestas est odio erat.
        </Text>
        {/* TITLE */}
        <Text style={styles.title}>12 Exercises</Text>

        <FlatList
          data={ShoulderExercise}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingVertical: 18}}
          renderItem={({item}) => {
            return (
              <ProgramDetail
                key={item.key}
                item={item}
                containerStyle={{marginBottom: 20}}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default ProgramDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
  },
  innerContainer: {
    flex: 1,
    marginHorizontal: 20,
    paddingTop: 18,
  },
  paragraph: {
    fontSize: 14,
    fontWeight: '400',
    color: '#989898',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.black,
    marginTop: 27,
  },
});
