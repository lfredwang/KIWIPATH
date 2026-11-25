import React, { useMemo, useState } from 'react';
import {
  Calculator,
  Car,
  CheckSquare,
  Copy,
  PhoneCall,
  Plus,
  ShieldAlert,
  Trash2,
  Upload,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { calculateNZTakeHome2026, formatNZD } from '../services/taxCalculator';
import { ROAD_CODE_QUESTIONS } from '../data/tools/roadCodeData';
import { CHECKLIST_GROUPS } from '../data/tools/checklists';
import { NZ_DIRECTORY } from '../data/tools/directory';
import { validatePolicyPatch } from '../services/storage';
import { BilingualBlock } from '../components/BilingualBlock';

type ToolTab = 'tax' | 'road' | 'checklist' | 'policy' | 'directory';

export const ToolsPage: React.FC = () => {
  const {
    state,
    allPolicies,
    effectiveTier,
    recordRoadCodeResult,
    toggleChecklistItem,
    addCustomChecklistItem,
    deleteCustomChecklistItem,
    importPolicies,
    showToast,
  } = useApp();

  const [toolTab, setToolTab] = useState<ToolTab>('tax');

  // --- 1. Tax Calculator State ---
  const [taxMode, setTaxMode] = useState<'annual' | 'hourly'>('annual');
  const [taxAmount, setTaxAmount] = useState<number>(100000);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(40);
  const [ksRate, setKsRate] = useState<number>(3.5);
  const [isTotalRem, setIsTotalRem] = useState<boolean>(false);
  const [hasStudentLoan, setHasStudentLoan] = useState<boolean>(false);

  const taxRes = useMemo(
    () =>
      calculateNZTakeHome2026({
        mode: taxMode,
        amount: taxAmount,
        hoursPerWeek,
        kiwiSaverRate: ksRate,
        employerKiwiSaverRate: 3.5,
        isTotalRemuneration: isTotalRem,
        hasStudentLoan,
      }),
    [taxMode, taxAmount, hoursPerWeek, ksRate, isTotalRem, hasStudentLoan]
  );

  // --- 2. Road Code Quiz State ---
  const [roadFilter, setRoadFilter] = useState<'ALL' | '2026' | 'WRONG'>('ALL');
  const [roadAnswers, setRoadAnswers] = useState<Record<string, string>>({});
  const [roadSubmitted, setRoadSubmitted] = useState(false);

  const roadList = useMemo(() => {
    if (roadFilter === '2026') return ROAD_CODE_QUESTIONS.filter((q) => q.isNew2026);
    if (roadFilter === 'WRONG') {
      return ROAD_CODE_QUESTIONS.filter((q) => state.roadCodeWrongIds.includes(q.id));
    }
    return ROAD_CODE_QUESTIONS;
  }, [roadFilter, state.roadCodeWrongIds]);

  const handleSubmitRoad = () => {
    if (roadList.length === 0) return;
    let correct = 0;
    const wrong = new Set<string>(state.roadCodeWrongIds);
    for (const q of roadList) {
      if (roadAnswers[q.id] === q.correctOptionId) {
        correct += 1;
        wrong.delete(q.id);
      } else {
        wrong.add(q.id);
      }
    }
    const pct = Math.round((correct / roadList.length) * 100);
    setRoadSubmitted(true);
    recordRoadCodeResult(Array.from(wrong), pct);
    showToast(`交规测验完成：正确率 ${pct}%（${correct}/${roadList.length}）`);
  };

  // --- 3. Checklist State ---
  const [activeGroupId, setActiveGroupId] = useState(CHECKLIST_GROUPS[0].id);
  const [newItemZh, setNewItemZh] = useState('');
  const activeGroup = CHECKLIST_GROUPS.find((g) => g.id === activeGroupId) ?? CHECKLIST_GROUPS[0];
  const customItems = state.customChecklistItems[activeGroup.id] ?? [];
  const allGroupItems = [...activeGroup.items, ...customItems.map((c) => ({ ...c, isCustom: true }))];

  // --- 4. Policy Radar State ---
  const [policyCategory, setPolicyCategory] = useState('ALL');
  const [policyPatchError, setPolicyPatchError] = useState('');

  const policyCategories = useMemo(
    () => ['ALL', ...Array.from(new Set(allPolicies.map((p) => p.category)))],
    [allPolicies]
  );
  const filteredPolicies = useMemo(
    () =>
      policyCategory === 'ALL'
        ? allPolicies
        : allPolicies.filter((p) => p.category === policyCategory),
    [allPolicies, policyCategory]
  );

  const handlePolicyFileImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPolicyPatchError('');
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result));
        const res = validatePolicyPatch(parsed);
        if (!res.ok || !res.data) {
          setPolicyPatchError(res.error ?? '政策 JSON 格式校验失败');
          return;
        }
        importPolicies(res.data);
      } catch {
        setPolicyPatchError('无法解析 JSON 文件，请检查语法是否正确。');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  // --- 5. Directory State ---
  const [dirCat, setDirCat] = useState('ALL');
  const dirCategories = useMemo(
    () => ['ALL', ...Array.from(new Set(NZ_DIRECTORY.map((d) => d.category)))],
    []
  );
  const filteredDir = useMemo(
    () => (dirCat === 'ALL' ? NZ_DIRECTORY : NZ_DIRECTORY.filter((d) => d.category === dirCat)),
    [dirCat]
  );

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      showToast(`已复制：${text}`);
    } catch {
      showToast(`请手动复制：${text}`, 'info');
    }
  };

  return (
    <div className="space-y-5">
      {/* Sub-Tabs */}
      <div className="flex flex-wrap gap-2">
        {(
          [
            { id: 'tax', label: '2026 税薪计算器', icon: Calculator },
            { id: 'road', label: '交规刷题 (2026新规)', icon: Car },
            { id: 'checklist', label: '全周期生活清单', icon: CheckSquare },
            { id: 'policy', label: '2025–2026 政策雷达', icon: ShieldAlert },
            { id: 'directory', label: '本地 App 与紧急黄页', icon: PhoneCall },
          ] as const
        ).map((t) => {
          const Icon = t.icon;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setToolTab(t.id)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition ${
                toolTab === t.id
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

      {/* 1. 2026 Tax & KiwiSaver Calculator */}
      {toolTab === 'tax' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
            <div>
              <h2 className="text-base font-bold text-ink-900">2026/27 新西兰税后工资 & KiwiSaver 计算器</h2>
              <p className="text-xs text-ink-500 mt-0.5">
                内置 2026 五档个税、ACC 1.67%（上限 $152,790）与 KiwiSaver 3.5% 新规
              </p>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => {
                  setTaxMode('annual');
                  setTaxAmount(100000);
                }}
                className={`flex-1 py-2 rounded-xl text-xs font-semibold border ${
                  taxMode === 'annual'
                    ? 'bg-fern-900 text-white border-fern-900'
                    : 'bg-slate-50 text-ink-700 border-slate-200'
                }`}
              >
                按年薪计算
              </button>
              <button
                type="button"
                onClick={() => {
                  setTaxMode('hourly');
                  setTaxAmount(35);
                }}
                className={`flex-1 py-2 rounded-xl text-xs font-semibold border ${
                  taxMode === 'hourly'
                    ? 'bg-fern-900 text-white border-fern-900'
                    : 'bg-slate-50 text-ink-700 border-slate-200'
                }`}
              >
                按时薪计算
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <label className="space-y-1">
                <span className="font-semibold text-ink-700">
                  {taxMode === 'annual' ? '税前年薪 (NZ$)' : '税前时薪 (NZ$/hr)'}
                </span>
                <input
                  type="number"
                  min={0}
                  step={taxMode === 'annual' ? 1000 : 0.5}
                  value={taxAmount}
                  onChange={(e) => setTaxAmount(Number(e.target.value) || 0)}
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm font-mono"
                />
              </label>
              <label className="space-y-1">
                <span className="font-semibold text-ink-700">每周工时</span>
                <input
                  type="number"
                  min={1}
                  max={80}
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value) || 40)}
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm font-mono"
                />
              </label>
            </div>

            <div className="space-y-1.5 text-xs">
              <div className="font-semibold text-ink-700">个人 KiwiSaver 比例</div>
              <div className="flex flex-wrap gap-1.5">
                {[0, 3, 3.5, 4, 6, 8, 10].map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setKsRate(r)}
                    className={`px-3 py-1.5 rounded-lg font-mono border ${
                      ksRate === r
                        ? 'bg-fern-900 text-white border-fern-900'
                        : 'bg-white text-ink-700 border-slate-200'
                    }`}
                  >
                    {r}%
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isTotalRem}
                  onChange={(e) => setIsTotalRem(e.target.checked)}
                />
                <span>Total Remuneration（总包内扣除雇主 3.5% KiwiSaver）</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasStudentLoan}
                  onChange={(e) => setHasStudentLoan(e.target.checked)}
                />
                <span>有新西兰本地学生贷款（超 $24,128 扣 12%）</span>
              </label>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center">
              <div className="rounded-xl bg-fern-900 text-white p-3">
                <div className="text-[11px] text-fern-100">税后年薪</div>
                <div className="text-sm font-bold font-mono mt-0.5">{formatNZD(taxRes.netAnnual)}</div>
              </div>
              <div className="rounded-xl bg-fern-50 border border-fern-100 p-3">
                <div className="text-[11px] text-ink-500">税后月薪</div>
                <div className="text-sm font-bold font-mono text-fern-900 mt-0.5">
                  {formatNZD(taxRes.netMonthly)}
                </div>
              </div>
              <div className="rounded-xl bg-fern-50 border border-fern-100 p-3">
                <div className="text-[11px] text-ink-500">双周到手</div>
                <div className="text-sm font-bold font-mono text-fern-900 mt-0.5">
                  {formatNZD(taxRes.netFortnightly)}
                </div>
              </div>
              <div className="rounded-xl bg-fern-50 border border-fern-100 p-3">
                <div className="text-[11px] text-ink-500">每周到手</div>
                <div className="text-sm font-bold font-mono text-fern-900 mt-0.5">
                  {formatNZD(taxRes.netWeekly)}
                </div>
              </div>
            </div>

            <div className="divide-y divide-slate-100 text-xs">
              {[
                ['应税基础年薪 Base Salary', formatNZD(taxRes.baseSalaryForTax, 2)],
                ['PAYE 个人所得税', `- ${formatNZD(taxRes.payeTax, 2)}`],
                ['ACC 意外险征费 (1.67%)', `- ${formatNZD(taxRes.accLevy, 2)}`],
                ['个人 KiwiSaver 扣缴', `- ${formatNZD(taxRes.employeeKiwiSaver, 2)}`],
                ['雇主 KiwiSaver 配捐 (税前)', `+ ${formatNZD(taxRes.employerKiwiSaver, 2)}`],
                ['2026 政府 KiwiSaver 年度补贴', `+ ${formatNZD(taxRes.govtKiwiSaverContribution, 2)}`],
                ...(taxRes.studentLoan > 0
                  ? [['学生贷款扣缴', `- ${formatNZD(taxRes.studentLoan, 2)}`]]
                  : []),
                ['实际综合税费率 (PAYE+ACC)', `${taxRes.effectiveTaxRate.toFixed(1)}%`],
              ].map(([k, v]) => (
                <div key={k} className="py-2 flex items-center justify-between">
                  <span className="text-ink-600">{k}</span>
                  <span className="font-mono font-semibold text-ink-900">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 2. Road Code Quiz */}
      {toolTab === 'road' && (
        <div className="space-y-4">
          <div className="bg-white rounded-2xl border border-slate-200 p-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2">
              {(
                [
                  { id: 'ALL', label: `全部题库 (${ROAD_CODE_QUESTIONS.length})` },
                  {
                    id: '2026',
                    label: `2026.10 新交规专项 (${ROAD_CODE_QUESTIONS.filter((q) => q.isNew2026).length})`,
                  },
                  { id: 'WRONG', label: `错题本 (${state.roadCodeWrongIds.length})` },
                ] as const
              ).map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => {
                    setRoadFilter(f.id);
                    setRoadAnswers({});
                    setRoadSubmitted(false);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold border ${
                    roadFilter === f.id
                      ? 'bg-fern-900 text-white border-fern-900'
                      : 'bg-slate-50 text-ink-700 border-slate-200'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
            <div className="text-xs font-semibold text-fern-800">
              历史最高正确率：{state.roadCodeBestScore}%
            </div>
          </div>

          {roadList.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center text-sm text-ink-500">
              错题本为空，太棒了！切换到全部题库或 2026 新交规继续刷题吧。
            </div>
          ) : (
            <div className="space-y-4">
              {roadList.map((q, idx) => {
                const picked = roadAnswers[q.id];
                return (
                  <div
                    key={q.id}
                    className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-fern-800">
                        第 {idx + 1} 题 · {q.category}
                      </span>
                      {q.isNew2026 && (
                        <span className="bg-amber-100 text-amber-900 font-semibold px-2 py-0.5 rounded-full">
                          2026 新规
                        </span>
                      )}
                    </div>
                    <BilingualBlock
                      text={q.question}
                      tier={effectiveTier}
                      primaryClassName="text-sm font-bold text-ink-900"
                      secondaryClassName="text-xs text-ink-500"
                    />
                    <div className="space-y-2">
                      {q.options.map((opt) => {
                        const isSel = picked === opt.id;
                        const isRight = opt.id === q.correctOptionId;
                        let cls = 'border-slate-200 hover:border-fern-400';
                        if (roadSubmitted) {
                          if (isRight) cls = 'border-emerald-500 bg-emerald-50';
                          else if (isSel) cls = 'border-rose-400 bg-rose-50';
                        } else if (isSel) {
                          cls = 'border-fern-700 bg-fern-50 ring-1 ring-fern-700';
                        }
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            disabled={roadSubmitted}
                            onClick={() => setRoadAnswers((p) => ({ ...p, [q.id]: opt.id }))}
                            className={`w-full text-left rounded-xl border p-3 text-xs transition ${cls}`}
                          >
                            <BilingualBlock text={opt.text} tier={effectiveTier} compact />
                          </button>
                        );
                      })}
                    </div>
                    {roadSubmitted && (
                      <div className="rounded-xl bg-alps-50 border border-slate-200 p-3 text-xs text-ink-700">
                        <strong>官方规则解析：</strong> {q.explanation.zh}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="flex justify-end gap-2">
                {roadSubmitted ? (
                  <button
                    type="button"
                    onClick={() => {
                      setRoadAnswers({});
                      setRoadSubmitted(false);
                    }}
                    className="px-5 py-2.5 rounded-xl bg-fern-900 text-white text-sm font-semibold"
                  >
                    重新作答本组
                  </button>
                ) : (
                  <button
                    type="button"
                    disabled={Object.keys(roadAnswers).length === 0}
                    onClick={handleSubmitRoad}
                    className="px-6 py-2.5 rounded-xl bg-fern-900 text-white text-sm font-semibold hover:bg-fern-800 disabled:opacity-40"
                  >
                    提交判卷（已答 {Object.keys(roadAnswers).length}/{roadList.length}）
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* 3. Full-Lifecycle Checklists */}
      {toolTab === 'checklist' && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="space-y-2">
            {CHECKLIST_GROUPS.map((g) => {
              const items = [...g.items, ...(state.customChecklistItems[g.id] ?? [])];
              const done = items.filter((i) => state.checkedItemIds.includes(i.id)).length;
              return (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => setActiveGroupId(g.id)}
                  className={`w-full text-left rounded-xl border p-3 transition ${
                    activeGroup.id === g.id
                      ? 'bg-fern-900 text-white border-fern-900'
                      : 'bg-white text-ink-800 border-slate-200 hover:border-fern-400'
                  }`}
                >
                  <div className="text-xs font-bold">{g.titleZh}</div>
                  <div
                    className={`text-[11px] mt-0.5 ${
                      activeGroup.id === g.id ? 'text-fern-100' : 'text-ink-500'
                    }`}
                  >
                    已完成 {done} / {items.length}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
            <div>
              <h2 className="text-base font-bold text-ink-900">{activeGroup.titleZh}</h2>
              <p className="text-xs text-ink-500 mt-0.5">{activeGroup.descriptionZh}</p>
            </div>

            <div className="space-y-2">
              {allGroupItems.map((item) => {
                const checked = state.checkedItemIds.includes(item.id);
                return (
                  <div
                    key={item.id}
                    className={`rounded-xl border p-3 flex items-start justify-between gap-3 transition ${
                      checked ? 'bg-emerald-50/60 border-emerald-200' : 'bg-white border-slate-200'
                    }`}
                  >
                    <label className="flex items-start gap-2.5 cursor-pointer flex-1">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleChecklistItem(item.id)}
                        className="mt-1"
                      />
                      <div>
                        <div
                          className={`text-sm font-medium ${
                            checked ? 'line-through text-ink-400' : 'text-ink-900'
                          }`}
                        >
                          {item.textZh}
                        </div>
                        {'tipZh' in item && item.tipZh && (
                          <div className="text-xs text-ink-500 mt-0.5">💡 {item.tipZh}</div>
                        )}
                      </div>
                    </label>
                    {item.isCustom && (
                      <button
                        type="button"
                        onClick={() => deleteCustomChecklistItem(activeGroup.id, item.id)}
                        className="text-ink-400 hover:text-rose-600 p-1"
                        aria-label="删除自定义项"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                );
              })}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!newItemZh.trim()) return;
                addCustomChecklistItem(activeGroup.id, newItemZh, newItemZh);
                setNewItemZh('');
              }}
              className="flex gap-2 pt-2 border-t border-slate-100"
            >
              <input
                type="text"
                value={newItemZh}
                onChange={(e) => setNewItemZh(e.target.value)}
                placeholder="在此分类下新增一条个人待办事项..."
                className="flex-1 rounded-xl border border-slate-200 px-3 py-2 text-sm"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-1 px-4 py-2 rounded-xl bg-fern-900 text-white text-xs font-semibold hover:bg-fern-800"
              >
                <Plus className="w-4 h-4" />
                添加
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 4. 2025-2026 Policy Radar */}
      {toolTab === 'policy' && (
        <div className="space-y-4">
          <div className="bg-white rounded-2xl border border-slate-200 p-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-1.5">
              {policyCategories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setPolicyCategory(c)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${
                    policyCategory === c
                      ? 'bg-fern-900 text-white border-fern-900'
                      : 'bg-slate-50 text-ink-700 border-slate-200'
                  }`}
                >
                  {c === 'ALL' ? `全部新政 (${allPolicies.length})` : c}
                </button>
              ))}
            </div>

            <label className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-fern-300 bg-fern-50 text-fern-900 text-xs font-semibold cursor-pointer hover:bg-fern-100">
              <Upload className="w-3.5 h-3.5" />
              导入离线 JSON 政策更新包
              <input
                type="file"
                accept="application/json"
                onChange={handlePolicyFileImport}
                className="hidden"
              />
            </label>
          </div>

          {policyPatchError && (
            <div className="rounded-xl bg-rose-50 border border-rose-200 p-3 text-xs text-rose-800">
              导入校验未通过：{policyPatchError}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredPolicies.map((pol) => (
              <div
                key={pol.id}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3"
              >
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="font-bold text-fern-800 bg-fern-50 px-2.5 py-0.5 rounded-full">
                    {pol.category}
                  </span>
                  <span className="font-mono text-ink-500">生效：{pol.effectiveDate}</span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-ink-900">{pol.titleZh}</h3>
                  <div className="text-xs text-ink-500">{pol.titleEn}</div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="rounded-xl bg-slate-50 border border-slate-200 p-2.5">
                    <div className="font-semibold text-ink-500 mb-0.5">旧规</div>
                    <div className="text-ink-700">{pol.oldRuleZh}</div>
                  </div>
                  <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-2.5">
                    <div className="font-semibold text-emerald-800 mb-0.5">最新规则</div>
                    <div className="text-emerald-950 font-medium">{pol.newRuleZh}</div>
                  </div>
                </div>
                <div className="text-xs text-amber-900 bg-amber-50 border border-amber-200 rounded-xl p-2.5">
                  <strong>对你的影响：</strong> {pol.impactZh}
                </div>
                <div className="text-[11px] text-ink-400 flex justify-between">
                  <span>出处：{pol.officialSource}</span>
                  <span>核验：{pol.verifiedDate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. Local Apps & Emergency Directory */}
      {toolTab === 'directory' && (
        <div className="space-y-4">
          <div className="flex flex-wrap gap-1.5">
            {dirCategories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setDirCat(c)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${
                  dirCat === c
                    ? 'bg-fern-900 text-white border-fern-900'
                    : 'bg-white text-ink-700 border-slate-200'
                }`}
              >
                {c === 'ALL' ? `全部黄页 (${NZ_DIRECTORY.length})` : c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredDir.map((item) => (
              <div
                key={item.id}
                className={`rounded-2xl border p-4 shadow-xs space-y-2 ${
                  item.isEmergency
                    ? 'bg-rose-50/70 border-rose-300'
                    : 'bg-white border-slate-200'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-semibold text-ink-500">{item.category}</span>
                    <h3 className="text-base font-bold text-ink-900">{item.name}</h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(item.contactOrUrl)}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-mono font-semibold text-fern-900 hover:bg-fern-50 shrink-0"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    {item.contactOrUrl}
                  </button>
                </div>
                <div className="text-xs font-semibold text-ink-800">{item.taglineZh}</div>
                <div className="text-xs text-ink-600 leading-relaxed">{item.detailZh}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
