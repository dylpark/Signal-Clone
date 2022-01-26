import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import React, { useState } from "react";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const register = () => {};

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light"></StatusBar>
      <Text h3 style={{ marginBottom: 50 }}>
        Create a Signal account
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          autofocus
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Email"
          type="text"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          type="text"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          placeholder="Profile Picture URL (optional)"
          type="imageUrl"
          value={imageUrl}
          onChangeText={(text) => setName(setImageUrl)}
          onSubmitEditing={register}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {},
});
