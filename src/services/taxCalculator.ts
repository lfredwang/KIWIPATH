/**
 * New Zealand 2026/27 Tax, ACC & KiwiSaver Calculator
 * Baseline verified as of Nov 2026:
 * - PAYE Brackets: 10.5% ($0-$15.6k), 17.5% ($15.6k-$53.5k), 30% ($53.5k-$78.1k), 33% ($78.1k-$180k), 39% ($180k+)
 * - Adult Minimum Wage (from 1 Apr 2026): NZ$23.95/hr
 * - Median Wage Benchmark (Mar 2026): NZ$35.00/hr
 * - KiwiSaver default employee/employer minimum (from 1 Apr 2026): 3.5% (rising to 4% Apr 2028)
 * - KiwiSaver Govt Contribution (from 1 Jul 2025): 25c per $1, max NZ$260.72/yr; $0 if taxable income > $180,000
 * - ACC Earner's Levy 2026/27: 1.67% (inc GST) up to max liable earnings NZ$152,790
 * - Student Loan (2026/27): 12% above NZ$24,128 threshold
 */

export const NZ_2026_MIN_WAGE = 23.95;
export const NZ_2026_MEDIAN_WAGE = 35.0;
export const NZ_2026_KIWISAVER_DEFAULT = 3.5;
export const NZ_2026_GOVT_KS_MAX = 260.72;
export const NZ_2026_GOVT_KS_INCOME_CAP = 180000;
export const NZ_2026_ACC_RATE = 0.0167;
export const NZ_2026_ACC_CAP = 152790;
export const NZ_2026_SL_THRESHOLD = 24128;

export interface TaxCalcInput {
  mode: 'annual' | 'hourly';
  amount: number;
  hoursPerWeek: number;
  kiwiSaverRate: number; // 0, 3, 3.5, 4, 6, 8, 10
  employerKiwiSaverRate: number; // default 3.5% from Apr 2026
  isTotalRemuneration: boolean; // true = employer KiwiSaver deducted from package
  hasStudentLoan: boolean;
}

export interface TaxCalcResult {
  grossAnnual: number;
  baseSalaryForTax: number;
  hourlyEquivalent: number;
  payeTax: number;
  accLevy: number;
  employeeKiwiSaver: number;
  employerKiwiSaver: number;
  studentLoan: number;
  netAnnual: number;
  netMonthly: number;
  netFortnightly: number;
  netWeekly: number;
  effectiveTaxRate: number;
  govtKiwiSaverContribution: number;
  aboveMinWage: boolean;
  aboveMedianWage: boolean;
}

export function calculatePAYE2026(taxableIncome: number): number {
  const income = Math.max(0, taxableIncome);
  const brackets: Array<[number, number]> = [
    [15600, 0.105],
    [53500, 0.175],
    [78100, 0.3],
    [180000, 0.33],
    [Infinity, 0.39],
  ];

  let tax = 0;
  let prev = 0;
  for (const [upper, rate] of brackets) {
    if (income <= prev) break;
    const slice = Math.min(income, upper) - prev;
    tax += slice * rate;
    prev = upper;
  }
  return tax;
}

export function calculateNZTakeHome2026(input: TaxCalcInput): TaxCalcResult {
  const hours = Math.max(1, input.hoursPerWeek || 40);
  const rawGrossAnnual =
    input.mode === 'annual' ? Math.max(0, input.amount) : Math.max(0, input.amount) * hours * 52;

  const empKsPct = Math.max(0, input.kiwiSaverRate) / 100;
  const erKsPct = empKsPct > 0 ? Math.max(0, input.employerKiwiSaverRate) / 100 : 0;

  // If Total Remuneration, package = base * (1 + erKsPct)
  const baseSalaryForTax =
    input.isTotalRemuneration && erKsPct > 0
      ? rawGrossAnnual / (1 + erKsPct)
      : rawGrossAnnual;

  const employerKiwiSaver = baseSalaryForTax * erKsPct;
  const employeeKiwiSaver = baseSalaryForTax * empKsPct;

  const payeTax = calculatePAYE2026(baseSalaryForTax);
  const accLevy = Math.min(baseSalaryForTax, NZ_2026_ACC_CAP) * NZ_2026_ACC_RATE;
  const studentLoan =
    input.hasStudentLoan && baseSalaryForTax > NZ_2026_SL_THRESHOLD
      ? (baseSalaryForTax - NZ_2026_SL_THRESHOLD) * 0.12
      : 0;

  const netAnnual = Math.max(
    0,
    baseSalaryForTax - payeTax - accLevy - employeeKiwiSaver - studentLoan
  );

  const hourlyEquivalent = baseSalaryForTax / (hours * 52);

  // Budget 2025/2026 Govt contribution: 25c per $1 up to $260.72 if taxable income <= $180,000
  const govtKiwiSaverContribution =
    employeeKiwiSaver > 0 && baseSalaryForTax <= NZ_2026_GOVT_KS_INCOME_CAP
      ? Math.min(NZ_2026_GOVT_KS_MAX, employeeKiwiSaver * 0.25)
      : 0;

  const effectiveTaxRate =
    baseSalaryForTax > 0 ? ((payeTax + accLevy) / baseSalaryForTax) * 100 : 0;

  return {
    grossAnnual: rawGrossAnnual,
    baseSalaryForTax,
    hourlyEquivalent,
    payeTax,
    accLevy,
    employeeKiwiSaver,
    employerKiwiSaver,
    studentLoan,
    netAnnual,
    netMonthly: netAnnual / 12,
    netFortnightly: netAnnual / 26,
    netWeekly: netAnnual / 52,
    effectiveTaxRate,
    govtKiwiSaverContribution,
    aboveMinWage: hourlyEquivalent >= NZ_2026_MIN_WAGE,
    aboveMedianWage: hourlyEquivalent >= NZ_2026_MEDIAN_WAGE,
  };
}

export function formatNZD(value: number, decimals = 0): string {
  return `NZ$${value.toLocaleString('en-NZ', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}`;
}
