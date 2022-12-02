'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
options.tableName = 'Spots';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(options, [
      {
        ownerId: 2,
        address: '8963 E. Mescal St',
        city: 'Scottsdale',
        state: 'Arizona',
        country: 'United States',
        lat:33.58,   
        lng: -111.89,
        name: 'Triangular A-Frame home',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        price: 1300.00,
      },
      {
        ownerId: 2,
        address: '1122 S. Random Ave',
        city: 'Strawberry',
        state: 'Arizona',
        country: 'United States',
        lat: 31.59,   
        lng: -100.89,
        name: 'Lakeside Home',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        price: 125.00,
      },
      {
        ownerId: 2,
        address: '1111 N. East St.',
        city: 'Tempe',
        state: 'Arizona',
        country: 'United States',
        lat: 31.59,   
        lng: -100.89,
        name: 'Australian Beachfront Home',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        price: 250.00,
      },
      {
        ownerId: 2,
        address: '2222 S. West St.',
        city: 'Mesa',
        state: 'Arizona',
        country: 'United States',
        lat: 31.59,   
        lng: -100.89,
        name: 'East Side Living',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        price: 300.00,
      },
      {
        ownerId: 2,
        address: '3333 E. North St.',
        city: 'Phoenix',
        state: 'Arizona',
        country: 'United States',
        lat: 31.59,   
        lng: -100.89,
        name: 'The Sam Rayburn Suite',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        price: 225.00,
      },
      {
        ownerId: 3,
        address: '4444 N. South Ave.',
        city: 'Fountain Hills',
        state: 'Arizona',
        country: 'United States',
        lat: 31.59,   
        lng: -100.89,
        name: 'Fountain Hills Refuge',
        description: 'Welcome to a Custom Italian 4,109 sq.ft. Villa with spectacular views at Fountain Hills! ',
        price: 955.00,
      },
      {
        ownerId: 3,
        address: '5443 N Lyndon Ave.',
        city: 'Sevierville',
        state: 'Tennessee',
        country: 'United States',
        lat: 31.59,   
        lng: -100.89,
        name: "Mountaineer's Retreat",
        description: 'This secluded mountain getaway is an adventurers’ retreat exclusive to 4-wheel drivers!',
        price: 450.00,
      },
      {
        ownerId: 3,
        address: '7841 N 32 St.',
        city: 'Bear Valley',
        state: 'California',
        country: 'United States',
        lat: 31.59,   
        lng: -100.89,
        name: 'Bright, Spacious Home',
        description: 'This mountain getaway boasts more windows than wall space to take full advantage of the amazing views!',
        price: 333.00,
      },
      {
        ownerId: 1,
        address: '3654 S Kenwood Dr.',
        city: 'Mount Holly',
        state: 'Vermont',
        country: 'United States',
        lat: 31.59,   
        lng: -100.89,
        name: 'Okemo A-Frame - Hammock',
        description: "Welcome to the Okemo A-Frame! With an oversized deck, featuring outdoor dining, a barrel sauna, and hot tub you'll enjoy the outdoors year round.",
        price: 355.00,
      },
      { //id 10
        ownerId: 1,
        address: '1850 E. Southern Ave.',
        city: 'Joshua Tree',
        state: 'California',
        country: 'United States',
        lat: 31.59,   
        lng: -100.89,
        name: 'Stunning Desert Hideaway',
        description: 'Sunset House — breathtakingly designed to transport you to your very own mid-century modern desert retreat',
        price: 263.00,
      },
      {
        ownerId: 2,
        address: '1850 E. Southern Ave.',
        city: 'Gatlinburg',
        state: 'Tennessee',
        country: 'United States',
        lat: 31.59,   
        lng: -100.89,
        name: 'Special! Jan & Feb $169/Night!',
        description: 'Nestled in the Mountain Shadows Resort Mystic Mountain Marvel is an ideal cabin for family/friends looking to be close to Gatlinburg yet out of the downtown hustle and bustle. ',
        price: 760.00,
      },
      { //id 11
        ownerId: 1,
        address: '1850 E. Southern Ave.',
        city: 'Wasilla',
        state: 'Alaska',
        country: 'United States',
        lat: 31.59,   
        lng: -100.89,
        name: '2 Br/1Ba Lakefront Cabin!',
        description: 'Adorable, cozy cabin, perfectly positioned to catch the BEST sunsets on peaceful Blodgett Lake.',
        price: 170.00,
      },
      
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete(options, null, {});
  }
};
