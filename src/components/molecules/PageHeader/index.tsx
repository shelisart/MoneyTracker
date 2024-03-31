import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Button} from '../..';
import {Profile} from '../../../assets/Images';
const PageHeader = ({label, backButton, onPress, type}) => {
  if (type === 'withPhoto') {
    return (
      <View style={styles.containerWithPhoto}>
        <View>
          <Text style={styles.appTitle}>Money Tracker</Text>
          <Text style={styles.appSubTitle}>Track Your Money</Text>
        </View>
        <Image style={styles.face} source={Profile} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {backButton && (
        <Button type="icon-only" icon="icon-back" onPress={onPress} />
      )}
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};
export default PageHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingLeft: 24,
    paddingVertical: 37,
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerWithPhoto: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 37,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 22,
    color: '#020202',
    fontWeight: '500',
  },
  appTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: '#020202',
  },
  appSubTitle: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    color: '#8D92A3',
  },
  face: {
    width: 55,
    height: 55,
    borderRadius: 8,
  },
});
