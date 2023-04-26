/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('products', (table) => {
        table.increments('id').primary();
        table.string('product_name').notNullable();
        table.string('description').notNullable();
        table.string('category').notNullable();
        table.string('status').notNullable();
        table.integer('quantity').notNullable();
        table.integer('sale_price').notNullable();
        table.integer('purchase_price').notNullable();
        table.string('image_url');
        table.timestamps(true, true);
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('products');
};