import type { JobPosting, PolicyUpdate } from '../types';
import { NZ_JOBS } from '../data/jobs/jobsData';
import { POLICIES_2026 } from '../data/tools/policies2026';

/**
 * DataProvider abstraction:
 * V1 runs 100% offline using curated built-in datasets + local IndexedDB/JSON patches.
 * V2 can swap this implementation to connect to live RNZ/INZ/GeoNet feeds & real employer chat backend
 * without changing any React view components.
 */
export interface KiwiDataProvider {
  mode: 'offline' | 'online';
  getJobs(): JobPosting[];
  getPolicies(importedPolicies: PolicyUpdate[]): PolicyUpdate[];
}

export const offlineDataProvider: KiwiDataProvider = {
  mode: 'offline',
  getJobs() {
    return NZ_JOBS;
  },
  getPolicies(importedPolicies: PolicyUpdate[]) {
    const map = new Map<string, PolicyUpdate>();
    for (const p of POLICIES_2026) map.set(p.id, p);
    for (const p of importedPolicies) map.set(p.id, p);
    return Array.from(map.values()).sort((a, b) =>
      b.effectiveDate.localeCompare(a.effectiveDate)
    );
  },
};
