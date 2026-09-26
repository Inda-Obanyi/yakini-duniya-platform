from fastapi import APIRouter

router = APIRouter()


@router.get('/')
def list_projects():
    return [
        {
            'id': 1,
            'name': 'IndaVerse',
            'category': 'AI Platform',
            'summary': 'Multimodal generative and agentic system.',
            'status': 'active',
            'tags': ['AI', 'Automation'],
        },
        {
            'id': 2,
            'name': 'NEXUS',
            'category': 'Agriculture',
            'summary': 'Farm operations intelligence platform.',
            'status': 'development',
            'tags': ['AgriTech', 'Monitoring'],
        },
    ]


@router.get('/{project_id}')
def get_project(project_id: int):
    return {'id': project_id, 'name': 'Demo Project'}
