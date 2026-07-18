/* ============================================================
   gen-templates.js — generates downloadable Gantt templates:
   a styled visual .xlsx (ExcelJS), a shapes-based .pptx (pptxgenjs),
   and an app-importable .csv for each template slug.
   Run: node scripts/gen-templates.js
   ============================================================ */
const ExcelJS = require('exceljs');
const PptxGenJS = require('pptxgenjs');
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'templates', 'files');
fs.mkdirSync(OUT, { recursive: true });

const MS = 86400000;
const BASE = new Date(2026, 7, 3); // Mon Aug 3 2026 — deterministic base
function addDays(d, n) { const x = new Date(d); x.setDate(x.getDate() + n); return x; }
function iso(d) { return d.toISOString().slice(0, 10); }
function fmt(d) { return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }); }
function diffDays(a, b) { return Math.round((b - a) / MS); }

// ---- content definitions (offset days from BASE, duration in days) ----
// task: [name, offset, dur, progress, colorHex, {who,phase,milestone,indent, after}]
const C = {
  simple: { title: 'Simple Project Plan', accent: '2563EB', tasks: [
    ['Plan the work', 0, 4, 100, '2563EB', { who: 'You' }],
    ['Do the work', 4, 8, 40, '0EA5E9', { who: 'Team', after: 'Plan the work' }],
    ['Review', 12, 3, 0, 'F59E0B', { who: 'You', after: 'Do the work' }],
    ['Done', 15, 0, 0, '10B981', { milestone: true, after: 'Review' }],
  ]},
  'project-management': { title: 'Project Management Plan', accent: '4F46E5', tasks: [
    ['Initiation', 0, 6, 100, '4F46E5', { phase: true }],
    ['Define scope & goals', 0, 3, 100, '4F46E5', { indent: 1, who: 'PM' }],
    ['Stakeholder sign-off', 3, 3, 100, '4F46E5', { indent: 1, who: 'Sponsor' }],
    ['Kickoff', 6, 0, 0, '6366F1', { milestone: true, indent: 1 }],
    ['Planning', 6, 10, 50, '0EA5E9', { phase: true }],
    ['Work breakdown & schedule', 6, 5, 70, '0EA5E9', { indent: 1, who: 'PM' }],
    ['Resource & budget plan', 9, 5, 40, '0EA5E9', { indent: 1, who: 'PM' }],
    ['Execution', 16, 20, 10, '10B981', { phase: true }],
    ['Deliver workstream A', 16, 12, 15, '10B981', { indent: 1, who: 'Lead A' }],
    ['Deliver workstream B', 18, 14, 5, '22C55E', { indent: 1, who: 'Lead B' }],
    ['Monitoring & Control', 16, 20, 0, 'F59E0B', { phase: true }],
    ['Status reporting', 16, 20, 0, 'F59E0B', { indent: 1, who: 'PM' }],
    ['Closure', 36, 5, 0, 'EF4444', { phase: true }],
    ['Handover & retrospective', 36, 4, 0, 'EF4444', { indent: 1, who: 'Team' }],
    ['Project close', 40, 0, 0, 'EF4444', { milestone: true, indent: 1 }],
  ]},
  software: { title: 'Software Development Plan', accent: '2563EB', tasks: [
    ['Discovery', 0, 10, 100, '6366F1', { phase: true }],
    ['Requirements', 0, 5, 100, '6366F1', { indent: 1, who: 'PM' }],
    ['Technical design', 5, 5, 80, '6366F1', { indent: 1, who: 'Lead', after: 'Requirements' }],
    ['Design approved', 10, 0, 0, '0EA5E9', { milestone: true, indent: 1, after: 'Technical design' }],
    ['Development', 10, 20, 40, '2563EB', { phase: true }],
    ['Backend API', 10, 18, 60, '2563EB', { indent: 1, who: 'Dev A', after: 'Design approved' }],
    ['Frontend UI', 10, 20, 35, '0EA5E9', { indent: 1, who: 'Dev B', after: 'Design approved' }],
    ['Integration', 30, 8, 0, 'F59E0B', { indent: 1, who: 'Team', after: 'Frontend UI' }],
    ['QA & Testing', 38, 12, 0, 'EF4444', { phase: true }],
    ['Test plan', 38, 4, 0, 'EF4444', { indent: 1, who: 'QA', after: 'Integration' }],
    ['Bug fixing', 42, 8, 0, 'F97316', { indent: 1, who: 'Team', after: 'Test plan' }],
    ['Launch', 50, 3, 0, '10B981', { phase: true }],
    ['Deploy to production', 50, 2, 0, '10B981', { indent: 1, who: 'DevOps', after: 'Bug fixing' }],
    ['Go live', 52, 0, 0, '10B981', { milestone: true, indent: 1, after: 'Deploy to production' }],
  ]},
  marketing: { title: 'Marketing Campaign Plan', accent: 'A855F7', tasks: [
    ['Strategy', 0, 7, 100, 'A855F7', { phase: true }],
    ['Market research', 0, 4, 100, 'A855F7', { indent: 1, who: 'Analyst' }],
    ['Campaign brief', 4, 3, 90, 'A855F7', { indent: 1, who: 'CMO', after: 'Market research' }],
    ['Content Production', 7, 14, 30, '6366F1', { phase: true }],
    ['Copywriting', 7, 6, 50, '6366F1', { indent: 1, who: 'Writer', after: 'Campaign brief' }],
    ['Design assets', 9, 8, 25, 'EC4899', { indent: 1, who: 'Designer' }],
    ['Video production', 11, 10, 10, 'F97316', { indent: 1, who: 'Studio' }],
    ['Assets ready', 21, 0, 0, '10B981', { milestone: true, after: 'Video production' }],
    ['Launch', 21, 10, 0, '10B981', { phase: true }],
    ['Schedule posts', 21, 3, 0, '10B981', { indent: 1, who: 'Social', after: 'Assets ready' }],
    ['Go live & promote', 24, 5, 0, '22C55E', { indent: 1, who: 'Team', after: 'Schedule posts' }],
    ['Measure & optimize', 29, 7, 0, 'F59E0B', { indent: 1, who: 'Analyst', after: 'Go live & promote' }],
  ]},
  construction: { title: 'Construction Schedule', accent: 'EA580C', tasks: [
    ['Pre-construction', 0, 20, 100, '64748B', { phase: true }],
    ['Permits & approvals', 0, 12, 100, '64748B', { indent: 1, who: 'PM' }],
    ['Site survey', 8, 6, 100, '64748B', { indent: 1, who: 'Surveyor' }],
    ['Foundation', 20, 15, 30, 'EA580C', { phase: true }],
    ['Excavation', 20, 6, 60, 'EA580C', { indent: 1, who: 'Crew A', after: 'Permits & approvals' }],
    ['Pour foundation', 26, 9, 0, 'F97316', { indent: 1, who: 'Crew A', after: 'Excavation' }],
    ['Structure', 35, 30, 0, '2563EB', { phase: true }],
    ['Framing', 35, 14, 0, '2563EB', { indent: 1, who: 'Crew B', after: 'Pour foundation' }],
    ['Roofing', 49, 10, 0, '0EA5E9', { indent: 1, who: 'Crew B', after: 'Framing' }],
    ['Interior', 65, 25, 0, 'A855F7', { phase: true }],
    ['Electrical & plumbing', 65, 12, 0, 'A855F7', { indent: 1, who: 'Trades', after: 'Roofing' }],
    ['Finishing', 77, 13, 0, 'EC4899', { indent: 1, who: 'Trades', after: 'Electrical & plumbing' }],
    ['Handover', 90, 0, 0, '10B981', { milestone: true, after: 'Finishing' }],
  ]},
  event: { title: 'Event Planning Timeline', accent: '0EA5E9', tasks: [
    ['Planning', 0, 14, 60, '2563EB', { phase: true }],
    ['Set budget & goals', 0, 3, 100, '2563EB', { indent: 1, who: 'Lead' }],
    ['Book venue', 3, 5, 80, '0EA5E9', { indent: 1, who: 'Coord', after: 'Set budget & goals' }],
    ['Confirm speakers', 5, 9, 40, '6366F1', { indent: 1, who: 'Coord' }],
    ['Promotion', 14, 21, 10, 'F97316', { phase: true }],
    ['Website & tickets', 14, 7, 20, 'F97316', { indent: 1, who: 'Web', after: 'Book venue' }],
    ['Email + social push', 18, 17, 5, 'A855F7', { indent: 1, who: 'Social' }],
    ['Logistics', 30, 10, 0, '10B981', { phase: true }],
    ['Catering & AV', 30, 6, 0, '10B981', { indent: 1, who: 'Ops' }],
    ['Run of show', 35, 5, 0, '22C55E', { indent: 1, who: 'Ops', after: 'Catering & AV' }],
    ['Event day', 40, 0, 0, 'EF4444', { milestone: true, after: 'Run of show' }],
    ['Wrap-up & thank you', 41, 4, 0, '64748B', { after: 'Event day' }],
  ]},
  research: { title: 'Research / Thesis Plan', accent: '0D9488', tasks: [
    ['Proposal', 0, 21, 100, '0D9488', { phase: true }],
    ['Literature review', 0, 14, 100, '0D9488', { indent: 1, who: 'You' }],
    ['Research question & proposal', 14, 7, 90, '0D9488', { indent: 1, who: 'You', after: 'Literature review' }],
    ['Proposal approved', 21, 0, 0, '0EA5E9', { milestone: true, indent: 1, after: 'Research question & proposal' }],
    ['Data collection', 21, 40, 20, '2563EB', { phase: true }],
    ['Design methodology', 21, 10, 40, '2563EB', { indent: 1, who: 'You', after: 'Proposal approved' }],
    ['Fieldwork / experiments', 31, 30, 5, '0EA5E9', { indent: 1, who: 'You', after: 'Design methodology' }],
    ['Analysis & Writing', 61, 45, 0, 'A855F7', { phase: true }],
    ['Data analysis', 61, 20, 0, 'A855F7', { indent: 1, who: 'You', after: 'Fieldwork / experiments' }],
    ['Write chapters', 75, 30, 0, 'EC4899', { indent: 1, who: 'You', after: 'Data analysis' }],
    ['Submission', 106, 10, 0, '10B981', { phase: true }],
    ['Revisions & proofread', 106, 8, 0, '10B981', { indent: 1, who: 'You', after: 'Write chapters' }],
    ['Submit thesis', 116, 0, 0, '10B981', { milestone: true, indent: 1, after: 'Revisions & proofread' }],
  ]},

  'product-launch': { title: 'Product Launch Plan', accent: '8B5CF6', tasks: [
    ['Strategy', 0, 10, 100, '8B5CF6', { phase: true }],
    ['Market & competitor research', 0, 5, 100, '8B5CF6', { indent: 1, who: 'PMM' }],
    ['Positioning & messaging', 5, 5, 70, '8B5CF6', { indent: 1, who: 'PMM', after: 'Market & competitor research' }],
    ['Product readiness', 10, 16, 40, '2563EB', { phase: true }],
    ['Finalize product & beta', 10, 12, 45, '2563EB', { indent: 1, who: 'Product', after: 'Positioning & messaging' }],
    ['Pricing & packaging', 14, 6, 20, '0EA5E9', { indent: 1, who: 'PMM' }],
    ['Go-to-market', 16, 14, 15, 'F59E0B', { phase: true }],
    ['Marketing assets & content', 16, 10, 20, 'F59E0B', { indent: 1, who: 'Marketing', after: 'Positioning & messaging' }],
    ['PR & email campaign', 22, 8, 0, 'A855F7', { indent: 1, who: 'Comms' }],
    ['Sales enablement', 22, 6, 0, 'EC4899', { indent: 1, who: 'Sales' }],
    ['Launch', 30, 6, 0, '10B981', { phase: true }],
    ['Pre-launch checklist', 30, 3, 0, '10B981', { indent: 1, who: 'PMM', after: 'Marketing assets & content' }],
    ['Launch day', 33, 0, 0, 'EF4444', { milestone: true, indent: 1, after: 'Pre-launch checklist' }],
    ['Post-launch review', 34, 5, 0, '64748B', { indent: 1, who: 'Team', after: 'Launch day' }],
  ]},
  'product-roadmap': { title: 'Product Roadmap', accent: '6C4CF1', tasks: [
    ['Q1 — Foundation', 0, 60, 40, '6C4CF1', { phase: true }],
    ['Discovery & research', 0, 20, 80, '6C4CF1', { indent: 1, who: 'Product' }],
    ['Feature A: design & build', 15, 45, 30, '8B5CF6', { indent: 1, who: 'Eng' }],
    ['Q1 release', 60, 0, 0, 'EF4444', { milestone: true }],
    ['Q2 — Growth', 60, 90, 0, '0EA5E9', { phase: true }],
    ['Feature B: build', 60, 55, 0, '0EA5E9', { indent: 1, who: 'Eng' }],
    ['Feature C: beta', 90, 40, 0, '10B981', { indent: 1, who: 'Eng' }],
    ['Q2 release', 150, 0, 0, 'EF4444', { milestone: true }],
    ['Q3 — Scale', 150, 90, 0, 'F59E0B', { phase: true }],
    ['Platform & performance', 150, 60, 0, 'F59E0B', { indent: 1, who: 'Eng' }],
    ['Integrations', 180, 50, 0, 'EC4899', { indent: 1, who: 'Eng' }],
  ]},
  'agile': { title: 'Agile Project Plan', accent: '10B981', tasks: [
    ['Release planning', 0, 5, 100, '64748B', { phase: true }],
    ['Backlog & epics', 0, 5, 100, '64748B', { indent: 1, who: 'PO' }],
    ['Sprint 1', 5, 10, 100, '10B981', { phase: true, after: 'Backlog & epics' }],
    ['Stories — Sprint 1', 5, 8, 100, '10B981', { indent: 1, who: 'Team' }],
    ['Sprint 1 review', 15, 0, 0, '0EA5E9', { milestone: true, indent: 1 }],
    ['Sprint 2', 15, 10, 60, '22C55E', { phase: true }],
    ['Stories — Sprint 2', 15, 8, 60, '22C55E', { indent: 1, who: 'Team' }],
    ['Sprint 3', 25, 10, 0, '0EA5E9', { phase: true }],
    ['Stories — Sprint 3', 25, 8, 0, '0EA5E9', { indent: 1, who: 'Team' }],
    ['Release', 35, 0, 0, 'EF4444', { milestone: true }],
  ]},
  'sprint': { title: 'Sprint Plan (2 weeks)', accent: '0EA5E9', tasks: [
    ['Sprint planning', 0, 1, 100, '64748B', { who: 'Team' }],
    ['Development', 1, 8, 40, '0EA5E9', { phase: true, after: 'Sprint planning' }],
    ['Story: build feature', 1, 5, 60, '0EA5E9', { indent: 1, who: 'Dev A' }],
    ['Story: API work', 1, 6, 40, '2563EB', { indent: 1, who: 'Dev B' }],
    ['Integration', 7, 2, 0, '8B5CF6', { indent: 1, who: 'Team', after: 'Story: build feature' }],
    ['QA & testing', 9, 2, 0, 'F59E0B', { who: 'QA', after: 'Development' }],
    ['Sprint review', 11, 0, 0, '10B981', { milestone: true, after: 'QA & testing' }],
    ['Retrospective', 11, 1, 0, '64748B', { who: 'Team', after: 'Sprint review' }],
  ]},
  'weekly': { title: 'Weekly Plan', accent: '2563EB', tasks: [
    ['Monday — kickoff & planning', 0, 1, 100, '2563EB', { who: 'You' }],
    ['Tuesday — deep work', 1, 1, 60, '0EA5E9', { who: 'You' }],
    ['Wednesday — build', 2, 2, 30, '8B5CF6', { who: 'Team' }],
    ['Thursday — review', 3, 1, 0, 'F59E0B', { who: 'Team' }],
    ['Friday — ship & wrap-up', 4, 1, 0, '10B981', { who: 'You' }],
    ['Week complete', 4, 0, 0, 'EF4444', { milestone: true }],
  ]},
  'monthly': { title: 'Monthly Plan', accent: '8B5CF6', tasks: [
    ['Week 1 — Plan', 0, 5, 100, '8B5CF6', { phase: true }],
    ['Scope & goals', 0, 3, 100, '8B5CF6', { indent: 1, who: 'Lead' }],
    ['Week 2 — Build', 7, 5, 40, '0EA5E9', { phase: true }],
    ['Core work', 7, 5, 40, '0EA5E9', { indent: 1, who: 'Team', after: 'Scope & goals' }],
    ['Week 3 — Build & test', 14, 5, 0, '2563EB', { phase: true }],
    ['Finish & QA', 14, 5, 0, '2563EB', { indent: 1, who: 'Team', after: 'Core work' }],
    ['Week 4 — Launch', 21, 5, 0, '10B981', { phase: true }],
    ['Review & ship', 21, 3, 0, '10B981', { indent: 1, who: 'Team', after: 'Finish & QA' }],
    ['Month-end milestone', 27, 0, 0, 'EF4444', { milestone: true }],
  ]},
  'annual': { title: 'Yearly Plan (12 months)', accent: '6C4CF1', tasks: [
    ['Q1', 0, 90, 60, '6C4CF1', { phase: true }],
    ['Initiative 1', 0, 60, 70, '6C4CF1', { indent: 1, who: 'Team' }],
    ['Q2', 90, 90, 20, '0EA5E9', { phase: true }],
    ['Initiative 2', 90, 75, 25, '0EA5E9', { indent: 1, who: 'Team' }],
    ['Mid-year review', 180, 0, 0, 'EF4444', { milestone: true }],
    ['Q3', 180, 90, 0, 'F59E0B', { phase: true }],
    ['Initiative 3', 180, 70, 0, 'F59E0B', { indent: 1, who: 'Team' }],
    ['Q4', 270, 90, 0, '10B981', { phase: true }],
    ['Initiative 4 & close-out', 270, 80, 0, '10B981', { indent: 1, who: 'Team' }],
    ['Year-end milestone', 358, 0, 0, 'EF4444', { milestone: true }],
  ]},
  '30-60-90-day-plan': { title: '30-60-90 Day Plan', accent: '0EA5E9', tasks: [
    ['First 30 days — Learn', 0, 30, 60, '0EA5E9', { phase: true }],
    ['Onboarding & systems', 0, 10, 100, '0EA5E9', { indent: 1, who: 'You' }],
    ['Meet the team & stakeholders', 2, 12, 70, '2563EB', { indent: 1, who: 'You' }],
    ['Learn the product/process', 5, 20, 40, '8B5CF6', { indent: 1, who: 'You' }],
    ['30-day review', 30, 0, 0, 'EF4444', { milestone: true }],
    ['Days 31-60 — Contribute', 30, 30, 0, 'F59E0B', { phase: true }],
    ['Own first tasks & quick wins', 30, 25, 0, 'F59E0B', { indent: 1, who: 'You', after: 'Learn the product/process' }],
    ['60-day review', 60, 0, 0, 'EF4444', { milestone: true }],
    ['Days 61-90 — Lead', 60, 30, 0, '10B981', { phase: true }],
    ['Own a project & propose improvements', 60, 28, 0, '10B981', { indent: 1, who: 'You' }],
    ['90-day review', 90, 0, 0, 'EF4444', { milestone: true }],
  ]},
  'employee-onboarding': { title: 'Employee Onboarding Plan', accent: 'A855F7', tasks: [
    ['Pre-boarding', 0, 5, 100, 'A855F7', { phase: true }],
    ['Offer, contract & IT setup', 0, 5, 100, 'A855F7', { indent: 1, who: 'HR' }],
    ['Day 1', 5, 1, 0, '0EA5E9', { phase: true, after: 'Offer, contract & IT setup' }],
    ['Orientation & workspace', 5, 1, 0, '0EA5E9', { indent: 1, who: 'HR' }],
    ['Week 1', 6, 5, 0, '2563EB', { phase: true }],
    ['Training & intro meetings', 6, 5, 0, '2563EB', { indent: 1, who: 'Manager', after: 'Orientation & workspace' }],
    ['First 90 days', 11, 79, 0, '10B981', { phase: true }],
    ['Role ramp & check-ins', 11, 60, 0, '10B981', { indent: 1, who: 'Manager' }],
    ['90-day review', 90, 0, 0, 'EF4444', { milestone: true }],
  ]},
  'content-calendar': { title: 'Content Calendar', accent: 'EC4899', tasks: [
    ['Strategy & ideation', 0, 4, 100, '64748B', { phase: true }],
    ['Plan topics & keywords', 0, 4, 100, '64748B', { indent: 1, who: 'Editor' }],
    ['Blog post', 4, 10, 40, '6C4CF1', { phase: true, after: 'Plan topics & keywords' }],
    ['Draft', 4, 4, 60, '6C4CF1', { indent: 1, who: 'Writer' }],
    ['Edit & design', 8, 3, 20, 'EC4899', { indent: 1, who: 'Editor', after: 'Draft' }],
    ['Publish blog', 12, 0, 0, '10B981', { milestone: true, indent: 1, after: 'Edit & design' }],
    ['Email newsletter', 6, 8, 20, '0EA5E9', { phase: true }],
    ['Write & schedule', 6, 6, 25, '0EA5E9', { indent: 1, who: 'Writer' }],
    ['Social promotion', 12, 6, 0, 'F59E0B', { phase: true }],
    ['Schedule posts', 12, 4, 0, 'F59E0B', { indent: 1, who: 'Social', after: 'Publish blog' }],
  ]},
  'wedding-planning': { title: 'Wedding Planning (12 months)', accent: 'EC4899', tasks: [
    ['12-9 months before', 0, 90, 70, 'EC4899', { phase: true }],
    ['Set date, budget & guest list', 0, 20, 100, 'EC4899', { indent: 1, who: 'Couple' }],
    ['Book venue', 15, 20, 80, 'A855F7', { indent: 1, who: 'Couple', after: 'Set date, budget & guest list' }],
    ['9-6 months before', 90, 90, 30, '6C4CF1', { phase: true }],
    ['Caterer, photographer & attire', 90, 60, 30, '6C4CF1', { indent: 1, who: 'Couple' }],
    ['Send invitations', 150, 10, 0, '0EA5E9', { indent: 1, who: 'Couple' }],
    ['3-1 months before', 240, 60, 0, 'F59E0B', { phase: true }],
    ['RSVPs, seating & rehearsal', 240, 50, 0, 'F59E0B', { indent: 1, who: 'Couple' }],
    ['Wedding day', 330, 0, 0, 'EF4444', { milestone: true }],
  ]},
  'home-renovation': { title: 'Home Renovation Schedule', accent: 'EA580C', tasks: [
    ['Planning', 0, 21, 100, '64748B', { phase: true }],
    ['Design & budget', 0, 14, 100, '64748B', { indent: 1, who: 'Owner' }],
    ['Permits & approvals', 10, 14, 60, '64748B', { indent: 1, who: 'Contractor', after: 'Design & budget' }],
    ['Demolition', 24, 5, 0, 'EF4444', { phase: true }],
    ['Demo & prep', 24, 5, 0, 'EF4444', { indent: 1, who: 'Crew', after: 'Permits & approvals' }],
    ['Structural & rough-in', 29, 20, 0, '2563EB', { phase: true }],
    ['Framing & structure', 29, 8, 0, '2563EB', { indent: 1, who: 'Crew', after: 'Demo & prep' }],
    ['Electrical, plumbing & HVAC', 37, 12, 0, '0EA5E9', { indent: 1, who: 'Trades', after: 'Framing & structure' }],
    ['Finishes', 49, 20, 0, 'A855F7', { phase: true }],
    ['Drywall, paint & flooring', 49, 15, 0, 'A855F7', { indent: 1, who: 'Crew', after: 'Electrical, plumbing & HVAC' }],
    ['Final inspection & walkthrough', 69, 3, 0, '10B981', { indent: 1, who: 'Owner', after: 'Drywall, paint & flooring' }],
    ['Project complete', 72, 0, 0, 'EF4444', { milestone: true }],
  ]},
};

// slug -> content key (every download link resolves)
const SLUGS = {
  'excel': 'project-management',
  'powerpoint': 'project-management',
  'google-sheets': 'simple',
  'simple': 'simple',
  'construction': 'construction',
  'software-development': 'software',
  'marketing': 'marketing',
  'event-planning': 'event',
  'project-management': 'project-management',
  'research': 'research',
  'product-launch': 'product-launch',
  'product-roadmap': 'product-roadmap',
  'agile': 'agile',
  'sprint': 'sprint',
  'weekly': 'weekly',
  'monthly': 'monthly',
  'annual': 'annual',
  '30-60-90-day-plan': '30-60-90-day-plan',
  'employee-onboarding': 'employee-onboarding',
  'content-calendar': 'content-calendar',
  'wedding-planning': 'wedding-planning',
  'home-renovation': 'home-renovation',
};

function rows(def) {
  // build derived rows with dates + wbs numbering
  let counters = [0];
  return def.tasks.map((t) => {
    const [name, off, dur, prog, color, opts = {}] = t;
    const indent = opts.indent || 0;
    while (counters.length <= indent) counters.push(0);
    counters = counters.slice(0, indent + 1);
    counters[indent]++;
    const wbs = counters.slice(0, indent + 1).join('.');
    const start = addDays(BASE, off);
    const end = opts.milestone ? start : addDays(start, Math.max(1, dur) - 1);
    return {
      wbs, name, indent, phase: !!opts.phase, milestone: !!opts.milestone,
      who: opts.who || '', prog: prog || 0, color,
      start, end, days: opts.milestone ? 0 : diffDays(start, end) + 1,
      after: opts.after || '',
    };
  });
}

// ---------------- CSV ----------------
function writeCSV(slug, def) {
  const rs = rows(def);
  const cols = ['WBS', 'Task', 'Type', 'Start', 'End', 'Days', 'Progress %', 'Assignee', 'Dependencies', 'Notes'];
  const esc = v => { v = String(v == null ? '' : v); return /[",\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v; };
  const lines = [cols.join(',')];
  rs.forEach(r => {
    const type = r.milestone ? 'milestone' : (r.phase ? 'group' : 'task');
    const deps = r.after || '';
    lines.push([r.wbs, '  '.repeat(r.indent) + r.name, type, iso(r.start), iso(r.end), r.days, r.prog, r.who, deps, ''].map(esc).join(','));
  });
  fs.writeFileSync(path.join(OUT, slug + '.csv'), '﻿' + lines.join('\n'));
}

// ---------------- XLSX (visual gantt) ----------------
async function writeXLSX(slug, def) {
  const rs = rows(def);
  const wb = new ExcelJS.Workbook();
  wb.creator = 'gantts.app';
  const ws = wb.addWorksheet('Gantt', { views: [{ state: 'frozen', xSplit: 6, ySplit: 3 }] });

  // timeline span in weeks
  const minStart = rs.reduce((m, r) => r.start < m ? r.start : m, rs[0].start);
  const maxEnd = rs.reduce((m, r) => r.end > m ? r.end : m, rs[0].end);
  const originMon = addDays(minStart, -((minStart.getDay() + 6) % 7)); // back to Monday
  const totalDays = diffDays(originMon, maxEnd) + 7;
  const weeks = Math.ceil(totalDays / 7);

  const leftCols = [
    { header: '#', key: 'wbs', width: 6 },
    { header: 'Task', key: 'name', width: 34 },
    { header: 'Owner', key: 'who', width: 12 },
    { header: 'Start', key: 'start', width: 11 },
    { header: 'End', key: 'end', width: 11 },
    { header: 'Days', key: 'days', width: 6 },
  ];
  // widths only — do NOT pass `header` here, or ExcelJS auto-fills row 1 and
  // collides with our manual title/subtitle/header rows.
  ws.columns = leftCols.map(c => ({ width: c.width })).concat(Array.from({ length: weeks }, () => ({ width: 4.5 })));

  // Title row
  const titleRow = ws.addRow([def.title]);
  ws.mergeCells(1, 1, 1, 6 + weeks);
  titleRow.getCell(1).font = { bold: true, size: 16, color: { argb: 'FF' + def.accent } };
  titleRow.height = 24;
  // subtitle
  const sub = ws.addRow(['Made free at gantts.app — edit online and export to Excel, PDF, PNG or PowerPoint']);
  ws.mergeCells(2, 1, 2, 6 + weeks);
  sub.getCell(1).font = { size: 10, italic: true, color: { argb: 'FF64748B' } };

  // header row (row 3)
  const hdr = ws.addRow(['#', 'Task', 'Owner', 'Start', 'End', 'Days'].concat(
    Array.from({ length: weeks }, (_, i) => fmt(addDays(originMon, i * 7)))));
  hdr.font = { bold: true, size: 10, color: { argb: 'FFFFFFFF' } };
  hdr.height = 26;
  hdr.eachCell(c => {
    c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF' + def.accent } };
    c.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
    c.border = { bottom: { style: 'thin', color: { argb: 'FFCBD5E1' } } };
  });
  hdr.getCell(2).alignment = { horizontal: 'left', vertical: 'middle' };

  // task rows
  rs.forEach(r => {
    const rowVals = [r.wbs, '   '.repeat(r.indent) + (r.milestone ? '◆ ' : '') + r.name, r.who, iso(r.start), iso(r.end), r.milestone ? '' : r.days];
    const row = ws.addRow(rowVals.concat(Array.from({ length: weeks }, () => '')));
    row.height = 18;
    const nameCell = row.getCell(2);
    nameCell.font = { bold: r.phase, italic: r.milestone, size: 10.5, color: { argb: r.phase ? 'FF0F172A' : 'FF1E293B' } };
    row.getCell(1).alignment = { horizontal: 'center' };
    row.getCell(6).alignment = { horizontal: 'center' };
    [4, 5].forEach(i => row.getCell(i).font = { size: 9.5, color: { argb: 'FF475569' } });
    // timeline fill
    const sWeek = Math.floor(diffDays(originMon, r.start) / 7);
    const eWeek = Math.floor(diffDays(originMon, r.end) / 7);
    for (let w = 0; w < weeks; w++) {
      const cell = row.getCell(7 + w);
      cell.border = { right: { style: 'hair', color: { argb: 'FFEEF2F7' } } };
      if (r.milestone) {
        if (w === sWeek) { cell.value = '◆'; cell.font = { color: { argb: 'FF' + r.color }, size: 11, bold: true }; cell.alignment = { horizontal: 'center' }; }
      } else if (w >= sWeek && w <= eWeek) {
        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF' + r.color } };
      }
    }
  });

  // light row banding via borders already; add outer border to header block
  await wb.xlsx.writeFile(path.join(OUT, slug + '.xlsx'));
}

// ---------------- PPTX (shapes gantt) ----------------
async function writePPTX(slug, def) {
  const rs = rows(def);
  const pptx = new PptxGenJS();
  pptx.defineLayout({ name: 'W', width: 13.333, height: 7.5 });
  pptx.layout = 'W';

  // title slide
  const s1 = pptx.addSlide();
  s1.background = { color: def.accent };
  s1.addText(def.title, { x: 0.7, y: 2.7, w: 12, h: 1.2, fontSize: 40, bold: true, color: 'FFFFFF' });
  s1.addText('Free Gantt chart template · gantts.app', { x: 0.7, y: 3.9, w: 12, h: 0.5, fontSize: 18, color: 'FFFFFF' });

  // gantt slide
  const s = pptx.addSlide();
  s.addText(def.title, { x: 0.4, y: 0.25, w: 12.5, h: 0.5, fontSize: 22, bold: true, color: '1E293B' });

  const minStart = rs.reduce((m, r) => r.start < m ? r.start : m, rs[0].start);
  const maxEnd = rs.reduce((m, r) => r.end > m ? r.end : m, rs[0].end);
  const span = Math.max(1, diffDays(minStart, maxEnd) + 1);
  const chartX = 4.2, chartW = 8.7, top = 1.15, rowH = Math.min(0.34, 5.7 / rs.length);
  const pxPerDay = chartW / span;

  // month gridlines (approx every ~2 weeks)
  for (let d = 0; d <= span; d += 14) {
    const x = chartX + d * pxPerDay;
    s.addShape(pptx.ShapeType.line, { x, y: top, w: 0, h: rowH * rs.length, line: { color: 'E2E8F0', width: 0.5 } });
    s.addText(fmt(addDays(minStart, d)), { x: x - 0.4, y: top - 0.28, w: 0.8, h: 0.25, fontSize: 7, color: '94A3B8', align: 'center' });
  }

  rs.forEach((r, i) => {
    const y = top + i * rowH;
    // label
    s.addText((r.milestone ? '◆ ' : '') + r.name, { x: 0.4, y: y - 0.02, w: 3.6, h: rowH, fontSize: 9, bold: r.phase, italic: r.milestone, color: '1E293B', align: 'left', valign: 'middle' });
    const sx = chartX + diffDays(minStart, r.start) * pxPerDay;
    if (r.milestone) {
      s.addShape(pptx.ShapeType.diamond, { x: sx - 0.09, y: y + rowH / 2 - 0.09, w: 0.18, h: 0.18, fill: { color: r.color } });
    } else {
      const w = Math.max(0.06, r.days * pxPerDay);
      if (r.phase) {
        s.addShape(pptx.ShapeType.rect, { x: sx, y: y + rowH / 2 - 0.05, w, h: 0.1, fill: { color: '475569' } });
      } else {
        s.addShape(pptx.ShapeType.roundRect, { x: sx, y: y + 0.03, w, h: rowH - 0.1, rectRadius: 0.03, fill: { color: r.color } });
        if (r.prog > 0) s.addShape(pptx.ShapeType.rect, { x: sx, y: y + 0.03, w: w * r.prog / 100, h: rowH - 0.1, fill: { color: '000000', transparency: 78 } });
      }
    }
  });
  s.addText('Made free at gantts.app', { x: 0.4, y: 7.05, w: 6, h: 0.3, fontSize: 9, italic: true, color: '94A3B8' });

  // table slide
  const s3 = pptx.addSlide();
  s3.addText('Task Schedule', { x: 0.4, y: 0.25, w: 12, h: 0.5, fontSize: 22, bold: true, color: '1E293B' });
  const header = ['#', 'Task', 'Owner', 'Start', 'End', 'Days', '%'].map(h => ({ text: h, options: { bold: true, color: 'FFFFFF', fill: def.accent } }));
  const body = rs.map(r => [r.wbs, '  '.repeat(r.indent) + r.name, r.who, iso(r.start), iso(r.end), r.milestone ? '—' : String(r.days), r.milestone ? '—' : (r.prog + '%')]);
  s3.addTable([header, ...body], { x: 0.4, y: 0.9, w: 12.5, fontSize: 10, color: '1E293B', border: { type: 'solid', color: 'E2E8F0', pt: 0.5 }, autoPage: true });

  const buf = await pptx.write({ outputType: 'nodebuffer' });
  fs.writeFileSync(path.join(OUT, slug + '.pptx'), buf);
}

// expose the template data so gen-thumbs.js can render real, per-template previews
module.exports = { C, SLUGS, rows, BASE, addDays, iso, fmt, diffDays };

if (require.main === module) {
  (async () => {
    for (const [slug, key] of Object.entries(SLUGS)) {
      const def = C[key];
      writeCSV(slug, def);
      await writeXLSX(slug, def);
      await writePPTX(slug, def);
      console.log('generated', slug, '(', key, ')');
    }
    console.log('\nAll template files written to', OUT);
  })();
}
