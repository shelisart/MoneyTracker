import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Button, Gap, PageHeader, TextInput} from '../../components';
import TransactionCard from '../../components/molecules/TransactionCard';

const CashOnBank = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <PageHeader
        label="Cash On Bank"
        backButton={true}
        onPress={() => navigation.goBack()}
      />
      <Gap height={24} />
      <View style={styles.contentWrapper}>
        <Gap height={24} />
        <TextInput label="Description" placeholder="Add the description" />
        <Gap height={17} />
        <TextInput label="Type" placeholder="Debit / Card" />
        <Gap height={22} />
        <Button label="Save" />
        <Gap height={52} />
      </View>
      <Gap height={24} />
      <View style={styles.contentWrapper}>
        <Gap height={16} />
        <Text style={styles.lastTransaction}>Last 3 Transaction</Text>
        <TransactionCard
          date="17 April 2020"
          price="-Rp.300.000"
          text="Water, Food"
        />
        <TransactionCard
          date="18 April 2020"
          price="-Rp.300.000"
          text="Office Supplies"
        />
        <TransactionCard
          date="19 April 2020"
          price="+Rp.300.000"
          text="Top Up"
          textColor="#1ABC9C"
        />
        <Gap height={35} />
      </View>
    </ScrollView>
  );
};

export default CashOnBank;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 24,
  },
  lastTransaction: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 24,
  },
});
