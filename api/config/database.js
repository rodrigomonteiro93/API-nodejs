module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'root',
    database: 'nodeSql',
    define: {
        timestamps: true,
        underscored: true, //snack_case
    }
}