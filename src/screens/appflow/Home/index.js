/* eslint-disable eqeqeq */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS} from '../../../themes';
import {Bell, OW1} from '../../../assets/svgicons';
import {MaleBack, MaleFront, Profile} from '../../../assets/images';
import {ButtonwithIcon, Point, TextButton} from '../../../components';
import {FrontBodyParts, routes, BackBodyParts} from '../../../constants';

const Home = ({navigation}) => {
  const [selectedImage, setSelectedImage] = useState('front');

  const [frontParts, setFrontParts] = useState(FrontBodyParts);
  const [backParts, setbackParts] = useState(BackBodyParts);

  const handleOpenedPointFront = key => {
    var tempObject = [...FrontBodyParts];
    tempObject.map(item => {
      if (item.notSelected.key === key) {
        if (item.isOpened) {
          item.isOpened = false;
        } else {
          item.isOpened = true;
        }
      } else {
        item.isOpened = false;
      }
    });
    setFrontParts(tempObject);
  };
  const handleOpenedPointBack = key => {
    var tempObject = [...BackBodyParts];
    tempObject.map(item => {
      if (item.notSelected.key === key) {
        if (item.isOpened) {
          item.isOpened = false;
        } else {
          item.isOpened = true;
        }
      } else {
        item.isOpened = false;
      }
    });
    setbackParts(tempObject);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}

      <View style={styles.headerContainer}>
        {/* NOTIFICATION_ICON */}
        <ButtonwithIcon
          icon={<Bell />}
          onPress={() => navigation.navigate(routes.NOTIFICATION)}
        />
        {/* LOGO */}
        <OW1 width={100} height={35} />
        {/* PROFILE_IMAGE_Button */}
        <ButtonwithIcon
          icon={<Image source={Profile} style={{width: 30, height: 30}} />}
          onPress={() => navigation.navigate(routes.PROFILE)}
        />
      </View>
      {/* DIVIDER */}
      <View style={styles.divider} />

      {/* FORONT_&_BAK */}
      <View style={styles.innerContainer}>
        {/* TITLE_&_SUB_TITLE */}
        <View>
          <Text style={styles.title}>Diagnostic Tool</Text>
          <Text style={styles.subTitle}>Select Your Pain Area</Text>
        </View>
        {/* FRONT_&_BACK_BUTTON_CONTAINER */}
        <View style={{flexDirection: 'row'}}>
          {/* FRONT_BUTTON */}
          <TextButton
            label={'Front'}
            containerStyle={{
              ...styles.frontButton,
              backgroundColor:
                selectedImage === 'front' ? COLORS.red : '#F7F7F7',
            }}
            labelStyle={{
              fontSize: 12,
              color: selectedImage === 'front' ? COLORS.white : COLORS.black,
            }}
            onPress={() => setSelectedImage('front')}
          />
          {/* BACK_BUTTON */}
          <TextButton
            label={'Back'}
            containerStyle={{
              ...styles.frontButton,
              backgroundColor:
                selectedImage === 'back' ? COLORS.red : '#F7F7F7',
            }}
            labelStyle={{
              fontSize: 12,
              color: selectedImage === 'back' ? COLORS.white : COLORS.black,
            }}
            onPress={() => setSelectedImage('back')}
          />
        </View>
      </View>
      {/* FRONT_&_BACK_IMAGE */}

      <View style={{height: 470}}>
        {selectedImage == 'front' ? (
          <View style={{zIndex: 3}}>
            {frontParts.map((item, index) => {
              return (
                <Point
                  handleOpenedPoint={handleOpenedPointFront}
                  key={`itemss-${index}`}
                  item={item}
                />
              );
            })}
          </View>
        ) : (
          <View style={{zIndex: 5}}>
            {backParts.map((item, index) => {
              return (
                <Point
                  handleOpenedPoint={handleOpenedPointBack}
                  key={`itemss-${index}`}
                  item={item}
                />
              );
            })}
          </View>
        )}

        <Image
          resizeMode="contain"
          source={selectedImage === 'front' ? MaleFront : MaleBack}
          style={styles.image}
        />
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        {/* FIND_A_DOCTOR_BUTTON */}
        <TextButton label={'Find a Doctor'} containerStyle={styles.button} />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 5,
  },
  divider: {
    backgroundColor: '#F2F2F2',
    height: 1,
    marginTop: 15,
  },
  innerContainer: {
    flexDirection: 'row',
    marginTop: 12,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 15,
    color: '#263238',
    fontFamily: FONTS.Nunito_Bold,
  },
  paragraph: {
    fontSize: 12,
    color: '#525252',
    fontFamily: FONTS.Nunito_Regular,
  },
  frontButton: {
    width: 56,
    height: 30,
    backgroundColor: COLORS.red,
    borderRadius: 4,
  },
  image: {
    width: '100%',
    height: 470,
    marginTop: 35,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: COLORS.red,
    height: 49,
    marginHorizontal: 20,
    marginBottom: 15,
    borderRadius: 9,
  },
});
