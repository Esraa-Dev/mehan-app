import React,{ useEffect, useState } from "react";
import { SafeAreaView, StyleSheet,StatusBar } from "react-native";
import { WebView } from "react-native-webview";
import { useNavigation } from "@react-navigation/native"; // Import navigation hook from React Navigation

const Splash = () => {
  const navigation = useNavigation(); // Initialize navigation

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Onboarding"); // Navigate to the onboarding screen after 2 seconds
    }, 3000); // Set the timeout duration in milliseconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [navigation]); // Add navigation to the dependency array

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />

      <WebView
        originWhitelist={["*"]}
        source={require("../../../assets/splash.html")}
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

export default Splash;
