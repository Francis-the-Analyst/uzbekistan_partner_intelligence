# Publish Uzbekistan Partner Intelligence Repository Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish the complete local Uzbekistan research workspace to the authorized GitHub repository without exposing credentials or omitting substantive research.

**Architecture:** Keep the existing research tree intact and add only repository-level documentation and ignore rules. The complete workspace is versioned at the repository root, while Vercel will later use `UZ_partner_intelligence_new/` as its project root.

**Tech Stack:** Git, GitHub over SSH, static HTML/CSS/JavaScript, Markdown

**Spec:** `docs/superpowers/specs/2026-09-03-uzbekistan-partner-intelligence-repository-design.md`

## Global Constraints

- Preserve all substantive research, datasets, reports, prompts, scripts, dashboards, and historical versions.
- Exclude credentials, environment files, execution logs, editor temporaries, and regenerable operating-system artifacts.
- Do not rewrite or discard existing files.
- Push only to `git@github.com:Francis-the-Analyst/Uzbekistan_partner_intelligence.git`.

---

### Task 1: Repository packaging

**Files:**
- Create: `.gitignore`
- Create: `README.md`

**Interfaces:**
- Consumes: the current workspace tree and the approved design specification.
- Produces: a safe, navigable Git repository containing the complete study.

- [ ] **Step 1: Audit filenames, sizes, and likely secret patterns**

Run read-only scans for files over GitHub's 100 MB limit and filenames/content associated with credentials.

- [ ] **Step 2: Add narrow ignore rules**

Ignore `.env*`, private-key formats, execution logs, caches, and editor/OS temporaries. Do not ignore research folders or reports.

- [ ] **Step 3: Add the repository README**

Document the study contents, source-of-truth datasets, web entry point, local usage, and intended Vercel root.

- [ ] **Step 4: Verify packaging**

List every ignored file and confirm no substantive research file is excluded.

### Task 2: Local Git repository

**Files:**
- Create: `.git/` metadata through Git commands

**Interfaces:**
- Consumes: the packaged workspace from Task 1.
- Produces: a `main` branch with one complete initial commit and the authorized `origin` remote.

- [ ] **Step 1: Initialize `main`**

Run `git init -b main` from the workspace root.

- [ ] **Step 2: Configure the authorized remote**

Run `git remote add origin git@github.com:Francis-the-Analyst/Uzbekistan_partner_intelligence.git`.

- [ ] **Step 3: Stage and inspect**

Run `git add --all`, inspect `git status --short`, and re-check staged files for sensitive names and oversize blobs.

- [ ] **Step 4: Commit**

Create the initial commit `feat: publish Uzbekistan partner intelligence study`.

### Task 3: GitHub publication verification

**Files:** None.

**Interfaces:**
- Consumes: the committed `main` branch.
- Produces: a verified remote `main` matching the local commit.

- [ ] **Step 1: Push the authorized branch**

Run `git push -u origin main`.

- [ ] **Step 2: Verify remote identity**

Compare `git rev-parse HEAD` with `git ls-remote origin refs/heads/main`.

- [ ] **Step 3: Verify repository cleanliness**

Run `git status --short` and confirm that no intended file remains untracked or modified.

