import React from "react";
import { SafeAreaView, StyleSheet,StatusBar } from "react-native";
import { WebView } from "react-native-webview";
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />

      <WebView
        originWhitelist={["*"]}
        source={require("../../../assets/otp.html")}
        onMessage={(event) => {
          if (event.nativeEvent.data === 'navigateToSignin') {
            navigation.navigate('register');
          }
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default RegisterScreen;
