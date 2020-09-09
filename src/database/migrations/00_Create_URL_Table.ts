import Knex from 'knex';

export function up(knex: Knex) {
    return knex.schema.createTable('url', table => {
        table.string('id', 64).primary().notNullable();
        table.string('to', 512).notNullable();
    })
}

export function down(knex: Knex) {
    return knex.schema.dropTable('url');
}