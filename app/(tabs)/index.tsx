import "@/global.css"
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView as RNSafeArearView } from "react-native-safe-area-context";
import { styled } from "nativewind"
const SafeAreaView = styled(RNSafeArearView)

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link href="/onboarding" className="mt-4 rounded-4 bg-primary text-white
       p-4">Go to Onboarding</Link>
      <Link href="/(auth)/sign-in" className="mt-4 rounded-4 bg-primary text-white
       p-4">Go to Sign In</Link>
      <Link href="/(auth)/sign-up" className="mt-4 rounded-4 bg-primary text-white
       p-4">Go to Sign Up</Link>

      <Link href="/subscritpions/spotify">Spotify Subsription</Link>
      <Link href={{
        pathname: '/subscritpions/[id]',
        params: { id: 'claude' }
      }}>Claude Max Subsription</Link>
    </SafeAreaView>
  );
}