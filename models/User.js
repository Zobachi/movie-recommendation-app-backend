import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    // Array of full movie objects or at least the TMDB movie IDs
    favorites: {
      type: Array,
      default: [],
    },

    watchlist: {
      type: Array,
      default: [],
    },

    reviews: [
      {
        movieId: Number,
        rating: Number,
        review: String,
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);
export default User;
