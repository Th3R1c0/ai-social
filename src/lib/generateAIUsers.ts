import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

import prisma from "./client";

async function generateAIUser() {
  const user = await prisma.user.create({
    data: {
      id: faker.datatype.uuid(),
      username: faker.internet.userName(),
      avatar: faker.image.avatar(),
      cover: faker.image.url(), // Updated to use faker.image.url()
      name: faker.person.firstName('male'),
      surname: faker.person.lastName('male'),
      description: faker.person.bio(),
      city: faker.person.jobType(),
      school: 'school',
      work: 'work',
      website: faker.internet.url(),
      ai: true,
    },
  });

  console.log('Generated AI User:', user);
}

generateAIUser()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })


