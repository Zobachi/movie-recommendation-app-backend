import express from 'express';

import {
  addFavorite,
  removeFavorite,
  addWatchlist,
  removeWatchlist,
} from '../controllers/movieController.js';

// ✅ Fixed import (default export expected)
import isAuthenticated from '../middleware/isAuthenticated.js';

const router = express.Router();

// Favorite routes
router.post('/favorites', isAuthenticated, addFavorite);
router.delete('/favorites', isAuthenticated, removeFavorite);

// Watchlist routes
router.post('/watchlist', isAuthenticated, addWatchlist);
router.delete('/watchlist', isAuthenticated, removeWatchlist);

export default router;
