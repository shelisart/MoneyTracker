import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Button, Gap, PageHeader, TextInput} from '../../components';

const CashOnHand = () => {
  return (
    <ScrollView style={styles.container}>
      <PageHeader
        label="Cash On Hand"
        backButton={true}
        onPress={() => navigation.goBack()}
      />
      <Gap height={44} />
      <View style={styles.contentWrapper}>
        <TextInput label="Description" placeholder="Add the description" />
        <Gap height={17} />
        <TextInput label="Type" placeholder="Debit / Card" />
        <Gap height={22} />
        <Button label="Save" />
      </View>
      <Gap height={24} />
      <View style={styles.contentWrapper}>
        <Text style={styles.lastTransaction}>Last 3 Transaction</Text>
      </View>
    </ScrollView>
  );
};

export default CashOnHand;

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
  },
});
