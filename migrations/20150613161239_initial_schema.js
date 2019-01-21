exports.up = knex => {
  return knex.schema
    .createTable('books', table => {
      table.increments('id').primary();
      //--
      table.string('name');
      //--
      table.datetime('createdAt').notNullable();
      table.datetime('updatedAt').notNullable();
    })
    .createTable('pages', table => {
      table.increments('id').primary();
      //--
      table.integer('bookId').unsigned();
      table.string('title');
      //--
      table.datetime('createdAt').notNullable();
      table.datetime('updatedAt').notNullable();
    });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists('books').dropTableIfExists('pages');
};
