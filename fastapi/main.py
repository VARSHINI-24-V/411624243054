#15-07-2026
from fastapi import FastAPI
from routes import router 
from database import engine
import models

app = FastAPI()
app.include_router(router)
models.Base.metadata.create_all(bind = engine)