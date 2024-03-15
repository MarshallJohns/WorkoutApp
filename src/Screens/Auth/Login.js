//React & React Native
import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
//Packages
// import auth from '@react-native-firebase/auth';
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
export const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // const handleLogin = () => {
  //   if (email.length > 0 && password.length > 0 && confirmPassword.length > 0) {
  //     console.log(email, password);
  //     auth()
  //       .signInWithEmailAndPassword(email, password)
  //       .then(() => {
  //         console.log('after');
  //         setError('User account created & signed in!');
  //       })
  //       .catch(error => {
  //         if (error.code === 'auth/email-already-in-use') {
  //           setError('That email address is already in use!');
  //         }

  //         if (error.code === 'auth/invalid-email') {
  //           setError('That email address is invalid!');
  //         }

  //         setError(error);
  //       });
  //   } else {
  //     Alert.alert('Please Fill out all fields.');
  //   }
  // };
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.titleTextContainer}>
          <View style={styles.titleBtnStyle}>
            <Text style={styles.loginText}>Log In</Text>
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
        {error.length > 0 ? (
          <Text style={styles.errorMessage}>{error}</Text>
        ) : null}
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Not a member? </Text>
          <Text
            style={styles.joinNowText}
            onPress={() => props.navigation.navigate('SignUp')}>
            Join here!
          </Text>
        </View>
        {/* //!LEAVING THIS COMMENTED OUT SO I CAN CAN COME BACK TO IT */}
        {/* <TouchableOpacity onPress={() => setView('passwordReset')}>
          <Text style={styles.forgotText}>Forgot your password?</Text>
        </TouchableOpacity> */}
        <View style={styles.loginBtnContainer}>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => handleLogin()}>
            <Text style={styles.logInBtnTxt}>Log In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: Misc.padding,
    height: '100%',
    alignItems: 'center',
  },
  titleBtnStyle: {
    ...Buttons.titleLogIn,
  },
  fbText: {
    ...Fonts.fb,
  },
  imgContainer: {
    ...Containers.loginImg,
  },
  titleContainer: {
    flex: 1,
  },
  titleTextContainer: {
    ...Containers.titleText,
    ...Containers.centered,
  },
  logo: {
    ...Icons.logo,
    marginVertical: Misc.margin / 2,
  },
  loginBtnContainer: {
    ...Containers.loginBtn,
  },
  loginText: {
    ...Fonts.login,
  },
  signUpContainer: {
    ...Containers.row,
    alignItems: 'center',
  },
  signUpText: {
    ...Fonts.h3,
  },
  joinNowText: {
    ...Fonts.signUp,
  },
  inputsContainer: {
    ...Containers.loginInputs,
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
  forgotText: {
    ...Fonts.forgot,
  },
  loginBtn: {
    ...Buttons.login,
  },
  fbBtn: {
    ...Buttons.fb,
  },
  logInBtnTxt: {
    ...Fonts.logInBtn,
  },
  errorMessage: {
    ...Fonts.forgot,
    color: Colors.errorRed,
  },
});
