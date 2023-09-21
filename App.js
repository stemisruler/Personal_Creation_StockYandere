import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, TouchableOpacity, StatusBar } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  const [selectedTab, setSelectedTab] = useState('전체');
  const renderNavItem = (label) => (
    <TouchableOpacity onPress={() => setSelectedTab(label)}>
      <Text style={[styles.navItem, label === selectedTab && styles.selectedNavItem]}>
        {label}
      </Text>
    </TouchableOpacity>
  );


  return (

    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
      <Text style={styles.paragraph}>
        주식 얀데레 이주얀!
      </Text>
      <Card style={styles.card}>
        <AssetExample category={selectedTab}/>
      </Card>
      <View style={styles.navBar}>
        {renderNavItem('전체')}
        {renderNavItem('주식')}
        {renderNavItem('평범')}
        {renderNavItem('위로')}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
    card: {
    marginBottom: 8,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ddd',
  },
  navItem: {
    fontSize: 16,
    padding: 30,
    borderRadius: 8,

  },

    selectedNavItem: {
    fontWeight: 'bold',
    color: 'blue',
    backgroundColor: 'rgba(135, 206, 235, 0.3)',  // 약한 파란색 배경

  },

});

