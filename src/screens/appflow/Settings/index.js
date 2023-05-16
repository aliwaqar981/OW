/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {COLORS} from '../../../themes';
import {Bell1, DelProfile, User, User1} from '../../../assets/svgicons';
import {SettingAction} from '../../../components';
import {Language} from '../../../assets/images';
import {routes} from '../../../constants';
import {AuthContext} from '../../../../App';

const Settings = ({navigation}) => {
  const {userId} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      {/* SETTINGS_ACTTIONS_LISST */}
      {userId ? (
        <View>
          {/* EDIT_PROFILE */}
          <SettingAction label="Edit Profile" icon={<User1 />} />

          {/* PUSH_NOTIFICATIONS */}
          <SettingAction
            icon={<Bell1 />}
            label={'Push Notifications'}
            showSwitch={true}
          />

          {/* SWITCH_LANGUAGE */}
          <SettingAction
            icon={<Image source={Language} style={{width: 24, height: 24}} />}
            label={'Language'}
            onPress={() => navigation.navigate(routes.LANGUAGE)}
          />

          {/* DELETE_YOUR_ACCOUNTS */}
          <SettingAction icon={<DelProfile />} label={'Delete your Account'} />
        </View>
      ) : (
        <View>
          {/* EDIT_PROFILE */}
          <SettingAction
            label="Edit Profile"
            icon={<User1 />}
            onPress={() => navigation.navigate(routes.EDITDOCTORDETAILS)}
          />

          {/* PUSH_NOTIFICATIONS */}
          <SettingAction
            icon={<Bell1 />}
            label={'Push Notifications'}
            showSwitch={true}
          />
        </View>
      )}
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: 30,
    paddingHorizontal: 20,
  },
});
