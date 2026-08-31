//import liraries
import React from 'react';
import {Text, StyleSheet } from 'react-native';
import { SafeAreaView as RNSafeArearView } from "react-native-safe-area-context";
import { styled } from "nativewind"
const SafeAreaView = styled(RNSafeArearView)
// create a component
const Settings = () => {
    return (
        <SafeAreaView className='flex-1 bg-background p-5'>
            <Text>Settings</Text>
        </SafeAreaView>
    );
};


//make this component available to the app
export default Settings;
