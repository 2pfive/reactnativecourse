//import liraries
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// create a component
const ListHeading = ({ title }: {title:string}) => {
    return (
        <View className='list-head'>
            <Text className='list-title'>{title}</Text>

            <TouchableOpacity className='list-action'>
                <Text className="list-action-text">View all</Text>
            </TouchableOpacity>
        </View>
    );
};



//make this component available to the app
export default ListHeading;
