import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Insert a new user
async function insertUser(
  username: string,
  password: string,
  firstName: string,
  lastName: string
) {
  const result = await prisma.user.create({
    data: {
      username,
      password,
      firstName,
      lastName,
    },
  });
  return result;
}
// insertUser(
//   "test-username1",
//   "test-password2",
//   "test-first-name3",
//   "test-last-name4"
// );

// Update a user
interface UpdateParams {
  firstName: string;
  lastName: string;
}
async function updateUser(
  username: string,
  { firstName, lastName }: UpdateParams
) {
  const result = await prisma.user.update({
    where: {
      username,
    },
    data: {
      firstName,
      lastName,
    },
  });
  return result;
}
// updateUser("test-username", {
//   firstName: "new first name",
//   lastName: "new last name",
// });

// Get details of a user
async function getUserDetails(username: string) {
  const result = await prisma.user.findFirst({
    where: {
      username,
    },
  });
  console.log("result", result);
}

getUserDetails("test-username1");
