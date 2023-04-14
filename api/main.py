from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers import saved_members

import os

app = FastAPI()

origins = [
    os.environ.get("REACT_APP_SERVICE", None),
    os.environ.get("CORS_HOST", None),
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(saved_members.router)
