'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './game.events';

var GameSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

registerEvents(GameSchema);
export default mongoose.model('Game', GameSchema);
