import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const EditScreen = ({ navigation }) => {
  console.log('navy', navigation.getParam('id'));
  return (
    <View>
      <Text>Edit Screen - {navigation.getParam('id')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
