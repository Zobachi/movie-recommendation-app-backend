// routes/userRoute.js
import express from 'express';
import isAuthenticated from '../middleware/isAuthenticated.js'; //  Corrected import
import User from '../models/User.js';

const router = express.Router();

router.get('/profile', isAuthenticated, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json({
      username: user.username,
      favorites: user.favorites || [],
      watchlist: user.watchlist || [],
    });
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
