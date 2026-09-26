# YAKINI & DUNIYA TECHNOLOGIES Platform

A production-ready platform for showcasing company projects, research, team members, and portfolios.

## Tech stack

- Frontend: Next.js 14 + TypeScript + Tailwind CSS
- Backend: FastAPI + PostgreSQL
- Auth: JWT with secure cookies
- Deployment: Docker + GitHub Actions

## Project structure

- `frontend/` - public website and admin experience
- `backend/` - API and data layer
- `docker-compose.yml` - local orchestration for app + database

## Quick start

### 1. Frontend

```bash
cd frontend
npm install
npm run dev
```

### 2. Backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

### 3. Database

```bash
docker compose up -d db
```

## Default routes

- Frontend: http://localhost:3000
- Backend: http://localhost:8000/docs

## Planned features

- Project showcase pages
- Team member profiles and portfolios
- Research and article publishing
- Job openings page
- Admin dashboard
- Authentication and role-based access control
