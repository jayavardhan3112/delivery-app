import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: 'o9wih73h',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2021-10-21',
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export const getFeatured = async () => {
  const query = `*[_type == "featured"] {
    ...,
    restaurants[]->{
      ...,
      dishes[]->
    }
  }`;

  const items = await client.fetch(query).then((data) => {
    return data;
  });
  return items;
};

export const getRestaurant_ID_Spec = async (id) => {
  const query = `*[_type == "featured" && _id == $id] {
    ...,
    restaurants[]->{
      ...,
      dishes[]->,
        type->{
          name
      }
    },
  }[0]`;

  const items = await client.fetch(query, { id }).then((data) => {
    return data;
  });
  return items;
};

export const getCategories = async () => {
  const query = `*[_type == "category"]`;
  const items = await client.fetch(query).then((data) => {
    return data;
  });
  return items;
};
