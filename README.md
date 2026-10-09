# Express Health API with GitHub Actions CI

A simple Node.js Express API with an automated Jest/Supertest test and GitHub Actions workflow.

## Requirements
- Node.js 20 or later
- npm

## Install and run
```bash
npm install
npm start
```

Open `http://localhost:3000/api/health`.

Expected response:
```json
{
  "status": "ok",
  "message": "Server is running"
}
```

## Run tests
```bash
npm test
```

## GitHub Actions
The workflow at `.github/workflows/ci.yml` runs on pushes to `main` and pull requests targeting `main`. It checks out the code, sets up Node.js, installs dependencies, and runs the test suite.
