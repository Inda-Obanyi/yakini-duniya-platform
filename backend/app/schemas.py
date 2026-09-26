from typing import Optional

from pydantic import BaseModel


class TokenData(BaseModel):
    sub: Optional[str] = None
    role: Optional[str] = None


class UserToken(BaseModel):
    access_token: str
    token_type: str = 'bearer'
