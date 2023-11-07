import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { useAuth,  } from '@frontegg/react-native';

function Signin(): JSX.Element {
  const {
    initializing,
    showLoader,
    isLoading,
    isAuthenticated,
    user,
    login,
    logout,
  } = useAuth();
  console.log({ isAuthenticated, login, logout, user, initializing });
  
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSignIn = () => {
    login();
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <TextInput
          onChangeText={setUsername}
          value={username}
          placeholder="Username"
        />
        <TextInput
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
        />
        <TouchableOpacity onPress={handleSignIn}>
          <Text>Sign in</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  }
});

export default Signin;
