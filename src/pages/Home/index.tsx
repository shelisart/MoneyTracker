import {StyleSheet, Text, ScrollView, View, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {PageHeader, Gap, Button} from '../../components';
const Home = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <PageHeader
        type="withPhoto"
        label="Money Tracker"
        sublabel="Track your money"
        backButton={false}
      />
      <Gap height={20} />
      <View style={styles.contentWrapper}>
        <Gap height={13} />
        <Text style={[{fontSize: 16}, {fontWeight: 'bold'}, {marginLeft: 24}]}>
          Your Balance
        </Text>
        <Gap height={4} />
        <Text style={styles.money}>Rp.10.000.000</Text>
        <Gap height={18} />
        <View
          style={{
            flex: 1,
            height: 2,
            backgroundColor: 'black',
          }}
        />
        <Gap height={20} />
        <View style={styles.cashOn}>
          <Text
            style={{marginHorizontal: 20, color: 'black', fontWeight: '400'}}>
            Cash On Hand
          </Text>
          <Text
            style={{marginHorizontal: 20, color: 'black', fontWeight: '500'}}>
            Rp. 4.000.000
          </Text>
        </View>
        <Gap height={11} />
        <View style={[styles.cashOn, {marginVertical: 5}]}>
          <Text
            style={{marginHorizontal: 20, color: 'black', fontWeight: '400'}}>
            Cash On Bank
          </Text>
          <Text
            style={{
              marginHorizontal: 20,
              color: 'black',
              fontWeight: '500',
              paddingBottom: 40,
            }}>
            {' '}
            Rp. 6.000.000
          </Text>
        </View>
      </View>
      <Gap height={20} />
      <View style={styles.contentWrapper2}>
        <Gap height={10.6} />
        <Text
          style={{
            fontSize: 16,
            color: 'black',
            fontWeight: '500',
            marginLeft: 24,
          }}>
          Add Transaction
        </Text>
        <Gap height={8.81} />
        <Button
          label="Cash On Hand"
          onPress={() => navigation.navigate('CashOnHand')}
        />
        <Gap height={18.04} />
        <Button
          label="Cash On Bank"
          onPress={() => navigation.navigate('CashOnBank')}
        />
        <Gap height={71.27} />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cashOn: {
    flexDirection: 'row',
    fontSize: 14,
    marginLeft: 20,
  },
  contentWrapper: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 24,
  },
  contentWrapper2: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 24,
  },
  money: {
    fontSize: 24,
    color: '#000000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
