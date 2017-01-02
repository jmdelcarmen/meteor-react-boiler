'use strict';

import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

Meteor.methods({
  //meteor-method = mongoDB queries
  'collections.post': function () {
    return Collection.insert({ text: 'sup' });
  },

  'collections.get': function () {
    return Collection.find({}).fetch();
  }

});

//import Collection on both Client & Server file;
export const Collection = new Mongo.Collection('Collection');
