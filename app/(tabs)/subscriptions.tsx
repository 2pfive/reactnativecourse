//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView as RNSafeArearView } from "react-native-safe-area-context";
import { styled } from "nativewind"
const SafeAreaView = styled(RNSafeArearView)
// create a component
const Subscriptions = () => {
    return (
        <SafeAreaView className='flex-1 bg-background p-5'>
            <Text>Subscriptions</Text>
        </SafeAreaView>
    );
};


export default Subscriptions;
