import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";

export default function signup() {
  const [countryCode, setCountryCode] = useState("+977");
  const [phoneno, setPhoneno] = useState("");

  const onSignup = async () => {

  }
  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.header}>Let's get started!</Text>
      <Text style={defaultStyles.descriptionText}>Enter your phone number. We will   send you a confirmation code there</Text>
      <View style={styles.inputContainer}>
        <TextInput style={[styles.input]} onChangeText={setCountryCode} value={countryCode} placeholderTextColor={Colors.gray} placeholder="Country code" keyboardType="numeric" />
        <TextInput style={[styles.input, { flex: 1 }]} placeholderTextColor={Colors.gray} onChangeText={setPhoneno} value={phoneno} placeholder="Mobile number" keyboardType="numeric" />
      </View>
      <View>
        <Link href="/login" asChild>
          <TouchableOpacity>
            <Text style={defaultStyles.textLink}>Already have an account? Login</Text>
          </TouchableOpacity>
        </Link>
      </View>
      <View>
        <TouchableOpacity style={[defaultStyles.pillButton,
        phoneno !== "" ? styles.enable : styles.disable,
        { marginTop: 10 }]} onPress={onSignup}>
          <Text style={defaultStyles.buttonText}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 40,
    flexDirection: 'row',
  },
  input: {
    backgroundColor: Colors.lightGray,
    padding: 20,
    borderRadius: 16,
    fontSize: 16,
    marginHorizontal: 10,
    marginRight: 10
  },
  enable: {
    backgroundColor: Colors.primary
  },
  disable: {
    backgroundColor: Colors.primaryMuted
  }
});
