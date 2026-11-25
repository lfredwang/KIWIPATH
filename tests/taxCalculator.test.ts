import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  calculatePAYE2026,
  calculateNZTakeHome2026,
  NZ_2026_ACC_CAP,
  NZ_2026_ACC_RATE,
  NZ_2026_GOVT_KS_MAX,
  NZ_2026_MIN_WAGE,
  NZ_2026_MEDIAN_WAGE,
} from '../src/services/taxCalculator';

describe('2026/27 NZ Tax, ACC & KiwiSaver Calculator', () => {
  it('calculates PAYE across all 5 tax brackets accurately', () => {
    assert.equal(calculatePAYE2026(0), 0);
    assert.equal(calculatePAYE2026(-500), 0);
    // $15,600 @ 10.5% = $1,638
    assert.equal(calculatePAYE2026(15600), 1638);
    // $53,500 = 1638 + (53500 - 15600) * 0.175 = 1638 + 6632.5 = 8270.5
    assert.equal(calculatePAYE2026(53500), 8270.5);
    // $78,100 = 8270.5 + (78100 - 53500) * 0.30 = 8270.5 + 7380 = 15650.5
    assert.equal(calculatePAYE2026(78100), 15650.5);
    // $100,000 = 15650.5 + (100000 - 78100) * 0.33 = 15650.5 + 7227 = 22877.5
    assert.equal(calculatePAYE2026(100000), 22877.5);
    // $200,000 = 15650.5 + (180000 - 78100) * 0.33 + 20000 * 0.39 = 57077.5
    assert.equal(calculatePAYE2026(200000), 57077.5);
  });

  it('compares On Top vs Total Remuneration KiwiSaver packages accurately', () => {
    const onTop = calculateNZTakeHome2026({
      mode: 'annual',
      amount: 100000,
      hoursPerWeek: 40,
      kiwiSaverRate: 3.5,
      employerKiwiSaverRate: 3.5,
      isTotalRemuneration: false,
      hasStudentLoan: false,
    });
    const totalRem = calculateNZTakeHome2026({
      mode: 'annual',
      amount: 100000,
      hoursPerWeek: 40,
      kiwiSaverRate: 3.5,
      employerKiwiSaverRate: 3.5,
      isTotalRemuneration: true,
      hasStudentLoan: false,
    });

    assert.equal(onTop.baseSalaryForTax, 100000);
    assert.equal(onTop.payeTax, 22877.5);
    assert.ok(Math.abs(onTop.employeeKiwiSaver - 3500) < 0.01);
    assert.ok(Math.abs(onTop.employerKiwiSaver - 3500) < 0.01);
    assert.equal(onTop.govtKiwiSaverContribution, NZ_2026_GOVT_KS_MAX);
    // Total Rem reduces taxable base by dividing by 1.035
    assert.ok(totalRem.baseSalaryForTax < onTop.baseSalaryForTax);
    assert.ok(totalRem.netAnnual < onTop.netAnnual);
    assert.ok(Math.abs(totalRem.baseSalaryForTax + totalRem.employerKiwiSaver - 100000) < 0.01);
  });

  it('caps ACC Earner Levy at NZ$152,790 and removes KiwiSaver Govt contribution above $180k', () => {
    const highEarner = calculateNZTakeHome2026({
      mode: 'annual',
      amount: 200000,
      hoursPerWeek: 40,
      kiwiSaverRate: 3.5,
      employerKiwiSaverRate: 3.5,
      isTotalRemuneration: false,
      hasStudentLoan: true,
    });

    assert.ok(Math.abs(highEarner.accLevy - NZ_2026_ACC_CAP * NZ_2026_ACC_RATE) < 0.01);
    assert.equal(highEarner.govtKiwiSaverContribution, 0);
    assert.ok(highEarner.studentLoan > 0);
  });

  it('flags 2026 minimum wage ($23.95) and median wage ($35.00) thresholds accurately', () => {
    const belowMin = calculateNZTakeHome2026({
      mode: 'hourly',
      amount: NZ_2026_MIN_WAGE - 0.5,
      hoursPerWeek: 40,
      kiwiSaverRate: 3.5,
      employerKiwiSaverRate: 3.5,
      isTotalRemuneration: false,
      hasStudentLoan: false,
    });
    assert.equal(belowMin.aboveMinWage, false);
    assert.equal(belowMin.aboveMedianWage, false);

    const atMedian = calculateNZTakeHome2026({
      mode: 'hourly',
      amount: NZ_2026_MEDIAN_WAGE,
      hoursPerWeek: 40,
      kiwiSaverRate: 3.5,
      employerKiwiSaverRate: 3.5,
      isTotalRemuneration: false,
      hasStudentLoan: false,
    });
    assert.equal(atMedian.aboveMinWage, true);
    assert.equal(atMedian.aboveMedianWage, true);
  });
});
