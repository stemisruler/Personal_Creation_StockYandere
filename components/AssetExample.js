import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import dialogues from './dialogues';

export default function AssetExample({ category }) {
    
  const [currentDialogue, setCurrentDialogue] = useState(() => {
    const relevantDialogues = dialogues.filter(dialogue => dialogue.category === '안부인사');
    const randomIndex = Math.floor(Math.random() * relevantDialogues.length);
    return relevantDialogues[randomIndex];
  });

  const getRandomDialogue = (targetCategory) => {

    const filteredDialogues = dialogues.filter(dialogue => dialogue.category !== '안부인사');
    const relevantDialogues = (targetCategory === '전체')
      ? filteredDialogues
      : filteredDialogues.filter(dialogue => dialogue.category === targetCategory);

    const randomIndex = Math.floor(Math.random() * relevantDialogues.length);
    return relevantDialogues[randomIndex];
  }

  const handlePress = () => {
    setCurrentDialogue(getRandomDialogue(category));
  };

  return (
    <TouchableOpacity activeOpacity={1} onPress={handlePress} style={styles.container}>
    <Image style={styles.logo} source={currentDialogue.image} resizeMode="cover" />
      <View style={styles.dialogueBoxWrapper}>
        <View style={styles.dialogueBox}>
          <Text style={styles.dialogueText}>{currentDialogue.text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start', 
    padding: 24,
  },
  logo: {
    height: Dimensions.get('window').height * 0.6,
    width: 128,
    marginRight: 8,
    marginLeft: 30,
  },
  dialogueBoxWrapper: {
    flex: 1,
    position: 'relative',
  },
  dialogueBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    elevation: 3,
    maxWidth: '100%',
    marginTop: 50,  // 마진 탑 추가
  },
  dialogueText: {
    fontSize: 16,
  },
});
