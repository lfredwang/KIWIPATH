import React, { useState } from 'react';
import { AlertTriangle, CheckCircle2, Printer, Save } from 'lucide-react';
import type { CandidateCV, NZCity } from '../types';
import { useApp } from '../context/AppContext';

const CITIES: NZCity[] = [
  'Auckland',
  'Wellington',
  'Christchurch',
  'Hamilton',
  'Tauranga',
  'Queenstown',
  'Dunedin',
];

export const CvBuilderPanel: React.FC = () => {
  const { state, updateCv } = useApp();
  const [draft, setDraft] = useState<CandidateCV>(state.cv);
  const [skillsText, setSkillsText] = useState(state.cv.skills.join(', '));

  const hasRedFlags = Boolean(draft.includeRedFlagPhoto || draft.includeRedFlagAge);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanedSkills = skillsText
      .split(/[,，]/)
      .map((s) => s.trim())
      .filter(Boolean);
    const next = { ...draft, skills: cleanedSkills };
    setDraft(next);
    updateCv(next);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      {/* Left Editor */}
      <form
        onSubmit={handleSave}
        className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4"
      >
        <div className="flex items-center justify-between gap-2">
          <div>
            <h2 className="text-base font-bold text-ink-900">NZ 简历名片编辑器</h2>
            <p className="text-xs text-ink-500">
              所有内容仅保存在本机浏览器，用于直聊一键投递或导出 PDF
            </p>
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-fern-900 text-white text-xs font-semibold hover:bg-fern-800 transition"
          >
            <Save className="w-3.5 h-3.5" />
            保存名片
          </button>
        </div>

        {/* NZ Privacy Compliance Guard */}
        <div
          className={`rounded-xl border p-3.5 space-y-2 text-xs ${
            hasRedFlags
              ? 'bg-rose-50 border-rose-300 text-rose-900'
              : 'bg-emerald-50 border-emerald-200 text-emerald-900'
          }`}
        >
          <div className="font-bold flex items-center gap-1.5">
            {hasRedFlags ? (
              <>
                <AlertTriangle className="w-4 h-4 text-rose-600" />
                合规警报：触发新西兰《人权法》简历隐私雷区！
              </>
            ) : (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                合规通过：符合新西兰本地 CV 规范（无照片、无年龄/婚育）
              </>
            )}
          </div>
          <div className="flex flex-wrap gap-4 pt-1">
            <label className="inline-flex items-center gap-1.5 cursor-pointer">
              <input
                type="checkbox"
                checked={Boolean(draft.includeRedFlagPhoto)}
                onChange={(e) => setDraft({ ...draft, includeRedFlagPhoto: e.target.checked })}
              />
              附带个人证件照（不建议）
            </label>
            <label className="inline-flex items-center gap-1.5 cursor-pointer">
              <input
                type="checkbox"
                checked={Boolean(draft.includeRedFlagAge)}
                onChange={(e) => setDraft({ ...draft, includeRedFlagAge: e.target.checked })}
              />
              标注年龄/性别/婚育（不建议）
            </label>
          </div>
          {hasRedFlags && (
            <div className="text-[11px] leading-relaxed">
              新西兰雇主为避免触犯《人权法》（Human Rights Act）反歧视条例，高度排斥含照片、出生年月、婚姻状况的简历，强烈建议取消勾选！
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <label className="space-y-1">
            <span className="font-semibold text-ink-700">英文全名 Full Name</span>
            <input
              type="text"
              value={draft.fullName}
              onChange={(e) => setDraft({ ...draft, fullName: e.target.value })}
              className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
            />
          </label>
          <label className="space-y-1">
            <span className="font-semibold text-ink-700">目标岗位 Target Role</span>
            <input
              type="text"
              value={draft.targetRole}
              onChange={(e) => setDraft({ ...draft, targetRole: e.target.value })}
              className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
            />
          </label>
          <label className="space-y-1">
            <span className="font-semibold text-ink-700">所在城市 City</span>
            <select
              value={draft.city}
              onChange={(e) => setDraft({ ...draft, city: e.target.value as NZCity })}
              className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm bg-white"
            >
              {CITIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>
          <label className="space-y-1">
            <span className="font-semibold text-ink-700">工作签证与权利 Work Rights</span>
            <input
              type="text"
              value={draft.visaStatus}
              onChange={(e) => setDraft({ ...draft, visaStatus: e.target.value })}
              className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
            />
          </label>
          <label className="space-y-1">
            <span className="font-semibold text-ink-700">电话 Phone</span>
            <input
              type="text"
              value={draft.phone}
              onChange={(e) => setDraft({ ...draft, phone: e.target.value })}
              className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
            />
          </label>
          <label className="space-y-1">
            <span className="font-semibold text-ink-700">邮箱 Email</span>
            <input
              type="email"
              value={draft.email}
              onChange={(e) => setDraft({ ...draft, email: e.target.value })}
              className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
            />
          </label>
        </div>

        <label className="block space-y-1 text-xs">
          <span className="font-semibold text-ink-700">职业简介 Professional Summary（英文）</span>
          <textarea
            rows={3}
            value={draft.summaryEn}
            onChange={(e) => setDraft({ ...draft, summaryEn: e.target.value })}
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
          />
        </label>

        <label className="block space-y-1 text-xs">
          <span className="font-semibold text-ink-700">核心技能（逗号分隔）</span>
          <input
            type="text"
            value={skillsText}
            onChange={(e) => setSkillsText(e.target.value)}
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
          />
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <label className="space-y-1">
            <span className="font-semibold text-ink-700">学历 Education</span>
            <input
              type="text"
              value={draft.education}
              onChange={(e) => setDraft({ ...draft, education: e.target.value })}
              className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
            />
          </label>
          <label className="space-y-1">
            <span className="font-semibold text-ink-700">NZQA 认证备注</span>
            <input
              type="text"
              value={draft.nzqaNote}
              onChange={(e) => setDraft({ ...draft, nzqaNote: e.target.value })}
              className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
            />
          </label>
        </div>
      </form>

      {/* Right Print-Ready NZ CV Preview */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-ink-600">新西兰标准版预览（A4 打印就绪）</span>
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-ink-800 hover:bg-slate-50 transition"
          >
            <Printer className="w-3.5 h-3.5" />
            打印 / 导出 PDF
          </button>
        </div>

        <div
          id="nz-cv-print-area"
          className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4 text-ink-900"
        >
          <div className="border-b-2 border-fern-900 pb-3">
            <h3 className="text-xl font-bold tracking-tight">{draft.fullName}</h3>
            <div className="text-sm font-semibold text-fern-800">{draft.targetRole}</div>
            <div className="text-xs text-ink-500 mt-1 flex flex-wrap gap-x-3 gap-y-1">
              <span>{draft.city}, New Zealand</span>
              <span>• {draft.phone}</span>
              <span>• {draft.email}</span>
              {draft.linkedin && <span>• {draft.linkedin}</span>}
            </div>
            <div className="mt-2 inline-block text-[11px] font-semibold bg-fern-50 text-fern-900 border border-fern-200 px-2.5 py-0.5 rounded-md">
              Work Rights: {draft.visaStatus}
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-xs font-bold uppercase tracking-wider text-fern-900">
              Profile Summary
            </div>
            <p className="text-xs text-ink-700 leading-relaxed">{draft.summaryEn}</p>
          </div>

          <div className="space-y-1.5">
            <div className="text-xs font-bold uppercase tracking-wider text-fern-900">
              Core Skills
            </div>
            <div className="flex flex-wrap gap-1.5">
              {draft.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-[11px] bg-slate-100 text-ink-800 px-2 py-0.5 rounded-md font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-2.5">
            <div className="text-xs font-bold uppercase tracking-wider text-fern-900">
              Key Experience & Quantified Outcomes
            </div>
            {draft.experiences.map((exp) => (
              <div key={exp.id} className="space-y-1">
                <div className="flex justify-between text-xs font-bold">
                  <span>
                    {exp.role} — {exp.company}
                  </span>
                  <span className="text-ink-500 font-normal">{exp.period}</span>
                </div>
                <ul className="list-disc pl-4 text-xs text-ink-700 space-y-0.5">
                  {exp.achievements.map((a, idx) => (
                    <li key={idx}>{a}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="space-y-1 pt-2 border-t border-slate-100 text-xs">
            <div className="font-bold uppercase tracking-wider text-fern-900">
              Education & Referees
            </div>
            <div className="text-ink-800 font-medium">{draft.education}</div>
            {draft.nzqaNote && <div className="text-ink-500">{draft.nzqaNote}</div>}
            <div className="text-ink-500 italic pt-1">Referees available upon request.</div>
          </div>
        </div>
      </div>
    </div>
  );
};
