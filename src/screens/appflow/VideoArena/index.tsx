import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS} from '../../../themes';
import {
  BodyParts,
  AllPrograms,
  ShoulderExercise,
  HipExercise,
  KneeExercise,
  NeckExercise,
  BackExercise,
  routes,
} from '../../../constants';
import {
  Body_Parts,
  Program,
  ProgramDetail,
  BlogCard,
  Video,
} from '../../../components';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomStackParamList} from '../../../navigation/BottomTab';
type Props = NativeStackScreenProps<BottomStackParamList, 'VideoArena'>;

const VideoArena: React.FC<Props> = ({navigation}) => {
  const [isSelected, setIsSelected] = useState('program');
  const [selectedBodyPart, setSelectedBodyPart] = useState('all');

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
              showButton={true}
              showLoading={false}
              onPress={() => {}}
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
            <ProgramDetail
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
            <ProgramDetail
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
            <ProgramDetail
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
            <ProgramDetail
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
            <ProgramDetail
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
            <Text style={{fontSize: 12, fontFamily: FONTS.Nunito_Regular}}>
              View all
            </Text>
          </TouchableOpacity>
        </View>
        {/* BLOG */}
        <BlogCard onPress={() => navigation.navigate(routes.BLOGS)} />
        {/* TITLE */}

        <View style={styles.header}>
          {/* TITLE */}
          <Text style={styles.title1}>Treatment Videos</Text>
          <TouchableOpacity>
            <Text style={{fontSize: 12}}>View all</Text>
          </TouchableOpacity>
        </View>
        {/* TREAMENT_VIDEO */}
        <Video onPress={() => navigation.navigate(routes.VIDEOBLOGS)} />
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
    color: COLORS.black,
    fontFamily: FONTS.Nunito_Bold,
  },
  lineStyles: {
    width: '100%',
    height: 4,
    backgroundColor: '#114EBE',
    marginTop: 9,
  },
  title1: {
    fontSize: 16,
    color: COLORS.black,
    fontFamily: FONTS.Nunito_Bold,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 25,
  },
});
