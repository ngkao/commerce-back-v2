/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('order_items', (table) => {
        table.increments('id').primary();
        table
            .integer('product_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('products')
            .onUpdate('CASCADE')
            .onDelete('CASCADE'); 
        table
            .integer('order_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('orders')
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


// Before adjusting IDs

// exports.up = function(knex) {
//     return knex.schema.createTable('order_items', (table) => {
//         table.increments('id').primary();
//         table
//             .increments('product_id')
//             .references('products.id')
//             .onUpdate('CASCADE')
//             .onDelete('CASCADE'); 
//         table
//             .increments('order_id')
//             .references('orders.id')
//             .onUpdate('CASCADE')
//             .onDelete('CASCADE');  
//         table.integer('quantity').notNullable();
//         table.timestamps(true, true);
//       });
// };