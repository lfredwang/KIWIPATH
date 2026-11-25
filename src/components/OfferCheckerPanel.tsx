import React, { useMemo, useState } from 'react';
import { AlertTriangle, CheckCircle2, ShieldCheck } from 'lucide-react';
import {
  calculateNZTakeHome2026,
  formatNZD,
  NZ_2026_MEDIAN_WAGE,
  NZ_2026_MIN_WAGE,
} from '../services/taxCalculator';

export const OfferCheckerPanel: React.FC = () => {
  const [mode, setMode] = useState<'annual' | 'hourly'>('annual');
  const [amount, setAmount] = useState<number>(95000);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(40);
  const [kiwiSaverRate, setKiwiSaverRate] = useState<number>(3.5);
  const [isTotalRem, setIsTotalRem] = useState<boolean>(false);
  const [has90DayTrial, setHas90DayTrial] = useState<boolean>(true);
  const [signedBeforeStart, setSignedBeforeStart] = useState<boolean>(true);

  const selectedRes = useMemo(
    () =>
      calculateNZTakeHome2026({
        mode,
        amount,
        hoursPerWeek,
        kiwiSaverRate,
        employerKiwiSaverRate: 3.5,
        isTotalRemuneration: isTotalRem,
        hasStudentLoan: false,
      }),
    [mode, amount, hoursPerWeek, kiwiSaverRate, isTotalRem]
  );

  const onTopRes = useMemo(
    () =>
      calculateNZTakeHome2026({
        mode,
        amount,
        hoursPerWeek,
        kiwiSaverRate,
        employerKiwiSaverRate: 3.5,
        isTotalRemuneration: false,
        hasStudentLoan: false,
      }),
    [mode, amount, hoursPerWeek, kiwiSaverRate]
  );

  const totalRemRes = useMemo(
    () =>
      calculateNZTakeHome2026({
        mode,
        amount,
        hoursPerWeek,
        kiwiSaverRate,
        employerKiwiSaverRate: 3.5,
        isTotalRemuneration: true,
        hasStudentLoan: false,
      }),
    [mode, amount, hoursPerWeek, kiwiSaverRate]
  );

  const diffAnnualNet = onTopRes.netAnnual - totalRemRes.netAnnual;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
        <div>
          <h2 className="text-base font-bold text-ink-900">2026 新西兰 Offer 合同体检器</h2>
          <p className="text-xs text-ink-500 mt-0.5">
            输入 Offer 薪资与条款，一眼看穿 Total Remuneration 与 90 天试用期避坑点
          </p>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => {
              setMode('annual');
              setAmount(95000);
            }}
            className={`flex-1 py-2 rounded-xl text-xs font-semibold border ${
              mode === 'annual'
                ? 'bg-fern-900 text-white border-fern-900'
                : 'bg-slate-50 text-ink-700 border-slate-200'
            }`}
          >
            按年薪 Annual (NZD)
          </button>
          <button
            type="button"
            onClick={() => {
              setMode('hourly');
              setAmount(38);
            }}
            className={`flex-1 py-2 rounded-xl text-xs font-semibold border ${
              mode === 'hourly'
                ? 'bg-fern-900 text-white border-fern-900'
                : 'bg-slate-50 text-ink-700 border-slate-200'
            }`}
          >
            按时薪 Hourly (NZD)
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 text-xs">
          <label className="space-y-1">
            <span className="font-semibold text-ink-700">
              {mode === 'annual' ? '合同年薪 (NZ$)' : '合同时薪 (NZ$/hr)'}
            </span>
            <input
              type="number"
              min={0}
              step={mode === 'annual' ? 1000 : 0.5}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value) || 0)}
              className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm font-mono"
            />
          </label>
          <label className="space-y-1">
            <span className="font-semibold text-ink-700">每周工时 Hours/wk</span>
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

        <div className="space-y-2 text-xs">
          <div className="font-semibold text-ink-700">KiwiSaver 个人缴存比例（2026.04 起默认 3.5%）</div>
          <div className="flex flex-wrap gap-1.5">
            {[0, 3, 3.5, 4, 6, 8, 10].map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setKiwiSaverRate(r)}
                className={`px-3 py-1.5 rounded-lg font-mono border ${
                  kiwiSaverRate === r
                    ? 'bg-fern-900 text-white border-fern-900'
                    : 'bg-white text-ink-700 border-slate-200'
                }`}
              >
                {r}%
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2.5 pt-2 border-t border-slate-100 text-xs">
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={isTotalRem}
              onChange={(e) => setIsTotalRem(e.target.checked)}
              className="mt-0.5"
            />
            <span>
              <strong>合同写明 Total Remuneration（总包内含雇主 3.5% KiwiSaver）</strong>
            </span>
          </label>
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={has90DayTrial}
              onChange={(e) => setHas90DayTrial(e.target.checked)}
              className="mt-0.5"
            />
            <span>合同包含 90 天试用期（90-Day Trial Period）</span>
          </label>
          {has90DayTrial && (
            <label className="flex items-start gap-2 pl-5 cursor-pointer text-ink-700">
              <input
                type="checkbox"
                checked={signedBeforeStart}
                onChange={(e) => setSignedBeforeStart(e.target.checked)}
                className="mt-0.5"
              />
              <span>我将在正式开工第一分钟前书面签署该合同</span>
            </label>
          )}
        </div>
      </div>

      {/* Diagnostic Report */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-base font-bold text-ink-900">
          <ShieldCheck className="w-5 h-5 text-fern-700" />
          2026 合同体检诊断结果
        </div>

        <div className="grid grid-cols-3 gap-2.5 text-center">
          <div className="rounded-xl bg-fern-50 border border-fern-100 p-3">
            <div className="text-[11px] text-ink-500">税后周薪</div>
            <div className="text-base font-bold font-mono text-fern-900 mt-0.5">
              {formatNZD(selectedRes.netWeekly, 0)}
            </div>
          </div>
          <div className="rounded-xl bg-fern-50 border border-fern-100 p-3">
            <div className="text-[11px] text-ink-500">税后双周薪</div>
            <div className="text-base font-bold font-mono text-fern-900 mt-0.5">
              {formatNZD(selectedRes.netFortnightly, 0)}
            </div>
          </div>
          <div className="rounded-xl bg-fern-50 border border-fern-100 p-3">
            <div className="text-[11px] text-ink-500">税后月薪</div>
            <div className="text-base font-bold font-mono text-fern-900 mt-0.5">
              {formatNZD(selectedRes.netMonthly, 0)}
            </div>
          </div>
        </div>

        <div className="space-y-2.5 text-xs">
          <div
            className={`rounded-xl border p-3 flex items-start gap-2 ${
              selectedRes.aboveMinWage
                ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                : 'bg-rose-50 border-rose-300 text-rose-900'
            }`}
          >
            {selectedRes.aboveMinWage ? (
              <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
            ) : (
              <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
            )}
            <div>
              <strong>折算时薪 {formatNZD(selectedRes.hourlyEquivalent, 2)}/hr：</strong>
              {selectedRes.aboveMinWage
                ? `高于 2026 年法定成人最低工资（NZ$${NZ_2026_MIN_WAGE.toFixed(2)}/hr）。`
                : `⚠️ 低于 2026 年法定最低工资 NZ$${NZ_2026_MIN_WAGE.toFixed(2)}/hr，属违法低薪！`}
              {' '}
              {selectedRes.aboveMedianWage
                ? `且达到 2026 中位数参考线（NZ$${NZ_2026_MEDIAN_WAGE.toFixed(2)}/hr），利于担保配偶及居留路径。`
                : `暂未达到 2026 中位数参考线（NZ$${NZ_2026_MEDIAN_WAGE.toFixed(2)}/hr），如需担保配偶/走居留请核对细则。`}
            </div>
          </div>

          <div className="rounded-xl bg-amber-50 border border-amber-200 p-3 text-amber-900">
            <strong>KiwiSaver 包法差额提醒：</strong>
            同样写着 {formatNZD(selectedRes.grossAnnual, 0)}，若合同为{' '}
            <code className="font-mono">Total Remuneration</code> 而不是{' '}
            <code className="font-mono">+3.5% On Top</code>，你的年度税后现金会少拿约{' '}
            <strong>{formatNZD(diffAnnualNet, 0)}/年</strong>！谈薪时务必问清。
          </div>

          {has90DayTrial && (
            <div
              className={`rounded-xl border p-3 ${
                signedBeforeStart
                  ? 'bg-sky-50 border-sky-200 text-sky-900'
                  : 'bg-rose-50 border-rose-300 text-rose-900'
              }`}
            >
              <strong>90 天试用期核查：</strong>
              {signedBeforeStart
                ? '该条款在入职前书面签署且针对全新雇员时具备法律效力，试用期内雇主可按通知期解约且通常不能提无理解雇申诉，但仍须遵守合法给薪与反歧视保护。'
                : '⚠️ 红线提醒：新西兰法律规定 90 天试用期必须在正式开工前书面签署，开工后补签在法律上往往无效！'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
