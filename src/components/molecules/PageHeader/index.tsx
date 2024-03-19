import {
  StyleSheet,
  Text,
  View,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {BackButton} from '../../../assets/icon';

const PageHeader = ({label, backButton, nav, navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => backButton && navigation.navigate(nav)}>
        {backButton && <BackButton style={styles.backButton} />}
      </TouchableOpacity>
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
  label: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: '#020202',
  },
  backButton: {
    marginRight: 26,
  },
});
