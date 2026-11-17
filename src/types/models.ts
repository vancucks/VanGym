export type Exercise = { id: string; name: string; sets: number; reps: number; weight?: number; calibrated?: boolean; lastWeight?: number };
export type TrainingDay = { training: boolean; focus: string; exercises: Exercise[] };
export type WeeklyPlan = Record<number, TrainingDay>;
export type UserProfile = { nickname: string; character: 'lifting'; age?: string; weight?: string; height?: string; aiMetricsPayload?: { objective?: string; experienceLevel?: string; aiNotes?: string } };
export type GroupInfo = { name: string; code: string; duration: number; joinedAt: string; members: { nickname: string; sessions: number; progression: number; consistency: number }[] };
export type AppData = { user: UserProfile | null; plan: WeeklyPlan | null; group: GroupInfo | null; sessions: number; calibratedCount: number };
