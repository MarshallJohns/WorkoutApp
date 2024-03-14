//React & React Native
import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
//Packages
//Context
//Constants
//Navigation
//Components
//Screens
//Icons
//Images
//Data
//Styles
import {
  Buttons,
  Colors,
  Containers,
  Fonts,
  Icons,
  Images,
  Index,
  Misc,
  Window,
} from '../../Styles/Index';
export const SignUp = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  return (
    <ScrollView
      style={styles.scrollViewParent}
      contentContainerStyle={styles.scrollView}>
      <View style={styles.titleTextContainer}>
        <View style={styles.titleBtnStyle}>
          <Text
            onPress={() => props.navigation.navigate('Login')}
            style={styles.loginText}>
            Log In
          </Text>
        </View>
        <Text style={styles.orText}>or</Text>
        <View style={styles.signUp}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </View>
      </View>

      <View style={styles.inputLabelView}>
        <Text style={styles.inputLabelText}>Email</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => setEmail(text)}
          defaultValue={email}
          autoCapitalize="none"
          keyBoardType="email-address"
        />
      </View>
      <View style={styles.inputLabelView}>
        <Text style={styles.inputLabelText}>Password</Text>
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          onChangeText={text => setPassword(text)}
          defaultValue={password}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.registerBtnContainer}>
        <TouchableOpacity
          onPress={e => {
            handleEmail();
          }}
          style={styles.registerBtn}>
          <Text style={{textAlign: 'center', fontSize: 18}}>Register</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewParent: {
    height: '100%',
    width: '100%',
    // backgroundColor: 'red',
    // flex: 1,
  },
  scrollView: {
    alignItems: 'center',
    paddingHorizontal: Misc.padding,
    paddingBottom: Misc.padding / 2,
  },
  titleBtnStyleSignUp: {
    ...Buttons.titleSignUp,
  },

  titleTextContainer: {
    ...Containers.titleText,
  },
  logo: {
    ...Icons.logo,
    marginVertical: Misc.margin / 2,
  },
  loginText: {
    ...Fonts.login,
  },
  orText: {
    ...Fonts.or,
  },
  signUp: {
    ...Buttons.titleSignUp,
  },
  signUpText: {
    ...Fonts.signUp,
  },
  inputLabelView: {
    marginBottom: Misc.margin / 4,
    alignItems: 'flex-start',
    width: '100%',
  },
  inputLabelText: {
    ...Fonts.inputLabel,
  },
  textInput: {
    ...Containers.inputTxt,
    padding: 0,
  },
  checkboxView: {
    flexDirection: 'row',
    width: '90%',
  },
  checkBox: {
    ...Buttons.checkboxSignUp,
  },
  checkBoxTxt: {
    flex: 1,
  },
  registerBtnContainer: {
    ...Containers.registerBtn,
  },
  registerBtn: {
    ...Buttons.register,
  },
  success: {
    color: Colors.successGreen,
  },
  error: {
    color: Colors.errorRed,
  },
});
