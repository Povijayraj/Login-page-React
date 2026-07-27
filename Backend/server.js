const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In production, serve the frontend build
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../Frontend/dist')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend/dist', 'index.html'));
  });
}

// Mock credentials
const MOCK_USER = {
  email: 'admin@trakstorm.com',
  password: 'Pass@123',
  name: 'Admin User',
  role: 'Administrator'
};

// API routes must come before the catch-all for production

// Login endpoint
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Email and password are required'
    });
  }

  // Check credentials
  if (email !== MOCK_USER.email || password !== MOCK_USER.password) {
    return res.status(401).json({
      success: false,
      message: 'Invalid email or password'
    });
  }

  // Success response
  return res.status(200).json({
    success: true,
    message: 'Login successful',
    user: {
      name: MOCK_USER.name,
      email: MOCK_USER.email,
      role: MOCK_USER.role
    }
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Trakstorm API server running on http://localhost:${PORT}`);
});
