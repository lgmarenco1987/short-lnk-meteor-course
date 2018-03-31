import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';


SimpleSchema.defineValidationErrorTransform(error => {
    return new Meteor.Error(error.message);
});