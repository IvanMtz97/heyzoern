import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import { useAuth, login } from '@frontegg/react-native';

function Signin({ navigation }: any): JSX.Element {
  const {
    initializing,
    showLoader,
    isLoading,
    isAuthenticated,
    user,
  } = useAuth();

  useEffect(() => {
    console.log("CHECK", { initializing, isAuthenticated });
    
    if (!initializing && !isAuthenticated) {
      console.log("LOGIN");
      login();
    }
  }, [initializing, isAuthenticated]);
  
  useEffect(() => {
    if (!initializing && isAuthenticated) {
      navigation.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
    }
  }, [initializing, isAuthenticated, navigation]);

  console.log("USER SIGNIN", {initializing, isAuthenticated, user, navigation})

  return (
    <SafeAreaView>
    </SafeAreaView>
  );
}

export default Signin;
