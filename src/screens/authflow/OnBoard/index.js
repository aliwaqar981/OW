/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {
  SafeAreaView,
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Platform,
} from 'react-native';
import React, {useRef} from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import {OnBoard1, OnBoard2, OnBoard3} from '../../../assets/images';
import {COLORS} from '../../../themes';
import {TextButton, TextButtonwithIcon} from '../../../components';
import {ForwardArrow} from '../../../assets/svgicons';
import {routes} from '../../../constants';

const OnBoard = ({navigation}) => {
  let sliderRef = useRef();
  const slides = [
    {
      key: 'one',
      image: OnBoard1,
    },
    {
      key: 'two',
      image: OnBoard2,
    },
    {
      key: 'three',
      image: OnBoard3,
    },
  ];
  const renderItem = ({item, index}) => {
    return (
      <ImageBackground
        style={{
          backgroundColor: COLORS.white,
          flex: 1,
          justifyContent: 'flex-end',
        }}
        source={item.image}></ImageBackground>
    );
  };
  return (
    <View style={{flex: 1}}>
      <AppIntroSlider
        data={slides}
        renderItem={renderItem}
        ref={ref => {
          sliderRef = ref;
        }}
        renderPagination={index => (
          <View style={styles.pageination}>
            {index === 0 && (
              <View style={styles.container}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.activeDot} />
                  <View style={[styles.inActiveDot, {marginLeft: 8}]} />
                  <View style={[styles.inActiveDot, {marginLeft: 8}]} />
                </View>

                <TextButtonwithIcon
                  label={'Next'}
                  rightIcon={<ForwardArrow />}
                  labelStyle={{color: COLORS.white, marginRight: 7}}
                  containerStyle={styles.nextButton}
                  onPress={() => sliderRef.goToSlide(1, true)}
                />
              </View>
            )}
            {index === 1 && (
              <View style={styles.container}>
                <View style={{flexDirection: 'row'}}>
                  <View style={[styles.inActiveDot, {marginRight: 8}]} />
                  <View style={[styles.activeDot, {marginRight: 8}]} />
                  <View style={[styles.inActiveDot, {marginRight: 8}]} />
                </View>
                <TextButtonwithIcon
                  label={'Next'}
                  rightIcon={<ForwardArrow />}
                  labelStyle={{color: COLORS.white, marginRight: 7}}
                  containerStyle={styles.nextButton}
                  onPress={() => sliderRef.goToSlide(2, true)}
                />
              </View>
            )}
            {index === 2 && (
              <View style={styles.container}>
                <View style={{flexDirection: 'row'}}>
                  <View style={[styles.inActiveDot, {marginRight: 8}]} />
                  <View style={[styles.inActiveDot, {marginRight: 8}]} />
                  <View style={[styles.activeDot, {marginRight: 8}]} />
                </View>
                <TextButton
                  label={'Get Started'}
                  containerStyle={styles.nextButton}
                  onPress={() => navigation.replace(routes.SPLASH)}
                />
              </View>
            )}
          </View>
        )}
      />
    </View>
  );
};

export default OnBoard;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 40,
    width: '86%',
    alignSelf: 'center',
  },
  nextButton: {
    height: 55,
    justifyContent: 'center',
    backgroundColor: COLORS.red,
    borderRadius: 13,
  },
  activeDot: {
    width: 16,
    height: 8,
    backgroundColor: COLORS.red,
    borderRadius: 8 / 2,
    marginBottom: 40,
  },
  inActiveDot: {
    width: 8,
    height: 8,
    backgroundColor: COLORS.white,
    borderRadius: 8 / 2,
    marginBottom: 40,
  },
});
