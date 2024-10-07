import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Bookings, Calendar4, PChat, PHome, PUser} from '../../assets/svgicons';
import {ButtonwithIcon} from '../../components';
import {
  Chats,
  ProfessionalBookingList,
  ProfessionalHome,
  ProfessionalProfile,
} from '../../screens/appflow';
import {COLORS, FONTS} from '../../themes';

export type ProfessionalTabParamList = {
  ProfessionalHome: undefined;
  ProfessionalBookingList: undefined;
  Chats: undefined;
  ProfessionalProfile: undefined;
  Settings: undefined;
  ProfessionalBookingDetails: {params: string};
  Community: undefined;
  Agenda: undefined;
  TermsAndConditions: undefined;
  PrivacyPolicy: undefined;
  AboutUs: undefined;
};

const ProfessionalTab = createBottomTabNavigator<ProfessionalTabParamList>();

const ProfessionalBottomTab: React.FC = () => {
  return (
    <ProfessionalTab.Navigator
      initialRouteName="ProfessionalHome"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.red,
        tabBarInactiveTintColor: '#263238',
        headerShadowVisible: false,
        headerTitleStyle: {
          fontSize: 16,
          fontFamily: FONTS.Nunito_Bold,
          color: COLORS.black,
        },
      }}>
      <ProfessionalTab.Screen
        name="ProfessionalHome"
        component={ProfessionalHome}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <PHome fill={COLORS.red} />
            ) : (
              <PHome fill={COLORS.black} />
            ),
          tabBarLabel: 'Home',
        }}
      />
      <ProfessionalTab.Screen
        name="ProfessionalBookingList"
        component={ProfessionalBookingList}
        options={({navigation}) => ({
          tabBarIcon: ({focused}) =>
            focused ? (
              <Bookings fill={COLORS.red} />
            ) : (
              <Bookings fill={COLORS.black} />
            ),
          tabBarLabel: 'Bookings',
          headerShown: true,
          headerTitle: 'Bookings',
          headerRight: () => (
            <ButtonwithIcon
              icon={<Calendar4 />}
              onPress={() => navigation.navigate('Agenda')}
              containerStyle={{marginRight: 20}}
            />
          ),
        })}
      />
      <ProfessionalTab.Screen
        name="Chats"
        component={Chats}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <PChat fill={COLORS.red} />
            ) : (
              <PChat fill={COLORS.black} />
            ),
          tabBarLabel: 'Chat',
        }}
      />
      <ProfessionalTab.Screen
        name="ProfessionalProfile"
        component={ProfessionalProfile}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <PUser fill={COLORS.red} />
            ) : (
              <PUser fill={COLORS.black} />
            ),
          tabBarLabel: 'Profile',
          headerShown: true,
          headerTitle: 'Profile',
          headerStyle: {
            backgroundColor: COLORS.red,
          },
          headerTintColor: COLORS.white,
        }}
      />
    </ProfessionalTab.Navigator>
  );
};

export default ProfessionalBottomTab;
