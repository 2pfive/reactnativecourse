//import liraries
import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

// create a component
const SubscriptionDetails = () => {
    const { id } = useLocalSearchParams<{ id: string }>()

    return (
        <View >
            <Text>Subscription Details: {id}</Text>
        </View>
    );
};


//make this component available to the app
export default SubscriptionDetails;
