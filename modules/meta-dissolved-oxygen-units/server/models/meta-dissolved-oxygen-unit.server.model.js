'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Meta dissolved oxygen unit Schema
 */
var MetaDissolvedOxygenUnitSchema = new Schema({
  order: {
    type: Number,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  }
});

mongoose.model('MetaDissolvedOxygenUnit', MetaDissolvedOxygenUnitSchema);
