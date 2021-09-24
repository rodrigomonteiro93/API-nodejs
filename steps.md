- Iniciar node
npm init -y

- Sequelize (ORM)
npm add express pg pg-hstore squelize

- Sequelize
npm add sequelize-cli

- Options sequelize command lines
npx sequelize --help

- Nodemon (helper server)
npm add nodemon

- Run server
npm run dev

- Create database with Sequelize (necessary configure file .sequelizerc)
npx sequelize db:create

- Create Migration
npx sequelize migration:create --name=create_table_name

- PAC for group routes
npm i express-group-routes

- Run Migrate
npx sequelize db:migrate

- Run Rollback
npx sequelize db:migrate:undo

- Group Routes
npm i express-group-routes