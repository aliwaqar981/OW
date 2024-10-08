import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../../themes';
import {Community, ProfileImage} from '../../../assets/images';
import {
  ButtonwithIcon,
  ProfileAction,
  TextButton,
  TextButtonwithIcon,
} from '../../../components';
import {
  ArrowRight,
  Calendar1,
  CrowCircle1,
  Book,
  CrownCircle,
  About,
  Privacy,
  Support,
  Share,
  Logout,
  Settings1,
} from '../../../assets/svgicons';
import {SocialMediaButton} from '../../../constants';
import Modal from 'react-native-modal';
import {useUser} from '../../../Hooks/UseContext';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../../navigation/HomeStack';
type Props = NativeStackScreenProps<HomeStackParamList, 'Profile'>;

const Profile: React.FC<Props> = ({navigation}) => {
  const [isShareModalVisible, setShareModalVisible] = React.useState(false);
  const [isLogoutModalVisible, setLogoutModalVisible] = React.useState(false);
  const {setUserId} = useUser();

  const toggleShareModal = () => {
    setShareModalVisible(!isShareModalVisible);
  };
  const toggleLogoutModal = () => {
    setLogoutModalVisible(!isLogoutModalVisible);
  };
  const renderShareModal = () => {
    return (
      <Modal
        isVisible={isShareModalVisible}
        onBackdropPress={() => toggleShareModal()}
        backdropOpacity={0.2}
        style={{margin: 0, position: 'absolute', bottom: 0, left: 0, right: 0}}>
        <View style={styles.modalContainer}>
          <FlatList
            data={SocialMediaButton}
            ItemSeparatorComponent={() => <View style={{height: 38}} />}
            columnWrapperStyle={{justifyContent: 'flex-start'}}
            numColumns={4}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={toggleShareModal}
                  style={{
                    alignItems: 'center',
                    marginRight: index === 3 ? 0 : 25,
                  }}>
                  {item.logo}
                  <Text style={styles.shareModalText}>{item.label}</Text>
                </TouchableOpacity>
              );
            }}
          />
          {/* DIVIVER */}
          <View
            style={{height: 1, backgroundColor: '#C8C8C8', marginTop: 26}}
          />
          {/* CANCEL */}
          <TextButton
            label={'Cancel'}
            labelStyle={{color: '#A7A7A7'}}
            containerStyle={{marginVertical: 20}}
            onPress={toggleShareModal}
          />
        </View>
      </Modal>
    );
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
            onPress={() => setUserId(null)}
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
      <StatusBar backgroundColor={COLORS.red} />
      {/* HEADER */}
      <View style={{flex: 0.1, backgroundColor: COLORS.red}} />

      <View style={styles.innerContainer}>
        {/* PROFILE_IMAGE */}
        <Image source={ProfileImage} style={styles.profileContainer} />
        {/* SETTINGS_BUTTON */}
        <ButtonwithIcon
          icon={<Settings1 fill={COLORS.black} />}
          containerStyle={styles.settingsIconStyles}
          onPress={() => navigation.navigate('Settings')}
        />
        {/* PROFILE_ACTONS_LIST */}
        <ScrollView>
          {/* NAME */}
          <TextButtonwithIcon
            label={'Jhon Doe'}
            rightIcon={<CrowCircle1 />}
            labelStyle={{
              fontSize: 16,
              marginRight: 7,
              fontFamily: FONTS.Nunito_SemiBold,
            }}
            containerStyle={{marginTop: 23, alignSelf: 'center'}}
            disabled
          />
          <View style={{marginTop: 27, marginHorizontal: 20}}>
            <ProfileAction
              LeftIcon={<CrownCircle />}
              RightIcon={<ArrowRight fill={COLORS.white} />}
              label="Manage Subscription"
              iconBackgroundColor={COLORS.red}
              containerStyle={{height: 60, backgroundColor: COLORS.red}}
              onPress={() => navigation.navigate('Subscription')}
            />
            {/* MY_PROGRAM */}
            <ProfileAction
              LeftIcon={<Book />}
              RightIcon={<ArrowRight fill={COLORS.black} />}
              label="My Programs"
              iconBackgroundColor={COLORS.red}
              containerStyle={{marginTop: 16}}
              onPress={() => navigation.navigate('MyProgram')}
            />
            {/* CALENDAR */}
            <ProfileAction
              LeftIcon={<Calendar1 />}
              RightIcon={<ArrowRight fill={COLORS.black} />}
              label="Calendar"
              containerStyle={{marginTop: 7}}
              iconBackgroundColor={COLORS.red}
              onPress={() => navigation.navigate('Agenda')}
            />
            {/*TITLE */}
            <Text style={styles.title}>Support</Text>
            <ProfileAction
              LeftIcon={<About />}
              label="About Us"
              onPress={() => navigation.navigate('AboutUs')}
            />
            <ProfileAction
              LeftIcon={
                <Image source={Community} style={{width: 12, height: 12}} />
              }
              label="Community"
              containerStyle={{marginTop: 7}}
              onPress={() => navigation.navigate('Community')}
            />
            <ProfileAction
              LeftIcon={<Support />}
              label="Contact Support"
              containerStyle={{marginTop: 7}}
              onPress={() => navigation.navigate('ContactSupport')}
            />
            <ProfileAction
              LeftIcon={<Privacy />}
              label="Privacy Policy"
              containerStyle={{marginTop: 7}}
              onPress={() => navigation.navigate('PrivacyPolicy')}
            />
            <ProfileAction
              LeftIcon={<Privacy />}
              label="Terms & Conditions"
              containerStyle={{marginTop: 7}}
              onPress={() => navigation.navigate('TermsAndConditions')}
            />
            {/*TITLE */}
            <Text style={styles.title}>Other</Text>

            <ProfileAction
              LeftIcon={<Share />}
              label="Share"
              containerStyle={{marginTop: 7}}
              onPress={toggleShareModal}
            />
            <ProfileAction
              LeftIcon={<Logout />}
              label="Sign Out"
              containerStyle={{marginTop: 7, marginBottom: 40}}
              onPress={toggleLogoutModal}
            />
          </View>
        </ScrollView>
        {renderShareModal()}
        {renderLogoutModal()}
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.red,
  },
  innerContainer: {
    flex: 0.9,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  profileContainer: {
    width: 97,
    height: 97,
    alignSelf: 'center',
    position: 'absolute',
    top: -47,
  },
  settingsIconStyles: {
    marginTop: 23,
    alignSelf: 'flex-end',
    marginRight: 28,
  },
  title: {
    fontSize: 16,
    color: '#292D32',
    marginTop: 20,
    marginBottom: 6,
    fontFamily: FONTS.Nunito_Bold,
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
  shareModalText: {
    marginTop: 13,
    textAlign: 'center',
    fontFamily: FONTS.Nunito_Regular,
  },
});
