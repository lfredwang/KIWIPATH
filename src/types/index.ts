export type BilingualTier = 1 | 2 | 3 | 4;
export type LanguagePreference = 'auto' | BilingualTier;

export type NavTab =
  | 'dashboard'
  | 'curriculum'
  | 'jobs'
  | 'language'
  | 'tools'
  | 'profile';

export type UserStage =
  | 'pre-arrival'
  | 'just-landed'
  | 'settling-in'
  | 'citizenship';

export type NZCity =
  | 'Auckland'
  | 'Wellington'
  | 'Christchurch'
  | 'Hamilton'
  | 'Tauranga'
  | 'Queenstown'
  | 'Dunedin';

export type SkillDomain =
  | 'systems'
  | 'housing'
  | 'career'
  | 'language'
  | 'moneyLaw'
  | 'cultureSafety';

export interface BilingualText {
  zh: string;
  en: string;
  /** Optional concise cultural/glossary hint shown on click in Tier 3-4 */
  hintZh?: string;
}

export interface KeyTerm {
  term: string;
  phonetic?: string;
  zh: string;
  note?: string;
  isMaori?: boolean;
}

export interface LessonCard {
  id: string;
  type: 'concept' | 'comparison' | 'dialogue' | 'warning' | 'checklist';
  title: BilingualText;
  body: BilingualText;
  keyPoints?: BilingualText[];
  dialogueLines?: Array<{
    speaker: string;
    en: string;
    zh: string;
    subtextZh?: string;
  }>;
  terms?: KeyTerm[];
}

export interface LessonScenarioQuestion {
  id: string;
  prompt: BilingualText;
  options: Array<{
    id: string;
    text: BilingualText;
    isCorrect: boolean;
    feedback: BilingualText;
  }>;
}

export interface Lesson {
  id: string;
  number: number;
  moduleId: string;
  title: BilingualText;
  summary: BilingualText;
  targetLevel: number; // 1..6
  durationMin: number;
  xpReward: number;
  isFlagship: boolean;
  verifiedDate?: string;
  officialSource?: string;
  terms: KeyTerm[];
  cards: LessonCard[];
  quiz: LessonScenarioQuestion[];
  actionTip?: BilingualText;
}

export interface CurriculumModule {
  id: string;
  number: number;
  domain: SkillDomain;
  title: BilingualText;
  subtitle: BilingualText;
  levelRange: string;
  iconName: string;
  accentColor: string;
  linkedFeature?: NavTab;
}

// ---------- Kiwi 直聘 (BOSS 直聘式求职模块) ----------

export type VisaTag =
  | 'AEWV 认证雇主'
  | '绿名单 Tier 1'
  | '绿名单 Tier 2'
  | 'Open Visa / PR'
  | '支持工签转换';

export type JobIndustry =
  | 'IT & Tech'
  | 'Trades & Construction'
  | 'Healthcare'
  | 'Finance & Accounting'
  | 'Education'
  | 'Hospitality & Retail'
  | 'Engineering & Agri'
  | 'Marketing & Operations';

export type WorkMode = 'Onsite' | 'Hybrid' | 'Remote';
export type EmploymentType = 'Permanent' | 'Fixed-term' | 'Contractor';

export interface HiringManager {
  name: string;
  title: string;
  avatarInitials: string;
  avatarColor: string;
  activeLabel: string;
  styleTag: string;
  responseStyle: 'friendly-kiwi' | 'tech-direct' | 'trades-blunt' | 'recruiter-pro';
}

export interface ChatOption {
  id: string;
  text: BilingualText;
  quality: 'great' | 'ok' | 'pitfall';
  scoreDelta: {
    professional: number;
    kiwiNatural: number;
    cultureSafe: number;
  };
  coachFeedbackZh: string;
  betterPhraseEn?: string;
  bossReplyEn: string;
  bossReplyZh: string;
}

export interface ChatStage {
  stageIndex: number;
  stageLabel: string;
  bossPromptEn: string;
  bossPromptZh: string;
  options: ChatOption[];
}

export interface JobPosting {
  id: string;
  title: string;
  titleZh: string;
  company: string;
  companySize: string;
  city: NZCity | 'Remote (NZ)';
  suburb: string;
  industry: JobIndustry;
  employmentType: EmploymentType;
  workMode: WorkMode;
  salaryMin: number; // annual NZD or hourly if isHourly
  salaryMax: number;
  isHourly?: boolean;
  kiwiSaverIncluded: boolean; // true = Total Rem, false = + 3.5% on top
  has90DayTrial?: boolean;
  visaTags: VisaTag[];
  highlightsZh: string[];
  highlightsEn: string[];
  descriptionEn: string;
  descriptionZh: string;
  requirementsEn: string[];
  hiringManager: HiringManager;
  chatScriptId: string;
  postedAgo: string;
}

export interface ChatMessage {
  id: string;
  sender: 'boss' | 'user' | 'system';
  textEn: string;
  textZh?: string;
  timestamp: string;
  isCvCard?: boolean;
  isOfferCard?: boolean;
  coachReview?: {
    quality: 'great' | 'ok' | 'pitfall';
    feedbackZh: string;
    betterPhraseEn?: string;
  };
}

export type ApplicationStatus = 'saved' | 'chatting' | 'interview' | 'offer';

export interface JobChatThread {
  jobId: string;
  status: ApplicationStatus;
  currentStage: number; // 0..N
  completed: boolean;
  cvSent: boolean;
  scores: {
    professional: number;
    kiwiNatural: number;
    cultureSafe: number;
  };
  messages: ChatMessage[];
  updatedAt: string;
}

export interface CandidateCV {
  fullName: string;
  preferredName: string;
  city: NZCity;
  visaStatus: string;
  targetRole: string;
  phone: string;
  email: string;
  linkedin: string;
  summaryEn: string;
  skills: string[];
  experiences: Array<{
    id: string;
    role: string;
    company: string;
    period: string;
    achievements: string[];
  }>;
  education: string;
  nzqaNote: string;
  includeRedFlagPhoto?: boolean;
  includeRedFlagAge?: boolean;
}

// ---------- Language Lab (SM-2 Flashcards) ----------

export type LexiconCategory =
  | 'kiwi-slang'
  | 'workplace-subtext'
  | 'te-reo'
  | 'accent-vowels';

export interface LexiconItem {
  id: string;
  term: string;
  phonetic: string;
  category: LexiconCategory;
  meaningZh: string;
  meaningEn: string;
  exampleEn: string;
  exampleZh: string;
  culturalNoteZh: string;
  tier: BilingualTier;
}

export interface FlashcardProgress {
  itemId: string;
  easeFactor: number; // starts 2.5
  intervalDays: number;
  repetitions: number;
  nextReviewAt: number; // epoch ms
  lastRating?: 'again' | 'hard' | 'good' | 'easy';
}

// ---------- Tools & 2025-2026 Policy Radar ----------

export interface RoadCodeQuestion {
  id: string;
  category: '2026新规' | '让路原则' | '环岛与标志' | '超车与车速' | '驾照与养车';
  isNew2026?: boolean;
  question: BilingualText;
  options: Array<{
    id: string;
    text: BilingualText;
  }>;
  correctOptionId: string;
  explanation: BilingualText;
}

export interface PolicyUpdate {
  id: string;
  category:
    | '移民签证'
    | '雇佣与职场'
    | '税务与KiwiSaver'
    | '租房与房产'
    | '交通与驾照'
    | '医疗与维权'
    | '公民与社会';
  effectiveDate: string;
  titleZh: string;
  titleEn: string;
  oldRuleZh: string;
  newRuleZh: string;
  impactZh: string;
  officialSource: string;
  verifiedDate: string;
  urgency: 'high' | 'medium' | 'info';
}

export interface ChecklistGroup {
  id: string;
  titleZh: string;
  titleEn: string;
  descriptionZh: string;
  items: Array<{
    id: string;
    textZh: string;
    textEn: string;
    tipZh?: string;
    isCustom?: boolean;
  }>;
}

export interface RegionalCityGuide {
  city: NZCity;
  maoriName: string;
  taglineZh: string;
  population: string;
  transportCard: string;
  waterBilling: string;
  anniversaryDay: string;
  keyIndustries: string[];
  climateZh: string;
  housingVibeZh: string;
  prosZh: string[];
  watchOutZh: string[];
}

// ---------- User Profile & Persistence ----------

export interface UserProfile {
  name: string;
  stage: UserStage;
  city: NZCity;
  focusGoals: string[];
  languagePref: LanguagePreference;
  onboardingCompleted: boolean;
  preferredVoiceUri?: string;
}

export interface GitHubSyncConfig {
  owner: string;
  repo: string;
  branch: string;
  contentPath: string;
}

export interface ContentManifest {
  version: string;
  updatedAt: string;
  descriptionZh?: string;
  modules: Array<{
    moduleId: string;
    file: string;
    lessonCount: number;
  }>;
  policiesFile?: string;
}

export interface SyncedContentCache {
  version: string;
  syncedAt: string;
  sourceRepo: string;
  lessons: Lesson[];
  policies: PolicyUpdate[];
}

export interface AppState {
  profile: UserProfile;
  xp: number;
  streakDays: number;
  lastActiveDate: string; // YYYY-MM-DD
  completedLessonIds: string[];
  lessonQuizScores: Record<string, number>;
  dailyChallengeDoneDate: string | null;
  flashcards: Record<string, FlashcardProgress>;
  roadCodeWrongIds: string[];
  roadCodeBestScore: number;
  checkedItemIds: string[];
  customChecklistItems: Record<string, Array<{ id: string; textZh: string; textEn: string }>>;
  savedJobIds: string[];
  jobThreads: Record<string, JobChatThread>;
  cv: CandidateCV;
  importedPolicies: PolicyUpdate[];
  unlockedBadges: string[];
  githubConfig: GitHubSyncConfig;
  syncedContent: SyncedContentCache | null;
}
