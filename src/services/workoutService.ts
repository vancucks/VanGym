import AsyncStorage from '@react-native-async-storage/async-storage';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from './firebase';
import { AppData, WeeklyPlan } from '../types/models';

const KEY = '@vangym/v1';
export const emptyData: AppData = { user: null, plan: null, group: null, sessions: 0, calibratedCount: 0 };
export async function loadData(): Promise<AppData> {
  let local = emptyData;
  try { const raw = await AsyncStorage.getItem(KEY); local = raw ? { ...emptyData, ...JSON.parse(raw) as AppData } : emptyData; }
  catch { /* Keep the demo usable if local storage is unavailable. */ }
  if (db && auth?.currentUser) {
    try {
      const snapshot = await getDoc(doc(db, 'users', auth.currentUser.uid));
      if (snapshot.exists()) { local = { ...local, ...snapshot.data() as AppData }; await AsyncStorage.setItem(KEY, JSON.stringify(local)); }
    } catch { /* Offline mode continues from the local cache. */ }
  }
  return local;
}
export async function saveData(data: AppData): Promise<void> {
  await AsyncStorage.setItem(KEY, JSON.stringify(data));
  if (db && auth?.currentUser) {
    try { await setDoc(doc(db, 'users', auth.currentUser.uid), data, { merge: true }); }
    catch { /* Keep local changes; they'll remain available if the network is down. */ }
  }
}
export async function saveWeeklyPlan(data: AppData, plan: WeeklyPlan): Promise<AppData> {
  const next = { ...data, plan }; await saveData(next); return next;
}
