import {Image, StyleSheet, Text, View} from 'react-native';
import React, {FC, useContext} from 'react';
import {COLORS} from '../../../themes';
import {Bell1, DelProfile, User, User1} from '../../../assets/svgicons';
import {SettingAction} from '../../../components';
import {Language} from '../../../assets/images';
import {useUser} from '../../../Hooks/UseContext';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../../navigation/HomeStack';
import {ProfessionalStackParamList} from '../../../navigation/ProfessionalStack';

type Props = NativeStackScreenProps<
  HomeStackParamList & ProfessionalStackParamList,
  'Settings'
>;

const Settings: FC<Props> = ({navigation}) => {
  const {userId} = useUser();
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
            onPress={() => navigation.navigate('Language')}
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
            onPress={() => navigation.navigate('EditDoctorDetails')}
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
