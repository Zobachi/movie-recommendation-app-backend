import User from '../models/User.js';

// ✅ Add Favorite
export const addFavorite = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { movie } = req.body;

    if (!movie || !movie.id) {
      return res.status(400).json({ message: 'Movie data is required' });
    }

    const user = await User.findById(userId);
    const alreadyExists = user.favorites.find((fav) => fav.id === movie.id);

    if (alreadyExists) {
      return res.status(400).json({ message: 'Movie already in favorites' });
    }

    user.favorites.push(movie);
    await user.save();

    res.status(200).json({ message: 'Movie added to favorites', favorites: user.favorites });
  } catch (error) {
    console.error('Add to favorites error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// ✅ Remove Favorite
export const removeFavorite = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { movieId } = req.body;

    const user = await User.findById(userId);
    user.favorites = user.favorites.filter((fav) => fav.id !== movieId);
    await user.save();

    res.status(200).json({ message: 'Movie removed from favorites', favorites: user.favorites });
  } catch (error) {
    console.error('Remove from favorites error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// ✅ Add to Watchlist
export const addWatchlist = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { movie } = req.body;

    if (!movie || !movie.id) {
      return res.status(400).json({ message: 'Movie data is required' });
    }

    const user = await User.findById(userId);
    const alreadyExists = user.watchlist.find((item) => item.id === movie.id);

    if (alreadyExists) {
      return res.status(400).json({ message: 'Movie already in watchlist' });
    }

    user.watchlist.push(movie);
    await user.save();

    res.status(200).json({ message: 'Movie added to watchlist', watchlist: user.watchlist });
  } catch (error) {
    console.error('Add to watchlist error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// ✅ Remove from Watchlist
export const removeWatchlist = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { movieId } = req.body;

    const user = await User.findById(userId);
    user.watchlist = user.watchlist.filter((item) => item.id !== movieId);
    await user.save();

    res.status(200).json({ message: 'Movie removed from watchlist', watchlist: user.watchlist });
  } catch (error) {
    console.error('Remove from watchlist error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// You can then similarly define `removeFavorite`, `addWatchlist`, `removeWatchlist`





// /server/controllers/movieController.js
// import User from '../models/User.js';

// export const addFavorite = async (req, res) => {
//   const userId = req.user.userId;
//   const { movieId } = req.body;

//   try {
//     const user = await User.findById(userId);
//     if (!user.favorites.includes(movieId)) {
//       user.favorites.push(movieId);
//       await user.save();
//     }
//     res.status(200).json({ message: 'Movie added to favorites', favorites: user.favorites });
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to add favorite', error: err.message });
//   }
// };

// export const removeFavorite = async (req, res) => {
//   const userId = req.user.userId;
//   const { movieId } = req.body;

//   try {
//     const user = await User.findById(userId);
//     user.favorites = user.favorites.filter(id => id !== movieId);
//     await user.save();
//     res.status(200).json({ message: 'Movie removed from favorites', favorites: user.favorites });
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to remove favorite', error: err.message });
//   }
// };

// export const addWatchlist = async (req, res) => {
//   const userId = req.user.userId;
//   const { movieId } = req.body;

//   try {
//     const user = await User.findById(userId);
//     if (!user.watchlist.includes(movieId)) {
//       user.watchlist.push(movieId);
//       await user.save();
//     }
//     res.status(200).json({ message: 'Movie added to watchlist', watchlist: user.watchlist });
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to add to watchlist', error: err.message });
//   }
// };

// export const removeWatchlist = async (req, res) => {
//   const userId = req.user.userId;
//   const { movieId } = req.body;

//   try {
//     const user = await User.findById(userId);
//     user.watchlist = user.watchlist.filter(id => id !== movieId);
//     await user.save();
//     res.status(200).json({ message: 'Movie removed from watchlist', watchlist: user.watchlist });
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to remove from watchlist', error: err.message });
//   }
// };
