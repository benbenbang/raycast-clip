# Development Guide

Thank you for considering a contribution to `raycast-clip`. This guide will help you set up your development environment and provide an overview of the contribution process.

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- [Raycast](https://www.raycast.com/) installed on macOS
- npm (bundled with Node.js)

## Local Development

1. **Fork and Clone**: Fork this repository and clone your fork locally.

   ```bash
   git clone https://github.com/<your-username>/raycast-clip.git
   cd raycast-clip
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Install pre-commit hooks**:

   ```bash
   pip install pre-commit
   pre-commit install
   ```

4. **Start development mode**: This imports the extension into Raycast and enables hot-reloading.

   ```bash
   npm run dev
   ```

## Running Checks

```bash
npm run lint        # ESLint via ray lint
npx tsc --noEmit    # TypeScript type checking
npm test            # Vitest unit tests
npm run build       # Production build via ray build
```

## Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <message>
```

Valid types: `feat`, `fix`, `refactor`, `perf`, `build`, `ci`, `docs`, `style`, `test`, `chore`, `revert`, `hotfix`, `ops`

Examples:

- `feat(shorten): add is.gd service support`
- `fix(history): resolve duplicate entry on retry`
- `chore(deps): update raycast api to latest`

## Submitting a Pull Request

1. Create a branch following the pattern `{type}/{short-description}`.
2. Make your changes, ensuring all checks pass.
3. Open a PR against `main` with a clear description of what changed and why.
4. PRs should contain at most 300 lines of code changes.

## Feedback and Questions

Open an issue for any questions, bugs, or feature requests.
