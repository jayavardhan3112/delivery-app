import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';
import { getRestaurant_ID_Spec } from '../sanity';

const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    getRestaurant_ID_Spec(id).then((data) => {
      setRestaurants(data?.restaurants);
    });
  }, []);
  return (
    <View>
      <View>
        <View className="flex-row items-center justify-between px-4 mt-4">
          <Text className="text-lg font-bold">{title}</Text>
          <ArrowRightIcon color="#00CCBB" />
        </View>
        <Text className="text-xs text-gray-500 px-4">{description}</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        className="pt-4"
      >
        {/* <RestaurantCard
          id={123}
          // imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          genre="Japanese"
          rating={4.5}
          address="1255 E University Dr"
          short_description="This is a test text"
          dishes={[]}
          long={20}
          lat={0}
        /> */}
        {restaurants?.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            genre={restaurant.type?.name}
            rating={restaurant.rating}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
