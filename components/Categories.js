import { ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import { getCategories, urlFor } from '../sanity';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data);
    });
  }, []);
  console.log(categories);
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
    >
      {categories?.map((category) => (
        <CategoryCard
          key={category._id}
          imgUrl={urlFor(category.image)
            .width(200)
            .url()}
          title={category.name}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
