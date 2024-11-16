import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Image, Text, StyleSheet, Alert } from 'react-native';
import { useSearchImagesQuery, ImageItem } from '../services/pixabayApi';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { addBookmark, removeBookmark } from '../features/bookmarks/bookmarkSlice';

const HomeScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data, error, isLoading } = useSearchImagesQuery(searchTerm || 'knitting');
  const bookmarks = useSelector((state: RootState) => state.bookmarks.items);
  const dispatch = useDispatch();

  const handleBookmark = (item: ImageItem) => {
    const isBookmarked = bookmarks.some((bookmark) => bookmark.id === item.id);
    if (isBookmarked) {
      dispatch(removeBookmark(item.id));
    } else {
      dispatch(addBookmark(item));
    }
  };

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      Alert.alert('Search Error', 'Please enter a keyword to search!');
      return;
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search Images"
        value={searchTerm}
        onChangeText={setSearchTerm}
        style={styles.searchInput}
      />
      <Button title="Search" onPress={handleSearch} />

      {isLoading && <Text style={styles.loadingText}>Loading...</Text>}
      {error && (
        <Text style={styles.errorText}>
          Failed to load images. Please check your internet connection or try again later.
        </Text>
      )}

      <FlatList
        data={data?.hits || []}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.imageCard}>
            <Image source={{ uri: item.webformatURL }} style={styles.image} />
            <Text style={styles.imageText}>{item.user}</Text>
            <Text style={styles.imageTags}>{item.tags}</Text>
            <Button
              title={bookmarks.some((b) => b.id === item.id) ? 'Remove Bookmark' : 'Bookmark'}
              onPress={() => handleBookmark(item)}
              color={bookmarks.some((b) => b.id === item.id) ? 'red' : 'blue'}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  loadingText: {
    textAlign: 'center',
    marginVertical: 8,
    color: 'gray',
  },
  errorText: {
    textAlign: 'center',
    color: 'red',
    marginBottom: 16,
  },
  imageCard: {
    marginBottom: 16,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  imageText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  imageTags: {
    fontSize: 14,
    color: 'gray',
  },
});

export default HomeScreen;
