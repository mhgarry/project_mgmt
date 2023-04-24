const db = require('./connection');
const User = require('../models/User');
const Project = require('../models/Project');
const Card = require('../models/Card');

const seed = async () => {
  try {
    await db.sync({ force: true });

    const users = await User.bulkCreate([
      { email: 'scelsi@mail.com', password: 'password' },
      { email: 'moraga@mail.com', password: 'password' },
      { email: 'garry@mail.com', password: 'password' },
    ]);
    console.log('----------USERS SEEDED!----------');

    const project = await Project.create({
      proj_title: 'Fullstack Project',
      team_id: 1, // replace with the actual team ID
    });
    console.log('----------PROJECTS SEEDED!----------');

    const cards = await Card.bulkCreate([
      {
        task_title: 'Build HTML',
        task_desc: 'index, login, register, and dashboard',
        task_cat: 'Frontend',
        teammate_id: 1, // replace with the actual user ID
      },
      {
        task_title: 'CSS',
        task_desc: 'research best frameworks',
        task_cat: 'Frontend',
        teammate_id: 2, // replace with the actual user ID
        status: 'In progress',
      },
      {
        task_title: 'Database',
        task_desc: 'schema.sql, models, and seeds.js',
        task_cat: 'Backend',
        teammate_id: 3, // replace with the actual user ID
        status: 'Completed',
      },

      {
        task_title: 'Authentication',
        task_desc: 'read passport docs',
        task_cat: 'Backend',
        teammate_id: 4, // replace with the actual user ID
        status: 'Completed',
      },
      {
        task_title: 'bcrypt',
        task_desc: 'determine levels of saltiness',
        task_cat: 'Backend',
        teammate_id: 4, // replace with the actual user ID
        status: 'In progress',
      },
    ]);
    console.log('----------CARDS SEEDED!----------');
  } catch (err) {
    console.error(err);
  } finally {
    process.exit();
  }
};

seed();
