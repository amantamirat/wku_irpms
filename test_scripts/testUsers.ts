import axios from 'axios';
import { faker } from '@faker-js/faker';
import { Role } from '../shared/models/User';

const generateRandomUser = () => {
  return {
    email: faker.internet.email(),
    username: faker.internet.userName(),
    password: faker.internet.password(),
    activated: faker.datatype.boolean(),
    roles: faker.helpers.arrayElements(Object.values(Role), 2), // Randomly pick 2 roles
  };
};

const postRandomUsers = async (count: number) => {
  for (let i = 0; i < count; i++) {
    const user = generateRandomUser();
    try {
      const response = await axios.post('http://localhost:4000/api/users', user);
      console.log(`User ${i + 1} created:`, response.data);
      //console.log(user);
    } catch (error) {
      const err = error as Error;
      console.error(`Failed to create user ${i + 1}:`, err.message);
    }
  }
};

// Run the script
postRandomUsers(20);
