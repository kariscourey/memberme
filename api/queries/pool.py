import os
from psycopg_pool import ConnectionPool


# initialize pool per db url
pool = ConnectionPool(conninfo=os.environ["DATABASE_URL"])
