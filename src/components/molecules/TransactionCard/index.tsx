import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Card} from 'react-native-elements';
const TransactionCard = ({date, text, price, textColor = '#d9435e'}) => {
  return (
    <Card containerStyle={styles.card}>
      <View style={styles.row}>
        <View style={styles.column}>
          <Card.Title style={styles.cardtitle}>{date}</Card.Title>
          <Text style={styles.label}>{text}</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.price(textColor)}>{price}</Text>
        </View>
      </View>
    </Card>
  );
};

export default TransactionCard;

const styles = StyleSheet.create({
  cardtitle: {
    textAlign: 'left',
    color: '#8D92A3',
    fontWeight: '400',
    fontSize: 14,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    elevation: 8,
  },
  label: {
    color: '#020202',
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: '400',
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flex: 1,
  },
  price: textColor => ({
    textAlign: 'right',
    color: textColor,
    fontWeight: '700',
  }),
});
