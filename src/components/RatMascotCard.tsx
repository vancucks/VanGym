import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';
import { colors } from '../theme/tokens';
const sprites = {
  lifting: require('../../assets/sprites/rat-lifting.jpg'),
  treadmill: require('../../assets/sprites/rat-treadmill.jpg'),
  water: require('../../assets/sprites/rat-water.jpg'),
} as Record<string, ImageSourcePropType>;
export function RatMascotCard({ kind = 'lifting', height = 112 }: { kind?: 'lifting' | 'treadmill' | 'water'; height?: number }) {
  return <View style={[styles.frame, { height }]}><Image source={sprites[kind]} resizeMode="contain" style={styles.image} accessible accessibilityLabel="Mascote rato pixel art VanGym" /></View>;
}
const styles = StyleSheet.create({ frame: { width: '100%', backgroundColor: '#606060', borderColor: colors.border, borderWidth: 1, borderRadius: 16, overflow: 'hidden', alignItems: 'center', justifyContent: 'center' }, image: { width: '100%', height: '100%' } });
