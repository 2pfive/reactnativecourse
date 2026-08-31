import "@/global.css"
import { Link } from "expo-router";
import { FlatList, Image, Text, View } from "react-native";
import { SafeAreaView as RNSafeArearView } from "react-native-safe-area-context";
import { styled } from "nativewind"
import images from "@/constants/images";
import { HOME_BALANCE, HOME_SUBSCRIPTIONS, HOME_USER, UPCOMING_SUBSCRIPTIONS } from "@/constants/data";
import { icons } from "@/constants/icons";
import { formatCurrency } from "@/lib/utils";
import ListHeading from "@/components/ListHeading";
import dayjs from "dayjs";
import UpcomingSubscription from "@/components/UpcomingSubscriptionCard";
import SubscriptionCard from "@/components/SubscriptionCard";
import { useState } from "react";
const SafeAreaView = styled(RNSafeArearView)

export default function App() {
  const [expandedSubscriptionId, setExpandedSubscriptionId] = useState<string | null>()

  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <View className="home-header">
        <View className="home-user">
          <Image source={images.avatar} className="home-avatar"></Image>
          <Text className="home-user-name">{HOME_USER.name}</Text>
        </View>
        <Image source={icons.add} className="home-add-icon"></Image>
      </View>
      <View className="home-balance-card">
        <Text className="home-balance-label">Balance</Text>

        <View className="home-balance-row">
          <Text className="home-balance-amount">{formatCurrency(HOME_BALANCE.amount)}</Text>
          <Text className="home-balance-date">
            {dayjs(HOME_BALANCE.nextRenewalDate).format('MM/DD')}
          </Text>
        </View>
      </View>
      <View>
        <ListHeading title="Upcoming"></ListHeading>
        <FlatList
          data={UPCOMING_SUBSCRIPTIONS}
          renderItem={({ item }) => (
            <UpcomingSubscription {...item}></UpcomingSubscription>
          )}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={<Text className="home-empty-state">No Upcoming renewals yet.</Text>}
        >

        </FlatList>


      </View>
      <View>
        <ListHeading title="All Subscriptions"></ListHeading>
        <FlatList data={HOME_SUBSCRIPTIONS}
          ListHeaderComponent={<View className="h-4" />}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <SubscriptionCard {...item} expanded={expandedSubscriptionId == item.id}
              onPress={() => setExpandedSubscriptionId((currentId) => (currentId == item.id ? null : item.id))}></SubscriptionCard>
          )}
          extraData={expandedSubscriptionId}
          ItemSeparatorComponent={() => <View className="h-4" />}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<Text className="home-empy-state">No subscriptions yet.</Text>}
        ></FlatList>

      </View>
    </SafeAreaView>
  );
}