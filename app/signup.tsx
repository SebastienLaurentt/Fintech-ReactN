import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native";

const signup = () => {
  const [countryCode, setCountryCode] = useState("+49");
  const onSignup = async () => {};

  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.header}>Let's get Started </Text>
      <Text style={defaultStyles.descriptionText}>
        {" "}
        Enter your phone number. We will send you a confirmation code there
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Country Code"
          placeholderTextColor={Colors.gray}
          value={countryCode}
        />
        <TextInput
          style={styles.input}
          placeholder="Mobile number"
          keyboardType="numeric"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 40,
    flexDirection: "row",
  },
  input: {
    backgroundColor: Colors.lightGray,
    padding:20,
    borderRadius: 16,
    fontSize:20,
    marginRight: 10,
  },
});

export default signup;
