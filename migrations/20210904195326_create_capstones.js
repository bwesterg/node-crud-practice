
exports.up = function(knex) {
    return knex.schema.createTable('capstones', t => {
        t.increments();

        t.string('title');
        t.integer('fire');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('capstones');
};
