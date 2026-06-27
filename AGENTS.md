# Repository Guidelines

## Core Principles

- Start from the user prompt. Understand what the user is trying to accomplish before applying any repository process.
- Follow these guidelines unless the user gives a more specific instruction for the current task.
- Use the amount of process that fits the work. Small, clear requests should be completed directly without inventing unnecessary planning work.
- Prefer forward progress with reasonable assumptions when the next action is clear.
- Ask questions when they would materially improve the outcome, when the request is unclear, or when a risky or hard-to-reverse action needs confirmation.
- Keep work scoped to the requested outcome. Do not expand the task just because nearby cleanup is visible.
- Do not revert or overwrite unrelated user changes.

## Agent Startup

- Read the user prompt carefully and identify the requested outcome before inspecting files.
- Inspect the repository enough to understand existing conventions, structure, tools, and current work state.
- Check for a `planning/` directory early when the task is non-trivial, multi-step, or appears connected to ongoing work.
- If an active plan exists directly under `planning/`, use it as persisted work context.
- If multiple active plans exist and the user has not identified which one applies, ask which plan to use.
- If no active plan exists:
  - Proceed directly for small, clear, one-off requests.
  - Create a brief plan only when the user asks for one, provides a checklist/task list to persist, or the work is large enough that tracking is useful.
  - Do not create planning ceremony for minor edits, quick answers, or narrow fixes.
- If the user prompt points in a different direction than an existing plan, follow the prompt and update or question the plan only when needed.

## Planning Workflow

- Use `planning/` for durable task state when the work benefits from written tracking.
- Active plans live directly under `planning/`.
- Completed plans belong under `planning/complete/` after the work is finished and the user agrees it is complete.
- Keep repo-wide operating rules in this file; keep task-specific decisions, checklists, and context in planning documents.
- Before starting a planned multi-item task, identify the current phase: the smallest coherent group of checklist items that can be completed cleanly.
- Follow plan order when it still makes sense. If new information changes the right path, update the plan or ask before changing direction.
- If a phase is too large or uncertain, split it into a smaller clearly achievable phase.
- Keep checklists honest:
  - Mark an item complete only when the required work and appropriate verification are done.
  - Mark partially complete work clearly and record what remains.
  - Update planning documents before claiming planned work is complete.
- If the scope needs to change, make that visible and get alignment before proceeding.

## Execution Standards

- Work with the repository's existing patterns, naming, architecture, and tooling.
- Prefer local conventions over generic preferences.
- Make focused changes that solve the requested problem.
- Avoid unrelated refactors, formatting churn, dependency changes, or generated-file edits unless they are required.
- If generated artifacts need to change, update the source or generation process when possible.
- Keep comments concise and useful; explain intent or non-obvious behavior, not obvious mechanics.
- Preserve public interfaces, data formats, and workflows unless the task explicitly requires changing them.
- When changing behavior, look for nearby tests, examples, docs, or fixtures that should change with it.

## Validation

- Run the most relevant available validation for the change.
- Let the repository tell you what validation exists: tests, builds, linters, type checks, formatters, previews, scripts, examples, or manual verification.
- Match validation to the risk and size of the change:
  - Documentation-only changes may need only review and status checks.
  - Localized code changes should run nearby or targeted checks when available.
  - Shared behavior, public APIs, release paths, or cross-module changes need broader verification.
- If validation cannot be run, explain why and state the remaining risk.
- Do not claim something was tested unless it was actually run or manually verified.

## Git Hygiene

- Check worktree status before editing, staging, committing, or rebasing.
- Treat uncommitted changes you did not make as user work.
- Stage only files that belong to the requested change.
- Use concise, imperative commit messages.
- If the repository follows a commit convention, match it.
- Do not rewrite history, delete branches, reset hard, clean files, or discard changes unless the user explicitly asks for it.
- Before opening a pull request, ensure the branch contains only the intended scope.

## Pull Requests

- PRs should explain what changed, why it changed, and how it was validated.
- Include screenshots, logs, examples, or reproduction notes when they help reviewers understand the change.
- Mention skipped validation explicitly, including the reason.
- Keep the PR focused. If follow-up work is discovered, call it out separately rather than hiding it in the same change.

## Communication

- Keep updates concise, concrete, and tied to the work.
- State what you are doing and why when the work is multi-step or potentially risky.
- Surface blockers early with the specific decision or input needed.
- Keep simple tasks simple; do not bury the user in process details.
- When summarizing completion, include the changed files, validation performed, and any remaining risks or follow-ups.

## Compiled Learnings Process

- Run this process only when explicitly requested by the user.
- This process is exempt from the active-plan requirement.
- Do not create a new active plan solely to run the learnings process.
- When requested:
  - Capture the current date.
  - Create `planning/learnings/` and `planning/archived/` if needed.
  - Create a dated learnings file under `planning/learnings/`.
  - Read completed plans from `planning/complete/`.
  - Write a refined synthesis, not a raw concatenation.
  - Move synthesized completed plans to `planning/archived/`.
  - Reference archived source plans from the learnings file.
- `planning/learnings/` is the canonical location for distilled project insights.
