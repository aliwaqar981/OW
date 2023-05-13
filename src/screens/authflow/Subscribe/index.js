/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Dimensions,
  ImageBackground,
} from 'react-native';
import React, {useContext, useState} from 'react';
import Carousel from 'react-native-snap-carousel';

import {COLORS, FONTS} from '../../../themes';
import {Gold, Platinum} from '../../../assets/images';
import {TextButton, TextButtonwithIcon} from '../../../components';
import {CrownCircle, GlowingStar} from '../../../assets/svgicons';
import {routes} from '../../../constants';
import {AuthContext} from '../../../../App';

const Subscribe = ({navigation}) => {
  const {setUserId} = useContext(AuthContext);
  const [activeSlide, setActiveSlide] = useState(0);
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const {width: viewportWidth, height: viewportHeight} =
    Dimensions.get('window');

  const carouselItems = [
    {
      key: 'platinum',
      label: 'Access to complete Video Library',
      label1: 'Tailored Exercises',
      label2: 'Treatment Plans',
      label3: 'Real-time Consultation',
      label4: '& all free and Gold Included',
      backgroundImage: Platinum,
      category: 'Platinum',
      price: 20,
    },
    {
      key: 'Gold',
      label: 'tailored exercise program',
      label1: 'Message Board',
      label2: 'Selected Videos',
      label3: 'Real-time Consultation',
      label4: '& all free Included',
      backgroundImage: Gold,
      category: 'Gold',
      price: 15,
    },
  ];
  console.log('active index', activeSlide);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={{marginHorizontal: 0}}>
          {/* TITLE */}
          <Text style={styles.title}>Choose a Plan</Text>
          {/* PARAGRAPH */}
          <Text style={styles.paragraph1}>
            Select the offer the best suits your need
          </Text>
        </View>
        <Carousel
          layout={'stack'}
          // ref={ref => (carousel = ref)}
          data={carouselItems}
          sliderWidth={windowWidth}
          itemWidth={windowWidth}
          renderItem={({item, index}) => {
            return (
              <ImageBackground
                source={item.backgroundImage}
                style={{
                  width: viewportWidth - 30,
                  height: viewportHeight / 2.1,
                  paddingHorizontal: 15,
                  marginLeft: 20,
                }}
                imageStyle={{borderRadius: 10}}>
                {/* HEADER */}
                <View style={styles.headerContainer}>
                  {/* CROWN_CIRCLE */}
                  <View style={styles.crownCircle}>
                    <CrownCircle />
                  </View>
                  {/* CATEGORY */}
                  <View>
                    <Text style={styles.categoryText}>{item.category}</Text>
                    <Text style={styles.priceText}>
                      {item.price}
                      <Text
                        style={{fontSize: 10, fontFamily: FONTS.Nunito_Light}}>
                        {'  '}
                        /month
                      </Text>
                    </Text>
                  </View>
                </View>
                {/* KEY_POINT_LIST */}
                <View>
                  {/* LABEL_NO_1 */}
                  <TextButtonwithIcon
                    leftIcon={<GlowingStar />}
                    label={item.label}
                    labelStyle={styles.label}
                    disabled
                  />
                  {/* LABEL_NO_2 */}
                  <TextButtonwithIcon
                    leftIcon={<GlowingStar />}
                    label={item.label1}
                    labelStyle={styles.label}
                    containerStyle={{marginTop: 15}}
                    disabled
                  />
                  {/* LABEL_NO_3 */}
                  <TextButtonwithIcon
                    leftIcon={<GlowingStar />}
                    label={item.label2}
                    labelStyle={styles.label}
                    containerStyle={{marginTop: 15}}
                    disabled
                  />
                  {/* LABEL_NO_4 */}
                  {index === 0 && (
                    <TextButtonwithIcon
                      leftIcon={<GlowingStar />}
                      label={item.label3}
                      labelStyle={styles.label}
                      containerStyle={{marginTop: 15}}
                      disabled
                    />
                  )}
                </View>
                {/* GET_STARTED_BUTTON */}
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                  <TextButton
                    label={'Get Started'}
                    containerStyle={styles.getStartedButton}
                    onPress={() => navigation.navigate(routes.PAYMENTMETHOD)}
                  />
                </View>
              </ImageBackground>
            );
          }}
          onSnapToItem={index => setActiveSlide(index)}
        />
      </View>
      <View style={styles.innerContainer}>
        {/* DOTS */}
        <View style={{justifyContent: 'center', flexDirection: 'row'}}>
          <View
            style={[
              styles.dot,
              {
                backgroundColor: activeSlide === 0 ? COLORS.red : '#F3F3F3',
                marginRight: 8,
                width: activeSlide === 0 ? 16 : 8,
              },
            ]}
          />
          <View
            style={[
              styles.dot,
              {
                backgroundColor: activeSlide === 1 ? COLORS.red : '#F3F3F3',
                marginRight: 8,
                width: activeSlide === 1 ? 16 : 8,
              },
            ]}
          />
        </View>
        <View style={styles.footer}>
          {/* CONTINEUE_BUTTON */}
          <TextButton
            label={'Continue Free'}
            containerStyle={styles.continueButtonContainer}
            labelStyle={{color: COLORS.primary}}
            onPress={() => setUserId('uid')}
          />
          {/* PARAGRAPH */}
          <Text style={styles.paragraph}>
            Do you want more information on Subscription?
          </Text>
          {/* CONTACT_US */}
          <Text style={styles.contactusText}>Contact Us</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Subscribe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  crownCircle: {
    width: 45,
    height: 45,
    backgroundColor: COLORS.red,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9,
    marginRight: 11,
  },
  headerContainer: {
    paddingTop: 17,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  categoryText: {
    fontSize: 18,
    color: COLORS.white,
    fontWeight: '600',
  },
  priceText: {
    fontSize: 15,
    color: COLORS.white,
    fontFamily: FONTS.Nunito_SemiBold,
  },
  label: {
    fontSize: 14,
    color: COLORS.white,
    marginLeft: 13,
    fontFamily: FONTS.Nunito_Regular,
  },
  getStartedButton: {
    height: 45,
    backgroundColor: COLORS.primary,
    width: '100%',
    marginBottom: 15,
    borderRadius: 8,
  },
  innerContainer: {
    flex: 1,
    paddingTop: 21,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  dot: {
    width: 16,
    height: 8,
    borderRadius: 8 / 2,
  },
  continueButtonContainer: {
    height: 45,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 12,
  },
  paragraph: {
    textAlign: 'center',
    marginTop: 36,
    fontSize: 14,
    color: COLORS.black,
  },
  contactusText: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: '600',
  },
  title: {
    fontSize: 20,
    color: COLORS.black,
    marginHorizontal: 20,
    fontFamily: FONTS.Nunito_Bold,
  },
  paragraph1: {
    fontSize: 13,
    color: COLORS.black,
    marginBottom: 20,
    marginHorizontal: 20,
    fontFamily: FONTS.Nunito_Regular,
  },
});
