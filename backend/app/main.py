from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers import auth, people, projects

app = FastAPI(
    title='Yakini & Duniya Technologies API',
    description='Backend API for projects, profiles, portfolio, and platform management.',
    version='1.0.0',
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

app.include_router(auth.router, prefix='/api/auth', tags=['auth'])
app.include_router(people.router, prefix='/api/people', tags=['people'])
app.include_router(projects.router, prefix='/api/projects', tags=['projects'])

@app.get('/api/health')
def health_check():
    return {'status': 'ok', 'message': 'Yakini & Duniya API is online'}
