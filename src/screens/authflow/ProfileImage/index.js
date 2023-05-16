/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS} from '../../../themes';
import {BodyParts2, routes} from '../../../constants';
import {TextButton, TextInputCmp} from '../../../components';

const ProfileImage = ({navigation}) => {
  const [bodyParts, setBodyParts] = useState(BodyParts2);
  const selectedBodyParts = index => {
    if (bodyParts[index].isSelected == true) {
      bodyParts[index].isSelected = false;
      setBodyParts([...bodyParts]);
    } else {
      bodyParts[index].isSelected = true;
      setBodyParts([...bodyParts]);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {/* HEADING */}
        <Text style={styles.heading}>Complete My Profile</Text>
        {/* COUNTER */}
        <Text style={[styles.heading, {marginTop: 3}]}>1/7</Text>
        {/* TITLE */}
        <Text style={styles.title}>Work Experience</Text>
        {/* DISCRIPTION */}
        <Text style={styles.discrption}>
          It is always beneficial to know to gain more trust
        </Text>
      </View>
      {/* INPUT_FIELDS */}
      <View style={{marginHorizontal: 20, marginTop: 50}}>
        <TextInputCmp
          label={'Years of Exp.'}
          placeholder={'Write here'}
          placeholderTextColor={'#606060'}
        />
        <TextInputCmp
          label={'Average No. of patients dealt with'}
          placeholder={'Average No. of patients dealt with'}
          placeholderTextColor={'#606060'}
          containerStyle={{marginTop: 30}}
        />
      </View>
      <View style={styles.footer}>
        <View>
          {/* LABEL */}
          <Text style={styles.label}>
            Specialized in resolving pain for{' '}
            <Text style={{fontFamily: FONTS.Nunito_Regular, color: '#707070'}}>
              (optional)
            </Text>
          </Text>
          {/* BODY_PARTS */}
          <View style={styles.bodyContainer}>
            {bodyParts.map((item, index) => {
              return (
                <TouchableOpacity
                  key={`bodyParts-${index}`}
                  onPress={() => selectedBodyParts(index)}
                  style={[
                    styles.bodyPartsContainer,
                    {backgroundColor: item.isSelected ? 'blue' : '#F5F5F5'},
                  ]}>
                  <Text
                    style={[
                      styles.bodyLabel,
                      {color: item.isSelected ? 'white' : '#707070'},
                    ]}>
                    {item.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <TextButton
          label={'Next'}
          containerStyle={styles.nextButton}
          onPress={() => navigation.navigate(routes.UPDATESCHEDULE)}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProfileImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    marginTop: 5,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 16,
    color: COLORS.red,
    fontFamily: FONTS.Nunito_Bold,
  },
  title: {
    fontSize: 24,
    color: '#030F1C',
    marginTop: 22,
    fontFamily: FONTS.Nunito_Bold,
  },
  discrption: {
    fontSize: 14,
    color: '#606060',
    marginVertical: 3,
    fontFamily: FONTS.Nunito_Regular,
  },
  footer: {
    marginTop: 30,
    marginHorizontal: 20,
    justifyContent: 'space-between',
    flex: 1,
    paddingBottom: 45,
  },
  label: {
    fontSize: 13,
    color: COLORS.black,
    fontFamily: FONTS.Nunito_Bold,
  },
  textInputStyles: {
    height: 51,
    borderRadius: 5,
    backgroundColor: '#F9F9F9',
    marginTop: 9,
    paddingLeft: 14,
  },
  bodyPartsContainer: {
    backgroundColor: '#F5F5F5',
    height: 42,
    paddingHorizontal: 20,
    marginRight: 15,
    marginBottom: 15,
    borderRadius: 42 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyLabel: {
    fontSize: 12,
    color: '#707070',
  },
  bodyContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 15,
  },
  nextButton: {
    height: 55,
    borderRadius: 8,
    backgroundColor: COLORS.red,
  },
});
