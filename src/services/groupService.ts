import { GroupInfo } from '../types/models';
import { doc, runTransaction } from 'firebase/firestore';
import { auth, db } from './firebase';

function createLocalGroup(name: string, duration: number, nickname: string, sessions: number): GroupInfo {
  const code = `RAT-${Math.floor(100 + Math.random() * 900)}`;
  return { name: name.trim(), code, duration, joinedAt: new Date().toISOString(), members: [{ nickname, sessions, progression: 0, consistency: Math.min(100, sessions * 10) }] };
}

function joinLocalGroup(code: string, nickname: string, sessions: number): GroupInfo | null {
  if (code.trim().length < 6) return null;
  return { name: 'Arena dos Ratos', code: code.trim().toUpperCase(), duration: 7, joinedAt: new Date().toISOString(), members: [{ nickname, sessions, progression: 0, consistency: 20 }, { nickname: 'rato_forte', sessions: 4, progression: 12.5, consistency: 75 }, { nickname: 'bia_treina', sessions: 3, progression: 8, consistency: 60 }] };
}

export async function createGroup(name: string, duration: number, nickname: string, sessions: number): Promise<GroupInfo> {
  if (!db || !auth?.currentUser) return createLocalGroup(name, duration, nickname, sessions);
  for (let attempt = 0; attempt < 4; attempt += 1) {
    const group = createLocalGroup(name, duration, nickname, sessions);
    try {
      await runTransaction(db, async (transaction) => {
        const ref = doc(db!, 'groups', group.code);
        if ((await transaction.get(ref)).exists()) throw new Error('invite-code-collision');
        transaction.set(ref, group);
      });
      return group;
    } catch (error) {
      if (error instanceof Error && error.message === 'invite-code-collision') continue;
      return group;
    }
  }
  return createLocalGroup(name, duration, nickname, sessions);
}

export async function joinGroup(code: string, nickname: string, sessions: number): Promise<GroupInfo | null> {
  if (!db || !auth?.currentUser) return joinLocalGroup(code, nickname, sessions);
  try {
    return await runTransaction(db, async (transaction) => {
      const ref = doc(db!, 'groups', code.trim().toUpperCase());
      const snapshot = await transaction.get(ref);
      if (!snapshot.exists()) return null;
      const group = snapshot.data() as GroupInfo;
      if (group.members.length >= 5 && !group.members.some((member) => member.nickname === nickname)) return null;
      const member = group.members.find((item) => item.nickname === nickname);
      if (member) return group;
      group.members.push({ nickname, sessions, progression: 0, consistency: 0 });
      transaction.set(ref, group);
      return group;
    });
  } catch {
    return joinLocalGroup(code, nickname, sessions);
  }
}
