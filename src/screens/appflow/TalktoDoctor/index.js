/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../../themes';
import {ArrowRight1, Doc2} from '../../../assets/svgicons';
import {
  DoctorsCard,
  DoctorsCard1,
  TextButton,
  TextButtonwithIcon,
} from '../../../components';
import {Doctors, routes} from '../../../constants';
import {ScrollView} from 'react-native';
import {Logo} from '../../../assets/images';

const TalktoDoctor = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <TouchableOpacity style={styles.headerContainer}>
        <Doc2 />
        <Text style={styles.headerText}>View My Bookings</Text>
        <ArrowRight1 />
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* TITLE */}
        <Text style={styles.title}>Book a Session</Text>
        {/* DOCTORS */}
        <FlatList
          data={Doctors}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{marginTop: 16, paddingHorizontal: 20}}
          renderItem={({item}) => {
            return (
              <DoctorsCard
                item={item}
                containerStyle={{marginRight: 20}}
                onPress={() =>
                  navigation.navigate(routes.DOCTORDETAILS, {params: item})
                }
              />
            );
          }}
        />
        {/* DIAGNPSTIC_TOOLS */}
        <View style={styles.diagnosticToolCar}>
          {/* DIAGNOSTIC_HEADER */}
          <TextButtonwithIcon
            leftIcon={<Image source={Logo} style={{width: 22, height: 12}} />}
            label={'Diagnostic Tool'}
            labelStyle={{marginLeft: 5, color: COLORS.white}}
          />
          {/*  PARAGRAPH*/}
          <Text style={styles.paragraph}>
            Use Our Exclusive Diagnostic Tool To Find Pain Area & Search for a
            Doctor
          </Text>
          {/* EXPLORE_AND_LEARN_MORE_CONTAINER */}
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <TextButton
              label={'Explore'}
              containerStyle={styles.exploreButton}
            />
            <TextButton
              label={'Learn More'}
              containerStyle={styles.learnmoreButton}
            />
          </View>
        </View>
        {/* DOCTORS */}
        <View style={{paddingVertical: 30, marginHorizontal: 20}}>
          {Doctors.map((item, index) => {
            return (
              <DoctorsCard1
                key={`doctors-${index}`}
                item={item}
                containerStyle={{marginBottom: 13}}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default TalktoDoctor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  headerContainer: {
    backgroundColor: COLORS.white,
    height: 50,
    borderWidth: 1,
    borderColor: COLORS.red,
    marginTop: 25,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginHorizontal: 20,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.red,
    marginLeft: 8,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#263238',
    marginTop: 40,
    marginLeft: 20,
  },
  diagnosticToolCar: {
    backgroundColor: '#263238',
    marginTop: 50,
    paddingVertical: 14,
    paddingHorizontal: 22,
  },
  paragraph: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.white,
    marginTop: 11,
  },
  exploreButton: {
    height: 32,
    backgroundColor: COLORS.red,
    width: 80,
    borderRadius: 7,
  },
  learnmoreButton: {
    height: 32,
    backgroundColor: null,
    width: 80,
    borderRadius: 7,
    marginLeft: 15,
  },
});
