/* eslint-disable react-native/no-inline-styles */
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  ButtonwithIcon,
  ProfileAction,
  TextButtonwithIcon,
} from '../../../components';
import {COLORS, FONTS} from '../../../themes';
import {
  Community,
  Contact,
  Dollar,
  Profile3,
  Term,
  About1,
} from '../../../assets/images';
import {
  Calendar1,
  Location1,
  NotoStar,
  Privacy,
  Settings1,
  User1,
} from '../../../assets/svgicons';
import {routes} from '../../../constants';
import {AuthContext} from '../../../../App';
const ProfessionalProfile = ({navigation}) => {
  const {setIsProfessional} = React.useContext(AuthContext);
  return (
    <View style={styles.container}>
      {/* PROFILE_SECTION */}
      <View style={styles.profileContainer}>
        <Image source={Profile3} style={styles.imageContainer} />
        <View style={styles.innerProfileContainer}>
          <View>
            {/* NAME */}
            <Text style={styles.name}>Dr. Walters</Text>
            {/* SPECILITY */}
            <Text style={styles.speciality}>Dr. Walters</Text>
            <TextButtonwithIcon
              leftIcon={<NotoStar width={16} height={16} />}
              label={'4.5'}
              labelStyle={{fontSize: 14, color: COLORS.white, marginLeft: 5}}
              disabled
              leftIconContainer={styles.ratingContainer}
              containerStyle={{paddingTop: 6}}
            />
          </View>
          <ButtonwithIcon
            icon={<Settings1 fill={COLORS.white} />}
            onPress={() => navigation.navigate(routes.SETTINGS)}
          />
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.profileAction}>
        <ProfileAction
          LeftIcon={
            <Image source={Community} style={{width: 12, height: 12}} />
          }
          label="Community"
          containerStyle={{marginTop: 7}}
          onPress={() => navigation.navigate(routes.COMMUNITY)}
          iconBackgroundColor={COLORS.red}
        />
        {/* CALENDAR */}
        <ProfileAction
          LeftIcon={<Calendar1 />}
          label="Calendar"
          containerStyle={{marginTop: 7}}
          iconBackgroundColor={COLORS.red}
          // onPress={() => navigation.navigate(routes.AGENDA)}
        />

        {/* MANGE_PROFILE */}
        <ProfileAction
          LeftIcon={<User1 />}
          label="Manage Profile"
          containerStyle={{marginTop: 7}}
          // onPress={() => navigation.navigate(routes.COMMUNITY)}
        />
        {/* LOCATION */}
        <ProfileAction
          LeftIcon={<Location1 />}
          label="Location"
          containerStyle={{marginTop: 7}}
          // onPress={() => navigation.navigate(routes.COMMUNITY)}
        />
        {/* COMMUNITY */}
        <ProfileAction
          LeftIcon={<Image source={Dollar} style={{width: 14, height: 14}} />}
          label="Accounts"
          containerStyle={{marginTop: 7}}
          onPress={() => setIsProfessional(null)}
        />
        {/* CONTACK_SUPPORTT */}
        <ProfileAction
          LeftIcon={<Image source={Contact} style={{width: 12, height: 12}} />}
          label="Contact Support"
          containerStyle={{marginTop: 7}}
          // onPress={() => navigation.navigate(routes.CONTACTSUPPORT)}
        />
        {/* PRIVACY_POLICY */}
        <ProfileAction
          LeftIcon={<Privacy />}
          label="Privacy Policy"
          containerStyle={{marginTop: 7}}
          onPress={() => navigation.navigate(routes.PRIVACYPOLICY)}
        />
        {/* TERM_AND_CONDITION */}
        <ProfileAction
          LeftIcon={<Image source={Term} style={{width: 12, height: 12}} />}
          label="Terms & Conditions"
          containerStyle={{marginTop: 7}}
          onPress={() => navigation.navigate(routes.TERMSANDCONDITION)}
        />
        {/* ABOUT_US */}
        <ProfileAction
          LeftIcon={<Image source={About1} style={{width: 12, height: 12}} />}
          label="About Us"
          onPress={() => navigation.navigate(routes.ABOUTUS)}
          containerStyle={{marginTop: 7}}
        />
      </ScrollView>
    </View>
  );
};

export default ProfessionalProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  profileContainer: {
    backgroundColor: COLORS.red,
    alignItems: 'center',
    paddingTop: 14,
    paddingBottom: 50,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 6,
    overflow: 'hidden',
    paddingLeft: 20,
  },
  innerProfileContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 16,
  },
  name: {
    fontSize: 16,
    color: COLORS.white,
    fontFamily: FONTS.Nunito_Bold,
  },
  speciality: {
    fontSize: 7,
    color: COLORS.white,
    fontFamily: FONTS.Nunito_Medium,
  },
  ratingContainer: {
    width: 20,
    height: 20,
    borderRadius: 5,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileAction: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
});
