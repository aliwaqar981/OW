/* eslint-disable react-native/no-inline-styles */
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  ButtonwithIcon,
  ProfileAction,
  TextButton,
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
  Logout,
} from '../../../assets/svgicons';
import {routes} from '../../../constants';
import Modal from 'react-native-modal';
import {useUser} from '../../../Hooks/UseContext';
const ProfessionalProfile = ({navigation}) => {
  const {setIsProfessional} = useUser();

  const [isLogoutModalVisible, setLogoutModalVisible] = React.useState(false);

  const toggleLogoutModal = () => {
    setLogoutModalVisible(!isLogoutModalVisible);
  };
  const renderLogoutModal = () => {
    return (
      <Modal
        isVisible={isLogoutModalVisible}
        onBackdropPress={() => toggleLogoutModal()}
        backdropOpacity={0.2}
        style={{margin: 0, position: 'absolute', bottom: 0, left: 0, right: 0}}>
        <View style={styles.logoutModalContainer}>
          {/* TITLE */}
          <Text style={styles.modalTitle}>Log Out?</Text>
          {/* PARAGRAPH */}
          <Text style={styles.paragraph}>Are you sure want to logout?</Text>
          {/* LOGOUT_BUTTON */}
          <TextButton
            label={'Yes! Log me out'}
            labelStyle={{color: COLORS.white}}
            containerStyle={styles.logoutButton}
            onPress={() => setIsProfessional(null)}
          />
          {/* CANCEL */}
          <TextButton
            label={'Cancel'}
            labelStyle={{color: '#A7A7A7'}}
            containerStyle={{marginVertical: 20}}
            onPress={toggleLogoutModal}
          />
        </View>
      </Modal>
    );
  };
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
          onPress={() => navigation.navigate(routes.AGENDA)}
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
        />
        {/* COMMUNITY */}
        <ProfileAction
          LeftIcon={<Image source={Dollar} style={{width: 14, height: 14}} />}
          label="Accounts"
          containerStyle={{marginTop: 7}}
          onPress={() => navigation.navigate(routes.EARNINGSDETAILS)}
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
        <ProfileAction
          LeftIcon={<Logout />}
          label="Sign Out"
          containerStyle={{marginTop: 7, marginBottom: 40}}
          onPress={toggleLogoutModal}
        />
        {renderLogoutModal()}
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
  modalContainer: {
    padding: 30,
    backgroundColor: COLORS.white,
  },
  logoutModalContainer: {
    paddingTop: 30,
    paddingHorizontal: 15,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  modalTitle: {
    fontSize: 18,
    color: COLORS.black,
    fontFamily: FONTS.Nunito_Bold,
  },
  paragraph: {
    fontSize: 16,
    color: COLORS.black,
    marginTop: 4,
    fontFamily: FONTS.Nunito_Regular,
  },
  logoutButton: {
    backgroundColor: COLORS.red,
    marginTop: 36,
    height: 42,
    borderRadius: 10,
  },
});
