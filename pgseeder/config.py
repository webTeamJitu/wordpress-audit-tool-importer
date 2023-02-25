from dotenv import load_dotenv

import os

load_dotenv()

# PostgreSQL Connection Params
DB_USER = os.getenv("DB_USER", "postgres")
DB_PASSWORD = os.getenv("DB_PASSWORD", "")
DB_HOST = os.getenv("DB_HOST", "localhost")
DB_PORT = int(os.getenv("DB_PORT", "5432"))
DB_NAME = os.getenv("DB_NAME", "postgres")

# Excel Worbook Path
WORKBOOK_PATH = os.getenv("WORKBOOK_PATH")

# Excel Rows & Columns
DATE_COL = 1
RETRIES_COL = 2
LATENCY_COL = 6
DOWNTIME_COL = 11
