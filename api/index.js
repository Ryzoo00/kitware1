// Vercel serverless function entry point
import app from '../server/index.js';

// Vercel handler
export default async function handler(req, res) {
  try {
    // Connect to database if not connected
    await app(req, res);
  } catch (error) {
    console.error('Serverless function error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
}
