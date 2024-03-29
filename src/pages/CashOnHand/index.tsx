import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PageHeader} from '../../components';
const CashOnHand = () => {
  return (
    <View style={styles.container}>
      <PageHeader label="Cash On Hand" backButton={true} />
    </View>
  );
};

export default CashOnHand;

const styles = StyleSheet.create({});
