from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers import saved_members
import os

# initialize app
app = FastAPI()

# set origins per env
origins = [
    os.environ.get("REACT_APP_SERVICE", None),
    os.environ.get("CORS_HOST", None),
]

# initialize middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# include saved_members router
app.include_router(saved_members.router)
