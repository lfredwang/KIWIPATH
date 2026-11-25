import React, { useMemo, useState } from 'react';
import {
  Bookmark,
  Briefcase,
  FileText,
  Kanban,
  MapPin,
  MessageSquare,
  Search,
  ShieldCheck,
  WifiOff,
} from 'lucide-react';
import { offlineDataProvider } from '../services/dataProvider';
import { useApp } from '../context/AppContext';
import type { JobPosting, VisaTag } from '../types';
import { JobChatModal } from '../components/JobChatModal';
import { CvBuilderPanel } from '../components/CvBuilderPanel';
import { OfferCheckerPanel } from '../components/OfferCheckerPanel';
import { formatNZD } from '../services/taxCalculator';

type JobsTab = 'feed' | 'pipeline' | 'cv' | 'offer';

const VISA_FILTERS: Array<'ALL' | VisaTag> = [
  'ALL',
  'AEWV 认证雇主',
  '绿名单 Tier 1',
  '绿名单 Tier 2',
  'Open Visa / PR',
];

export const JobsPage: React.FC = () => {
  const { state, toggleSaveJob } = useApp();
  const jobs = useMemo(() => offlineDataProvider.getJobs(), []);
  const [subTab, setSubTab] = useState<JobsTab>('feed');
  const [query, setQuery] = useState('');
  const [cityFilter, setCityFilter] = useState('ALL');
  const [visaFilter, setVisaFilter] = useState<'ALL' | VisaTag>('ALL');
  const [activeChatJob, setActiveChatJob] = useState<JobPosting | null>(null);

  const cities = useMemo(
    () => ['ALL', ...Array.from(new Set(jobs.map((j) => j.city)))],
    [jobs]
  );

  const filteredJobs = useMemo(() => {
    const q = query.trim().toLowerCase();
    return jobs.filter((job) => {
      if (cityFilter !== 'ALL' && job.city !== cityFilter) return false;
      if (visaFilter !== 'ALL' && !job.visaTags.includes(visaFilter)) return false;
      if (q) {
        const hay = `${job.title} ${job.titleZh} ${job.company} ${job.industry} ${job.city}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [jobs, query, cityFilter, visaFilter]);

  const formatSalary = (job: JobPosting) =>
    job.isHourly
      ? `NZ$${job.salaryMin}–$${job.salaryMax}/hr`
      : `${formatNZD(job.salaryMin)}–${formatNZD(job.salaryMax)}/年`;

  const pipelineGroups = useMemo(() => {
    const saved = jobs.filter(
      (j) => state.savedJobIds.includes(j.id) && !state.jobThreads[j.id]
    );
    const chatting = jobs.filter((j) => state.jobThreads[j.id]?.status === 'chatting');
    const interview = jobs.filter((j) => state.jobThreads[j.id]?.status === 'interview');
    const offer = jobs.filter((j) => state.jobThreads[j.id]?.status === 'offer');
    return { saved, chatting, interview, offer };
  }, [jobs, state.savedJobIds, state.jobThreads]);

  return (
    <div className="space-y-5">
      {/* Honest Offline Simulation Banner */}
      <div className="rounded-2xl bg-indigo-950 text-white p-5 flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs bg-white/15 text-indigo-100 px-2.5 py-0.5 rounded-full">
            <WifiOff className="w-3.5 h-3.5" />
            离线仿真求职沙盘（V1 本地剧本与 0 成本教练引擎，非实时联网招聘）
          </div>
          <h1 className="text-xl font-bold">Kiwi 直聘 · 新西兰求职实战演练场</h1>
          <p className="text-xs text-indigo-200">
            刷代表性新西兰岗位 → 一键发合规 NZ 简历名片 → 跟老板多轮英文开聊拿教练排雷 → 体检 Offer 合同
          </p>
        </div>
        <div className="text-xs bg-white/10 border border-white/15 rounded-xl px-4 py-2.5 text-right">
          <div className="text-indigo-200">已沟通岗位</div>
          <div className="text-xl font-bold font-mono">{Object.keys(state.jobThreads).length} / {jobs.length}</div>
        </div>
      </div>

      {/* Sub-Tabs */}
      <div className="flex flex-wrap gap-2">
        {(
          [
            { id: 'feed', label: '职位广场', icon: Briefcase },
            { id: 'pipeline', label: '求职看板', icon: Kanban },
            { id: 'cv', label: 'NZ 简历名片', icon: FileText },
            { id: 'offer', label: 'Offer 合同体检器', icon: ShieldCheck },
          ] as const
        ).map((t) => {
          const Icon = t.icon;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setSubTab(t.id)}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold border transition ${
                subTab === t.id
                  ? 'bg-fern-900 text-white border-fern-900'
                  : 'bg-white text-ink-700 border-slate-200 hover:border-fern-400'
              }`}
            >
              <Icon className="w-4 h-4" />
              {t.label}
            </button>
          );
        })}
      </div>

      {/* 1. Job Feed */}
      {subTab === 'feed' && (
        <div className="space-y-4">
          <div className="bg-white rounded-2xl border border-slate-200 p-4 flex flex-wrap items-center gap-3">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="w-4 h-4 text-ink-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="搜索岗位、行业、城市..."
                className="w-full rounded-xl border border-slate-200 pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-fern-600"
              />
            </div>

            <select
              value={cityFilter}
              onChange={(e) => setCityFilter(e.target.value)}
              className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-medium bg-white"
            >
              {cities.map((c) => (
                <option key={c} value={c}>
                  {c === 'ALL' ? '全部城市' : c}
                </option>
              ))}
            </select>

            <div className="flex flex-wrap gap-1.5">
              {VISA_FILTERS.map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setVisaFilter(v)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-medium border transition ${
                    visaFilter === v
                      ? 'bg-fern-900 text-white border-fern-900'
                      : 'bg-slate-50 text-ink-700 border-slate-200'
                  }`}
                >
                  {v === 'ALL' ? '全部签证标签' : v}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredJobs.map((job) => {
              const saved = state.savedJobIds.includes(job.id);
              const thread = state.jobThreads[job.id];
              return (
                <div
                  key={job.id}
                  className="bg-white rounded-2xl border border-slate-200 hover:border-fern-400 p-5 shadow-xs flex flex-col justify-between gap-4 transition"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-base font-bold text-ink-900">{job.title}</h3>
                        <div className="text-xs text-ink-500">
                          {job.titleZh} · {job.company}（{job.companySize}）
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => toggleSaveJob(job.id)}
                        className={`p-2 rounded-xl border transition ${
                          saved
                            ? 'bg-amber-50 border-amber-300 text-amber-600'
                            : 'bg-slate-50 border-slate-200 text-ink-400 hover:text-ink-700'
                        }`}
                        aria-label="收藏岗位"
                      >
                        <Bookmark className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="font-bold text-fern-800 bg-fern-50 border border-fern-100 px-2.5 py-0.5 rounded-full">
                        {formatSalary(job)}
                      </span>
                      <span className="text-ink-600 inline-flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {job.city} · {job.workMode}
                      </span>
                      <span className="text-[11px] bg-slate-100 text-ink-700 px-2 py-0.5 rounded-md">
                        {job.kiwiSaverIncluded ? 'Total Rem (含 KS)' : '+3.5% KiwiSaver'}
                      </span>
                      {job.has90DayTrial && (
                        <span className="text-[11px] bg-amber-50 text-amber-800 px-2 py-0.5 rounded-md">
                          含 90 天试用期
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {job.visaTags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-medium bg-tasman-100 text-tasman-700 px-2 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-xs text-ink-600 leading-relaxed">{job.descriptionZh}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 min-w-0">
                      <div
                        className="w-8 h-8 rounded-full text-white text-xs font-bold flex items-center justify-center shrink-0"
                        style={{ backgroundColor: job.hiringManager.avatarColor }}
                      >
                        {job.hiringManager.avatarInitials}
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-semibold text-ink-900 truncate">
                          {job.hiringManager.name}
                        </div>
                        <div className="text-[11px] text-ink-500 truncate">
                          {job.hiringManager.styleTag}
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveChatJob(job)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-fern-900 text-white text-xs font-semibold hover:bg-fern-800 transition shrink-0"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      {thread ? '继续直聊' : '立即沟通'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 2. Pipeline */}
      {subTab === 'pipeline' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {(
            [
              { key: 'saved', title: '⭐ 已收藏', list: pipelineGroups.saved },
              { key: 'chatting', title: '💬 沟通中', list: pipelineGroups.chatting },
              { key: 'interview', title: '📅 待面试', list: pipelineGroups.interview },
              { key: 'offer', title: '🎉 已拿模拟 Offer', list: pipelineGroups.offer },
            ] as const
          ).map((col) => (
            <div
              key={col.key}
              className="bg-white rounded-2xl border border-slate-200 p-4 space-y-3 min-h-[240px]"
            >
              <div className="flex items-center justify-between text-sm font-bold text-ink-900">
                <span>{col.title}</span>
                <span className="text-xs font-mono bg-slate-100 px-2 py-0.5 rounded-full">
                  {col.list.length}
                </span>
              </div>
              {col.list.length === 0 ? (
                <div className="text-xs text-ink-400 py-8 text-center">暂无岗位</div>
              ) : (
                <div className="space-y-2.5">
                  {col.list.map((job) => (
                    <button
                      key={job.id}
                      type="button"
                      onClick={() => setActiveChatJob(job)}
                      className="w-full text-left rounded-xl bg-alps-50 hover:bg-fern-50 border border-slate-200 p-3 space-y-1 transition"
                    >
                      <div className="text-xs font-bold text-ink-900">{job.title}</div>
                      <div className="text-[11px] text-ink-500">
                        {job.company} · {job.city}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* 3. NZ CV Builder */}
      {subTab === 'cv' && <CvBuilderPanel />}

      {/* 4. Offer Checker */}
      {subTab === 'offer' && <OfferCheckerPanel />}

      {/* Active Boss Chat Modal */}
      {activeChatJob && (
        <JobChatModal job={activeChatJob} onClose={() => setActiveChatJob(null)} />
      )}
    </div>
  );
};
