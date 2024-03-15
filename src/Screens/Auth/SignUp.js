//React & React Native
import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
//Packages
import auth from '@react-native-firebase/auth';
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
  const [confirmPassword, setConfirmPassword] = useState('');
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const onAuthStateChanged = user => {
    console.log(user);
    setUser(user);
    if (initializing) setInitializing(false);
  };
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const handleSignup = () => {
    if (email.length > 0 && password.length > 0 && confirmPassword.length > 0) {
      if (password === confirmPassword) {
        console.log(email, password);
        auth()
          .createUserWithEmailAndPassword(email, password)
          .then(() => {
            console.log('after');
            setError('User account created & signed in!');
          })
          .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              setError('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
              setError('That email address is invalid!');
            }

            setError(error);
          });
      } else {
        Alert.alert('Please make sure both password fields match.');
      }
    } else {
      Alert.alert('Please Fill out all fields.');
    }
  };
  const handleSignOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };
  return (
    <ScrollView
      style={styles.scrollViewParent}
      contentContainerStyle={styles.scrollView}>
      <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
        <Text style={styles.backButton}>Back</Text>
      </TouchableOpacity>
      <View style={styles.titleTextContainer}>
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
      <View style={styles.inputLabelView}>
        <Text style={styles.inputLabelText}>Confirm Password</Text>
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          onChangeText={text => setConfirmPassword(text)}
          defaultValue={confirmPassword}
          secureTextEntry={true}
        />
      </View>
      {error.length > 0 ? (
        <Text style={styles.errorMessage}>{error}</Text>
      ) : null}
      <View style={styles.registerBtnContainer}>
        <TouchableOpacity onPress={handleSignup} style={styles.registerBtn}>
          <Text style={{textAlign: 'center', fontSize: 18}}>Register</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.registerBtnContainer}>
        <TouchableOpacity onPress={handleSignOut} style={styles.registerBtn}>
          <Text style={{textAlign: 'center', fontSize: 18}}>signout</Text>
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
    ...Containers.centered,
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
  backButton: {
    ...Fonts.h2,
  },
});
