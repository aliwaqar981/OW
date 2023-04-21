/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useContext} from 'react';
import {COLORS} from '../../../themes';
import {ProfileImage} from '../../../assets/images';
import {
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
} from '../../../assets/svgicons';
import {routes, SocialMediaButton} from '../../../constants';
import {AuthContext} from '../../../../App';
import Modal from 'react-native-modal';
const Profile = ({navigation}) => {
  const [isShareModalVisible, setShareModalVisible] = React.useState(false);
  const [isLogoutModalVisible, setLogoutModalVisible] = React.useState(false);
  const {setUserId} = useContext(AuthContext);

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
            ItemSeparatorComponent={<View style={{height: 38}} />}
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
                  <Text style={{marginTop: 13, textAlign: 'center'}}>
                    {item.label}
                  </Text>
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
      {/* HEADER */}
      <View style={{flex: 0.1, backgroundColor: COLORS.red}} />

      <View style={styles.innerContainer}>
        {/* PROFILE_IMAGE */}
        <Image source={ProfileImage} style={styles.profileContainer} />
        {/* NAME */}
        <TextButtonwithIcon
          label={'Jhon Doe'}
          rightIcon={<CrowCircle1 />}
          labelStyle={{fontSize: 16, marginRight: 7}}
          containerStyle={{marginTop: 64, alignSelf: 'center'}}
          disabled
        />
        {/* PROFILE_ACTONS_LIST */}
        <ScrollView>
          <View style={{marginTop: 27, marginHorizontal: 20}}>
            <ProfileAction
              LeftIcon={<CrownCircle />}
              RightIcon={<ArrowRight fill={COLORS.white} />}
              label="Manage Subscription"
              iconBackgroundColor={COLORS.red}
              containerStyle={{height: 60, backgroundColor: COLORS.red}}
            />
            {/* MY_PROGRAM */}
            <ProfileAction
              LeftIcon={<Book />}
              RightIcon={<ArrowRight fill={COLORS.black} />}
              label="My Programs"
              iconBackgroundColor={COLORS.red}
              containerStyle={{marginTop: 16}}
            />
            {/* CALENDAR */}
            <ProfileAction
              LeftIcon={<Calendar1 />}
              RightIcon={<ArrowRight fill={COLORS.black} />}
              label="Calendar"
              containerStyle={{marginTop: 7}}
              iconBackgroundColor={COLORS.red}
            />
            {/*TITLE */}
            <Text style={styles.title}>Support</Text>
            <ProfileAction
              LeftIcon={<About />}
              label="About Us"
              onPress={() => navigation.navigate(routes.ABOUTUS)}
            />
            <ProfileAction
              LeftIcon={<About />}
              label="Community"
              containerStyle={{marginTop: 7}}
            />
            <ProfileAction
              LeftIcon={<Support />}
              label="Contact Support"
              containerStyle={{marginTop: 7}}
            />
            <ProfileAction
              LeftIcon={<Privacy />}
              label="Privacy Policy"
              containerStyle={{marginTop: 7}}
              onPress={() => navigation.navigate(routes.PRIVACYPOLICY)}
            />
            <ProfileAction
              LeftIcon={<Privacy />}
              label="Terms & Conditions"
              containerStyle={{marginTop: 7}}
              onPress={() => navigation.navigate(routes.TERMSANDCONDITION)}
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
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#292D32',
    marginTop: 20,
    marginBottom: 6,
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
    fontWeight: '700',
    color: COLORS.black,
  },
  paragraph: {
    fontSize: 16,
    color: COLORS.black,
    marginTop: 4,
  },
  logoutButton: {
    backgroundColor: COLORS.red,
    marginTop: 36,
    height: 42,
    borderRadius: 10,
  },
});
