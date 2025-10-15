# Full-Stack Application

A modern full-stack web application built with React (frontend), FastAPI (backend), and MongoDB (database).

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Running the Application](#running-the-application)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **Yarn** (v1.22 or higher) - Install via: `npm install -g yarn`
- **Python** (v3.9 or higher) - [Download](https://www.python.org/downloads/)
- **pip** (Python package manager) - Usually comes with Python
- **MongoDB** (v4.4 or higher) - [Download](https://www.mongodb.com/try/download/community)

### Verify Installation

Run these commands to verify installations:

```bash
node --version
yarn --version
python --version
pip --version
mongod --version
```

---

## Project Structure

```
/app/
├── backend/              # FastAPI backend
│   ├── server.py        # Main backend application
│   ├── requirements.txt # Python dependencies
│   └── .env            # Backend environment variables
├── frontend/            # React frontend
│   ├── src/            # Source code
│   ├── public/         # Static files
│   ├── package.json    # Node dependencies
│   └── .env           # Frontend environment variables
├── tests/              # Test files
└── README.md          # This file
```

---

## Technology Stack

### Frontend
- **React** 19.0.0 - UI library
- **Tailwind CSS** - Styling
- **Radix UI** - Component library
- **React Router** - Routing
- **Axios** - HTTP client
- **Lucide React** - Icons

### Backend
- **FastAPI** - Web framework
- **Motor** - Async MongoDB driver
- **Uvicorn** - ASGI server
- **Pydantic** - Data validation
- **Python-dotenv** - Environment management

### Database
- **MongoDB** - NoSQL database

---

## Installation

### Backend Setup

1. **Navigate to the backend directory:**

```bash
cd /path/to/your/project/backend
```

2. **Create a virtual environment (recommended):**

```bash
# On macOS/Linux
python3 -m venv venv
source venv/bin/activate

# On Windows
python -m venv venv
venv\Scripts\activate
```

3. **Install Python dependencies:**

```bash
pip install -r requirements.txt
```

4. **Set up MongoDB:**

Make sure MongoDB is running on your local machine:

```bash
# Start MongoDB (macOS with Homebrew)
brew services start mongodb-community

# Start MongoDB (Linux)
sudo systemctl start mongod

# Start MongoDB (Windows)
# MongoDB should start automatically, or run:
# "C:\Program Files\MongoDB\Server\[version]\bin\mongod.exe"
```

5. **Configure environment variables:**

The backend `.env` file is already configured at `/backend/.env`:

```env
MONGO_URL="mongodb://localhost:27017"
DB_NAME="test_database"
CORS_ORIGINS="*"
```

You can modify these values if needed:
- `MONGO_URL`: Your MongoDB connection string
- `DB_NAME`: Database name to use
- `CORS_ORIGINS`: Allowed origins (use `*` for development)

---

### Frontend Setup

1. **Navigate to the frontend directory:**

```bash
cd /path/to/your/project/frontend
```

2. **Install Node dependencies:**

```bash
yarn install
```

**Important:** Use `yarn` instead of `npm` to avoid dependency conflicts.

3. **Configure environment variables:**

Update the frontend `.env` file at `/frontend/.env`:

```env
REACT_APP_BACKEND_URL=http://localhost:8001
WDS_SOCKET_PORT=443
REACT_APP_ENABLE_VISUAL_EDITS=false
ENABLE_HEALTH_CHECK=false
```

For local development, change:
- `REACT_APP_BACKEND_URL=http://localhost:8001` (point to your local backend)

---

## Running the Application

### Step 1: Start MongoDB

Ensure MongoDB is running:

```bash
# Check if MongoDB is running
# On macOS/Linux:
ps aux | grep mongod

# If not running, start it:
# macOS (Homebrew):
brew services start mongodb-community

# Linux:
sudo systemctl start mongod

# Windows:
# MongoDB should auto-start, or manually run:
# "C:\Program Files\MongoDB\Server\[version]\bin\mongod.exe"
```

### Step 2: Start the Backend

1. **Navigate to backend directory:**

```bash
cd /path/to/your/project/backend
```

2. **Activate virtual environment (if you created one):**

```bash
# On macOS/Linux
source venv/bin/activate

# On Windows
venv\Scripts\activate
```

3. **Start the FastAPI server:**

```bash
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

The backend will start at: `http://localhost:8001`

You should see output like:
```
INFO:     Uvicorn running on http://0.0.0.0:8001 (Press CTRL+C to quit)
INFO:     Started reloader process
INFO:     Started server process
INFO:     Waiting for application startup.
INFO:     Application startup complete.
```

### Step 3: Start the Frontend

1. **Open a new terminal window/tab**

2. **Navigate to frontend directory:**

```bash
cd /path/to/your/project/frontend
```

3. **Start the React development server:**

```bash
yarn start
```

The frontend will start at: `http://localhost:3000`

Your browser should automatically open. If not, navigate to `http://localhost:3000`

---

## Environment Variables

### Backend (.env)

| Variable | Description | Default |
|----------|-------------|---------|
| `MONGO_URL` | MongoDB connection string | `mongodb://localhost:27017` |
| `DB_NAME` | Database name | `test_database` |
| `CORS_ORIGINS` | Allowed CORS origins | `*` |

### Frontend (.env)

| Variable | Description | Default |
|----------|-------------|---------|
| `REACT_APP_BACKEND_URL` | Backend API URL | Update to `http://localhost:8001` |
| `WDS_SOCKET_PORT` | WebSocket port | `443` |
| `REACT_APP_ENABLE_VISUAL_EDITS` | Enable visual editing | `false` |
| `ENABLE_HEALTH_CHECK` | Enable health checks | `false` |

---

## API Endpoints

Once the backend is running, you can test these endpoints:

### Base URL
```
http://localhost:8001/api
```

### Available Endpoints

1. **GET /** - Root endpoint
   ```bash
   curl http://localhost:8001/api/
   ```
   Response: `{"message": "Hello World"}`

2. **POST /status** - Create a status check
   ```bash
   curl -X POST http://localhost:8001/api/status \
     -H "Content-Type: application/json" \
     -d '{"client_name": "Test Client"}'
   ```

3. **GET /status** - Get all status checks
   ```bash
   curl http://localhost:8001/api/status
   ```

### API Documentation

FastAPI provides interactive API documentation:

- **Swagger UI**: http://localhost:8001/docs
- **ReDoc**: http://localhost:8001/redoc

---

## Troubleshooting

### Common Issues

#### 1. MongoDB Connection Error

**Error:** `ServerSelectionTimeoutError: localhost:27017: [Errno 61] Connection refused`

**Solution:**
- Ensure MongoDB is running: `brew services list` (macOS) or `sudo systemctl status mongod` (Linux)
- Start MongoDB if not running (see [Step 1: Start MongoDB](#step-1-start-mongodb))
- Check if the port 27017 is available: `lsof -i :27017`

#### 2. Port Already in Use

**Error:** `OSError: [Errno 48] Address already in use`

**Solution:**
```bash
# Find process using the port (8001 for backend, 3000 for frontend)
lsof -i :8001
lsof -i :3000

# Kill the process
kill -9 <PID>
```

#### 3. Module Not Found Error (Backend)

**Error:** `ModuleNotFoundError: No module named 'fastapi'`

**Solution:**
- Ensure virtual environment is activated
- Reinstall dependencies: `pip install -r requirements.txt`

#### 4. Dependencies Installation Error (Frontend)

**Error:** Yarn installation failures

**Solution:**
```bash
# Clear yarn cache
yarn cache clean

# Remove node_modules and reinstall
rm -rf node_modules
yarn install
```

#### 5. CORS Errors

**Error:** `Access to fetch at 'http://localhost:8001' from origin 'http://localhost:3000' has been blocked by CORS policy`

**Solution:**
- Ensure backend `.env` has `CORS_ORIGINS="*"` for development
- Restart the backend server after changing `.env`

#### 6. Frontend Not Connecting to Backend

**Solution:**
- Verify `REACT_APP_BACKEND_URL` in frontend `.env` points to `http://localhost:8001`
- Restart frontend: Stop with Ctrl+C, then run `yarn start` again
- Check backend is running at http://localhost:8001/api/

---

## Development Tips

### Hot Reload

Both frontend and backend support hot reload:
- **Frontend:** Changes to React files will automatically refresh the browser
- **Backend:** Use `--reload` flag with uvicorn (as shown above) for auto-restart on file changes

### Testing the Stack

1. **Test Backend:**
   ```bash
   curl http://localhost:8001/api/
   ```
   Should return: `{"message":"Hello World"}`

2. **Test Frontend:**
   Open http://localhost:3000 in your browser

3. **Test Full Stack:**
   Interact with the frontend UI - it should communicate with the backend API

---

## Additional Commands

### Backend

```bash
# Run with specific host and port
uvicorn server:app --host 0.0.0.0 --port 8001 --reload

# Run without reload (production-like)
uvicorn server:app --host 0.0.0.0 --port 8001

# Run tests
pytest
```

### Frontend

```bash
# Start development server
yarn start

# Build for production
yarn build

# Run tests
yarn test
```

### MongoDB

```bash
# Connect to MongoDB shell
mongosh

# Show databases
show dbs

# Use your database
use test_database

# Show collections
show collections

# Query data
db.status_checks.find()
```

---

## Need Help?

If you encounter any issues not covered in this guide:

1. Check the terminal logs for error messages
2. Verify all prerequisites are installed
3. Ensure all services (MongoDB, Backend, Frontend) are running
4. Check the [API documentation](http://localhost:8001/docs) when backend is running

---

## License

This project is for educational purposes.
