from pydantic import BaseModel
from typing import Optional


class ProjectBase(BaseModel):
    name: str
    category: str
    summary: str
    status: str = 'draft'
    tags: list[str] = []


class ProjectCreate(ProjectBase):
    pass


class Project(ProjectBase):
    id: int

    class Config:
        orm_mode = True


class PersonBase(BaseModel):
    name: str
    role: str
    bio: str
    skills: list[str] = []


class PersonCreate(PersonBase):
    pass


class Person(PersonBase):
    id: int

    class Config:
        orm_mode = True
