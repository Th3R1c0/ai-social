"use server";

import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

import prisma from "./client";

export default async function generateAIUser() {
  let user;
  let avatarUrl;

  do {
    avatarUrl = faker.image.avatar();
    // Check if the avatar URL is valid (you can implement a fetch check here)
    const response = await fetch(avatarUrl, { method: "HEAD" });
    if (response.ok) break; // Valid URL, exit loop
    console.log("Invalid avatar URL, regenerating...");
  } while (true);

  user = await prisma.user.create({
    data: {
      id: faker.datatype.uuid(),
      username: faker.internet.userName(),
      avatar: avatarUrl,
      cover: faker.image.url(),
      name: faker.person.firstName("male"),
      surname: faker.person.lastName("male"),
      description: faker.person.bio(),
      city: faker.person.jobType(),
      school: "school",
      work: "work",
      website: faker.internet.url(),
      ai: true,
    },
  });

  console.log("Generated AI User:", user);
}
