import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Button, Gap, PageHeader, TextInput} from '../../components';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <PageHeader
        label="Sign Up"
        backButton={true}
        navigation={navigation}
        nav="SignIn"
      />
      <Gap height={24} />
      <View style={styles.contentWrapper}>
        <Gap height={26} />
        <TouchableOpacity style={styles.circle}>
          <Text style={styles.addPhoto}>Add Photo</Text>
        </TouchableOpacity>
        <Gap height={16} />
        <TextInput label="Full Name" placeholder="Type your full name" />
        <Gap height={16} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button
          label="Continue"
          onPress={() => navigation.navigate('SignUp')}
        />
        <Gap height={45} />
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 24,
  },
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    alignSelf: 'center',
    borderStyle: 'dashed',
  },
  addPhoto: {
    fontSize: 14,
    textAlign: 'center',
    color: '#8D92A3',
    backgroundColor: '#F0F0F0',
    borderRadius: 50,
    height: 90,
    width: 90,
    paddingHorizontal: 24,
    paddingVertical: 25,
  },
});
