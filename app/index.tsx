import { Link } from 'expo-router';
import { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  Image,
  Pressable,
} from 'react-native';
import cities from '../data/cities';
import type { City } from '../types/cities';

function CityItem({ item }) {
  return (
    <Link href={`/${item.id}`} asChild>
      <Pressable style={styles.city}>
        <Image style={styles.image} source={{ uri: item.image }} />
        <Text style={styles.name}>{item.name}</Text>
      </Pressable>
    </Link>
  );
}

export default function CityGrid() {
  const [loading, setLoading] = useState(false);

  if (loading) {
    return (
      <FlatList
        data={Array(10)}
        renderItem={() => null}
        // renderItem={() => <SkeletonItem />}
        numColumns={2}
      />
    );
  }

  return (
    <FlatList<City>
      data={cities}
      renderItem={({ item }) => <CityItem item={item} />}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  city: {
    flex: 1,
    aspectRatio: 1,
    marginHorizontal: 8,
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    elevation: 2,
    overflow: 'hidden',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '70%',
    backgroundColor: 'gainsboro',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
  },
});
