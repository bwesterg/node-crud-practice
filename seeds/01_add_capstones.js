
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('capstones').del()
    .then(function () {
      // Inserts seed entries
      return knex('capstones').insert([
        {title: 'brewery stars', fire: 9005 },
        {title: 'level up', fire: 9008 },
        {title: 'gameify', fire: 9012 }
      ]);
    });
};
