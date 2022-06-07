const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePicture: {
      type: String,
      default:
        'https://firebasestorage.googleapis.com/v0/b/netflix-clone-49e41.appspot.com/o/items%2F1654322566159profilePictureJuvenile_Ragdoll.jpg?alt=media&token=42c20596-e314-407c-a190-e0daaf677677',
    },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
