/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import {
  ArrowLeft,
  Bookings,
  Calendar,
  Calendar1,
  Calendar4,
  PChat,
  PHome,
  PUser,
} from '../../assets/svgicons';
import {ButtonwithIcon} from '../../components';
import {routes} from '../../constants';
import {
  Chats,
  ProfessionalBookingList,
  ProfessionalHome,
  ProfessionalProfile,
} from '../../screens/appflow';
import {COLORS, FONTS} from '../../themes';

const ProfessionalTab = createBottomTabNavigator();
const ProfessionalBottomTab = () => {
  const {navigate} = useNavigation();
  return (
    <ProfessionalTab.Navigator
      initialRouteName="Feed"
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
        name={routes.PROFESSIONALHOME}
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
        name={routes.PROFESSIONALBOOKINGSLIST}
        component={ProfessionalBookingList}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Bookings fill={COLORS.red} />
            ) : (
              <Bookings fill={COLORS.black} />
            ),
          headerShown: true,
          tabBarLabel: 'Bookings',
          headerTitle: 'Bookings',

          headerRight: () => (
            <ButtonwithIcon
              icon={<Calendar4 />}
              onPress={() => navigate(routes.AGENDA)}
              containerStyle={{marginRight: 20}}
            />
          ),
        }}
      />

      <ProfessionalTab.Screen
        name={routes.CHATS}
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
        name={routes.PROFESSIONALPROFILE}
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
