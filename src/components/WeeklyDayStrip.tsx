import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/tokens';
const labels = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'];
export function WeeklyDayStrip({ value, onChange, configured }: { value: number; onChange: (day: number) => void; configured: boolean[] }) {
  return <View style={styles.row}>{labels.map((label, index) => {
    const selected = index === value;
    return <Pressable key={label} onPress={() => onChange(index)} accessibilityRole="button" accessibilityState={{ selected }} accessibilityLabel={`${label}${configured[index] ? ', dia de treino configurado' : ''}`} style={({ pressed }) => [styles.day, selected && styles.active, pressed && styles.pressed]}>
      <Text style={[styles.label, selected && styles.activeText]}>{label}</Text><View style={[styles.dot, configured[index] && styles.hasPlan, selected && styles.activeDot]} />
    </Pressable>;
  })}</View>;
}
const styles = StyleSheet.create({ row: { flexDirection: 'row', justifyContent: 'space-between', gap: 3 }, day: { flex: 1, minHeight: 56, minWidth: 44, borderRadius: 12, backgroundColor: colors.surface, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: colors.border, gap: 6 }, active: { backgroundColor: colors.primary, borderColor: colors.primary }, pressed: { opacity: 0.8 }, label: { color: colors.muted, fontSize: 12, fontWeight: '700' }, activeText: { color: colors.text }, dot: { width: 5, height: 5, borderRadius: 5, backgroundColor: 'transparent' }, hasPlan: { backgroundColor: colors.primary }, activeDot: { backgroundColor: colors.text } });
