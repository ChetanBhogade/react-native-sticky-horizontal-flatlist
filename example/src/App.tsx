import React from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import { StickyHorizontalFlatList } from 'react-native-sticky-horizontal-flatlist';

import styles from './AppStyles';
import DummyData from '../assets/json/MOCK_DATA.json';

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={styles.listArea}>
        <Text style={styles.listTitle}>Existing FlatList: </Text>
        <View style={styles.listContainer}>
          <FlatList
            data={DummyData}
            horizontal={true}
            stickyHeaderIndices={[0]}
            renderItem={({ item }) => {
              return (
                <View style={styles.cardContainer}>
                  <Text numberOfLines={1} style={styles.cardTitle}>
                    {item.first_name}
                  </Text>
                  <Text style={styles.cardDescription}>{item.ip_address}</Text>
                  <Text style={styles.cardId}>{item.id}</Text>
                </View>
              );
            }}
          />
        </View>
      </View>
      <View />
      <View style={styles.listArea}>
        <Text style={styles.listTitle}>New FlatList: </Text>
        <View style={styles.listContainer}>
          <StickyHorizontalFlatList
            data={DummyData}
            horizontal={true}
            stickyHeaderIndices={[0]}
            renderItem={({ item }) => {
              return (
                <View style={styles.cardContainer}>
                  <Text numberOfLines={1} style={styles.cardTitle}>
                    {item.first_name}
                  </Text>
                  <Text style={styles.cardDescription}>{item.ip_address}</Text>
                  <Text style={styles.cardId}>{item.id}</Text>
                </View>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
}
