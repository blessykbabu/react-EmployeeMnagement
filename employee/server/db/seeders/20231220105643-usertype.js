

const { models } = require('../models/index.js');

module.exports = {
  up: async () => {
    try {
      // Check if the models object contains the 'employees' model
      if ('usertypes' in models) {
        const usertypes = models.usertypes;
        
        const inserted = await usertypes.insertMany([
          
            
          {
            _id:"6582ce130a0dd1bc7fe48dad",
            usertype:'employee'
          },
          {
            _id:"6582ce130a0dd1bc7fe48dae",
            usertype:'admin'
          },
        ]);
        console.log(inserted.length + ' documents inserted');
      } else {
        throw new Error('usertype model not found in models object');
      }
    } catch (error) {
      console.error('Error in up() function:', error);
      throw error;
    }
  },

  down: async () => {
    try {
      // Check if the models object contains the 'employees' model
      if ('usertypes' in models) {
        const usertypes = models.usertypes;
        const deleted = await usertypes.deleteMany({
          _id:{$in:["6582ce130a0dd1bc7fe48dad","6582ce130a0dd1bc7fe48dae"]}

          
        });
        console.log(deleted.deletedCount + ' documents deleted');
      } else {
        throw new Error('usertype model not found in models object');
      }
    } catch (error) {
      console.error('Error in down() function:', error);
      throw error;
    }
  },
};

