/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Bookings, PChat, PHome, PUser} from '../../assets/svgicons';
import {routes} from '../../constants';
import {
  Chats,
  ProfessionalBookingsStatus,
  ProfessionalHome,
  ProfessionalProfile,
} from '../../screens/appflow';
import {COLORS} from '../../themes';
const ProfessionalTab = createBottomTabNavigator();

const ProfessionalBottomTab = ({navigation}) => {
  return (
    <ProfessionalTab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.red,
        tabBarInactiveTintColor: '#263238',
        headerShadowVisible: false,
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
        name={routes.PROFESSIONALBOOKINGSSTATUS}
        component={ProfessionalBookingsStatus}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Bookings fill={COLORS.red} />
            ) : (
              <Bookings fill={COLORS.black} />
            ),
          tabBarLabel: 'Bookings',
          headerShown: true,
          headerTitle: 'Bookings',
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
