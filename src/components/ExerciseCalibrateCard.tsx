import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Check, Minus, Plus } from 'lucide-react-native';
import { Exercise } from '../types/models';
import { colors, radius, space } from '../theme/tokens';
export function ExerciseCalibrateCard({ exercise, weight, onWeight, onSave }: { exercise: Exercise; weight: number; onWeight: (v: number) => void; onSave: () => void }) {
  const done = exercise.calibrated;
  return <View style={[styles.card, done && styles.done]}>
    <View style={styles.heading}><View style={{ flex: 1 }}><Text style={styles.name}>{exercise.name}</Text><Text style={styles.target}>{exercise.sets} × {exercise.reps} reps</Text></View>{done ? <Check color={colors.success} size={24} accessibilityLabel="Calibrado" /> : null}</View>
    <Text style={styles.hint}>{exercise.lastWeight != null ? `Última carga: ${exercise.lastWeight} kg` : 'Sem carga salva'}</Text>
    <View style={styles.stepper}><Pressable onPress={() => onWeight(Math.max(0, weight - 2.5))} accessibilityRole="button" accessibilityLabel="Diminuir 2,5 quilos" style={styles.step}><Minus color={colors.text} size={20} /></Pressable><Text style={styles.weight}>{weight} <Text style={styles.unit}>kg</Text></Text><Pressable onPress={() => onWeight(weight + 2.5)} accessibilityRole="button" accessibilityLabel="Aumentar 2,5 quilos" style={styles.step}><Plus color={colors.text} size={20} /></Pressable></View>
    <Pressable onPress={onSave} accessibilityRole="button" style={({ pressed }) => [styles.save, done && styles.saved, pressed && { opacity: 0.84 }]}><Text style={[styles.saveText, done && { color: colors.success }]}>{done ? `Salvo: ${exercise.weight} kg` : 'Salvar carga / calibrar'}</Text></Pressable>
  </View>;
}
const styles = StyleSheet.create({ card: { backgroundColor: colors.surface, borderColor: colors.border, borderWidth: 1, borderRadius: radius.card, padding: space.base, gap: 12 }, done: { borderColor: colors.success }, heading: { flexDirection: 'row', alignItems: 'center' }, name: { color: colors.text, fontSize: 18, fontWeight: '700' }, target: { marginTop: 4, color: colors.text, fontSize: 16, fontWeight: '700', fontVariant: ['tabular-nums'] }, hint: { color: colors.secondary, fontSize: 14 }, stepper: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 28 }, step: { width: 48, height: 48, borderRadius: 14, backgroundColor: colors.elevated, alignItems: 'center', justifyContent: 'center' }, weight: { color: colors.text, fontSize: 36, fontWeight: '700', fontVariant: ['tabular-nums'], minWidth: 110, textAlign: 'center' }, unit: { fontSize: 18, color: colors.secondary }, save: { minHeight: 48, borderRadius: 12, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center' }, saved: { backgroundColor: colors.successMuted }, saveText: { color: colors.text, fontSize: 16, fontWeight: '700', textTransform: 'none' } });
