# Deploy Sprint LMS Dashboard

<p align="center">
  <img src="https://deploysprint.knurdz.org/logo/deploy-sprint-wordmark.svg?v=17" alt="Deploy Sprint" width="420" />
</p>

<p align="center">
  <img src="https://deploysprint.knurdz.org/_next/image?url=%2Flogo%2Forganizers-light-3.png%3Fv%3D17&w=1080&q=75" alt="Organizers" width="520" />
</p>

Welcome to the Deploy Sprint Virtual Qualifier. Your team will work with this
LMS dashboard template to show that you can use Git, GitHub, GitHub Actions, and
collaborative review practices in a realistic workflow.

Your team must have exactly 3 or 4 members.

## AI Coding Tools

Using coding AI agents or assistants is allowed. Your team is still responsible
for every change that is committed or submitted. Review all generated code,
clean up generated changes, make sure you understand the changes, and test the
project before opening pull requests.

## Repository Workflow Rules

Your repository may not have GitHub branch protection enabled. The workflow is
still required and will be checked during validation.

- Do not delete or rename the `challenge/*` branches.
- Do not force-push shared branches unless organizers explicitly ask you to.
- Do not build your own dashboard feature directly on `main`; use a
  `feature/<your-feature-name>` branch and a pull request.
- Your feature pull request must be reviewed by a teammate and include at least
  one inline comment on a changed file.
- If your team skips the expected Git and GitHub workflow, those points may be
  lost even if the final code works.

## What You Need To Do

1. Clone the private team repository assigned to your team by the organizers.
2. Confirm these branches exist in your assigned repository:
   - `main`
   - `challenge/rebase-insights`
   - `challenge/conflict-deadlines`
3. Fix the GitHub Pages workflow by reading [docs/workflow-fix.md](docs/workflow-fix.md).
4. Bring the completed work from `challenge/rebase-insights` into your `main`
   branch using a rebase-based workflow.
5. Bring the completed work from `challenge/conflict-deadlines` into your
   `main` branch. This branch is expected to produce a merge conflict. Resolve
   the conflict so that the dashboard keeps the useful changes from both sides.
6. Create a new branch named `feature/<your-feature-name>` from your updated
   `main` branch and add one small dashboard improvement of your own.
7. Open a pull request from your feature branch to your repository's `main`
   branch.
8. Ask at least one teammate to review that pull request. The review must include
   at least one inline comment on a changed file.
9. Merge your feature pull request into your repository's `main` branch.
10. Complete [SUBMISSION.md](SUBMISSION.md) on `main` and notify organizers that
    your team repository is ready for validation.

## Local Development

```bash
npm install
npm run dev
```

Run the production build before completing your submission:

```bash
npm run build
```

## Helpful Git Commands

After cloning your assigned repository, fetch all branches:

```bash
git fetch --all
git branch -a
```

Rebase a challenge branch onto your main branch:

```bash
git switch challenge/rebase-insights
git rebase main
git switch main
git merge --ff-only challenge/rebase-insights
```

When resolving the conflict branch, read the conflicted file carefully and keep
the useful dashboard content from both versions before committing the resolution.

## Submission Checklist

- [ ] Team has 3 or 4 members.
- [ ] Assigned repository includes all challenge branches.
- [ ] GitHub Pages workflow is fixed.
- [ ] Rebase challenge is integrated into `main`.
- [ ] Conflict challenge is integrated into `main`.
- [ ] Team feature was created in a separate branch.
- [ ] Team feature was reviewed by a teammate with an inline file comment.
- [ ] Any AI-assisted code was reviewed, cleaned up, and tested by the team.
- [ ] `SUBMISSION.md` is completed on `main`.
