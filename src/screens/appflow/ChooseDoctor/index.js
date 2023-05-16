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
import {COLORS, FONTS} from '../../../themes';
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

const ChooseDoctor = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* TITLE */}
        <Text style={styles.title}>Best Fit</Text>
        {/*  */}

        {Doctors.map((item, index) => {
          return (
            <DoctorsCard1
              key={`doctors-${index}`}
              item={item}
              containerStyle={{marginBottom: 13, marginHorizontal: 2}}
              onPress={() =>
                navigation.navigate(routes.DOCTORDETAILS, {params: item})
              }
            />
          );
        })}
        <Text style={[styles.title, {paddingTop: 8, paddingBottom: 12}]}>
          Recommended
        </Text>

        {/* DOCTORS */}
        <View style={{paddingBottom: 30}}>
          <FlatList
            data={Doctors}
            horizontal
            showsHorizontalScrollIndicator={false}
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
        </View>
      </ScrollView>
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
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
    color: COLORS.red,
    marginLeft: 8,
    flex: 1,
    fontFamily: FONTS.Nunito_Bold,
  },
  title: {
    fontSize: 20,
    color: '#263238',
    paddingTop: 40,
    fontFamily: FONTS.Nunito_Bold,
    paddingBottom: 12,
  },
  diagnosticToolCar: {
    backgroundColor: '#263238',
    marginTop: 50,
    paddingVertical: 14,
    paddingHorizontal: 22,
  },
  paragraph: {
    fontSize: 13,
    color: COLORS.white,
    marginTop: 11,
    fontFamily: FONTS.Nunito_Bold,
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
