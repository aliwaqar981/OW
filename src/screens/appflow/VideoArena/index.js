/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../../themes';
import {
  BodyParts,
  AllPrograms,
  ShoulderExercise,
  HipExercise,
  KneeExercise,
  NeckExercise,
  BackExercise,
} from '../../../constants';
import {
  Body_Parts,
  Program,
  ProgramDetails,
  BlogCard,
  Video,
} from '../../../components';

const VideoArena = () => {
  const [isSelected, setIsSelected] = useState('program');
  const [selectedBodyPart, setSelectedBodyPart] = useState('all');
  // console.log('isSelected', isSelected);
  // console.log('program______------_____', selectedBodyPart);

  const Programs_List = () => {
    return (
      <View style={{marginTop: 24}}>
        {/* <FlatList
          data={AllPrograms}
          renderItem={({item}) => {
            return <Program item={item} containerStyle={{marginBottom: 16}} />;
          }}
        /> */}
        {AllPrograms.map(item => {
          return (
            <Program
              key={item.key}
              item={item}
              containerStyle={{marginBottom: 16}}
              onBadgePress={() => setSelectedBodyPart(item.key)}
            />
          );
        })}
      </View>
    );
  };
  const Shoulder = () => {
    return (
      <View style={{marginTop: 24}}>
        {/* <FlatList
          data={ShoulderExercise}
          renderItem={({item}) => {
            return (
              <ProgramDetails item={item} containerStyle={{marginBottom: 16}} />
            );
          }}
        /> */}
        {ShoulderExercise.map(item => {
          return (
            <ProgramDetails
              key={item.key}
              item={item}
              containerStyle={{marginBottom: 16}}
            />
          );
        })}
      </View>
    );
  };
  const Hip = () => {
    return (
      <View style={{marginTop: 24}}>
        {HipExercise.map(item => {
          return (
            <ProgramDetails
              key={item.key}
              item={item}
              containerStyle={{marginBottom: 16}}
            />
          );
        })}
      </View>
    );
  };
  const Knee = () => {
    return (
      <View style={{marginTop: 24}}>
        {KneeExercise.map(item => {
          return (
            <ProgramDetails
              key={item.key}
              item={item}
              containerStyle={{marginBottom: 16}}
            />
          );
        })}
      </View>
    );
  };
  const Neck = () => {
    return (
      <View style={{marginTop: 24}}>
        {NeckExercise.map(item => {
          return (
            <ProgramDetails
              key={item.key}
              item={item}
              containerStyle={{marginBottom: 16}}
            />
          );
        })}
      </View>
    );
  };
  const Back = () => {
    return (
      <View style={{marginTop: 24}}>
        {BackExercise.map(item => {
          return (
            <ProgramDetails
              key={item.key}
              item={item}
              containerStyle={{marginBottom: 16}}
            />
          );
        })}
      </View>
    );
  };
  const RenderProgram = () => {
    return (
      <View style={{marginTop: 24}}>
        <FlatList
          data={BodyParts}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({item}) => {
            return (
              <Body_Parts
                label={item.label}
                backgroundColor={
                  selectedBodyPart == item.key ? '#114EBE' : COLORS.white
                }
                labelColor={
                  selectedBodyPart == item.key ? COLORS.white : '#114EBE'
                }
                onPress={() => setSelectedBodyPart(item.key)}
              />
            );
          }}
        />
        {selectedBodyPart == 'all' ? (
          <Programs_List />
        ) : selectedBodyPart == 'shoulder' ? (
          <Shoulder />
        ) : selectedBodyPart == 'hip' ? (
          <Hip />
        ) : selectedBodyPart == 'knee' ? (
          <Knee />
        ) : selectedBodyPart == 'neck' ? (
          <Neck />
        ) : selectedBodyPart == 'back' ? (
          <Back />
        ) : null}
      </View>
    );
  };
  const RenderFreePrograam = () => {
    return (
      <View>
        <View style={styles.header}>
          {/* TITLE */}
          <Text style={styles.title1}>Blogs</Text>
          <TouchableOpacity>
            <Text style={{fontSize: 12}}>View all</Text>
          </TouchableOpacity>
        </View>
        {/* BLOG */}
        <BlogCard />
        {/* TITLE */}

        <View style={styles.header}>
          {/* TITLE */}
          <Text style={styles.title1}>Treatment Videos</Text>
          <TouchableOpacity>
            <Text style={{fontSize: 12}}>View all</Text>
          </TouchableOpacity>
        </View>
        {/* TREAMENT_VIDEO */}
        <Video />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={{flexDirection: 'row'}}>
        {/* PROGRAME */}
        <TouchableOpacity
          style={{alignItems: 'center', width: '33%'}}
          onPress={() => setIsSelected('program')}>
          <Text style={styles.title}>Programs</Text>
          {isSelected === 'program' ? <View style={styles.lineStyles} /> : null}
        </TouchableOpacity>
        {/* FREE */}
        <TouchableOpacity
          style={{alignItems: 'center', width: '33%'}}
          onPress={() => setIsSelected('free')}>
          <Text style={styles.title}>Free</Text>
          {isSelected === 'free' ? <View style={styles.lineStyles} /> : null}
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {isSelected === 'program' ? (
            <RenderProgram />
          ) : (
            <RenderFreePrograam />
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default VideoArena;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: 8,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.black,
  },
  lineStyles: {
    width: '100%',
    height: 4,
    backgroundColor: '#114EBE',
    marginTop: 9,
  },
  title1: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.black,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 25,
  },
});
