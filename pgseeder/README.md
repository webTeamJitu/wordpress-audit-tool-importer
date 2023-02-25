# Excel to PostgreSQL Export Script

This Python script exports data from the daily monitoring Excel file and imports it into the WAT PostgreSQL database.

## Requirements

- Python 3.6 or higher
- PostgreSQL 9.6 or higher
- Poetry package manager

## Installation

1. Clone this repository to your local machine.
2. Install the project dependencies by running `poetry install` in the project directory.

## Usage

1. Make sure you have an Excel file with data that you want to export.
2. Update the `config.py` file with your PostgreSQL database credentials and Excel file path.
3. Run the script using `poetry run python export.py`. This will export the data from the Excel file and insert it into the specified PostgreSQL database.
