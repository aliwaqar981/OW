import {SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {
  Circle,
  CircleFilled,
  MasterCard,
  NotoCard,
  Paypal,
} from '../../../assets/svgicons';
import {PaymentCard, TextButton} from '../../../components';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../../navigation/AuthStack';
type Props = NativeStackScreenProps<AuthStackParamList, 'PaymentMethod'>;

const PaymentMethod: React.FC<Props> = ({navigation, route}) => {
  const [selectedCard, setSelectedCard] = useState('');
  return (
    <View style={styles.container}>
      {/* PAYMENT_OPTIONS */}
      <PaymentCard
        label="Stripe"
        logo={<MasterCard />}
        selectedCard={selectedCard == 'Stripe' ? <CircleFilled /> : <Circle />}
        onPress={() => setSelectedCard('Stripe')}
      />
      <PaymentCard
        label="Credit card"
        logo={<NotoCard />}
        selectedCard={
          selectedCard == 'Credit card' ? <CircleFilled /> : <Circle />
        }
        containerStyle={{marginTop: 14}}
        onPress={() => setSelectedCard('Credit card')}
      />
      <PaymentCard
        label="PayPal"
        logo={<Paypal />}
        selectedCard={selectedCard == 'PayPal' ? <CircleFilled /> : <Circle />}
        containerStyle={{marginTop: 14}}
        onPress={() => setSelectedCard('PayPal')}
      />
      {/* FOOTER */}
      <View style={styles.footer}>
        <TextButton
          label={'Select'}
          containerStyle={{
            ...styles.selectButton,
            backgroundColor: selectedCard ? '#EB4E1F' : '#EB4E1F50',
          }}
          disabled={!selectedCard}
          onPress={() => navigation.navigate('CheckOut')}
        />
      </View>
    </View>
  );
};

export default PaymentMethod;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  selectButton: {
    height: 50,
    borderRadius: 8,
    backgroundColor: '#EB4E1F40',
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 60,
    marginHorizontal: 20,
  },
});
