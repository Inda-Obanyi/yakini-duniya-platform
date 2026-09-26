import os
from dataclasses import dataclass


@dataclass
class Settings:
    database_url: str = os.getenv('DATABASE_URL', 'postgresql://postgres:postgres@localhost:5432/yakini_duniya')
    secret_key: str = os.getenv('SECRET_KEY', 'dev-secret-key')
    algorithm: str = os.getenv('ALGORITHM', 'HS256')
    access_token_expire_minutes: int = int(os.getenv('ACCESS_TOKEN_EXPIRE_MINUTES', '60'))


settings = Settings()
