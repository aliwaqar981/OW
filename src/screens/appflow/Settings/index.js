/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../../themes';
import {Bell1, DelProfile, User, User1} from '../../../assets/svgicons';
import {SettingAction} from '../../../components';
import {Language} from '../../../assets/images';
import {routes} from '../../../constants';

const Settings = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* SETTINGS_ACTTIONS_LISST */}

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
