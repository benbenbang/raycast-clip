# Release Process Guide

Releasing a new version is a multi-step process.

This guide is for contributors with **write permissions** to the repository.

## Steps

1. **Trigger the `semantic release` workflow**:

   - Navigate to the Actions tab in the repository.
   - Select the `semantic release` workflow.
   - Change the `prompt` input from `false` to `true`.
   - Click "Run workflow" to initiate the release.

2. **Semantic Release runs**:

   - The workflow analyzes commit messages since the last release to determine the next version (patch, minor, or major).
   - It generates a changelog and creates a GitHub release with the new tag.
   - The release title is automatically updated to `Short URL <version>`.

3. **Post-release checks**:
   - Verify the new release and tag appear on the [Releases page](https://github.com/benbenbang/raycast-clip/releases).
   - Confirm the changelog is accurate.

## Version Bump Rules

Based on conventional commit types:

| Commit type                                                   | Version bump |
| ------------------------------------------------------------- | ------------ |
| `feat`                                                        | minor        |
| `fix`, `refactor`, `perf`, `build`, `ops`, `hotfix`, `revert` | patch        |
| Breaking change (`BREAKING CHANGE` footer or `!`)             | major        |

## Key Considerations

- Do not manually modify the version in `package.json`. Semantic release manages versioning automatically.
- Ensure all PRs merged to `main` use conventional commit messages so the changelog is generated correctly.
- Communicate with the team if you encounter issues before a release goes live.
