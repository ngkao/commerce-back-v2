/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('order_items', (table) => {
        table.uuid('id').primary();
        table
            .increments('product_id')
            .references('products.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE'); 
        table
            .increments('order_id')
            .references('orders.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');  
        table.integer('quantity').notNullable();
        table.timestamps(true, true);
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('order_items');
};