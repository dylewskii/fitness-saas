/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use server";

import { db } from "~/server/db";
import { currentUser } from "@clerk/nextjs/server";

export async function checkAuthStatus() {
  const user = await currentUser();

  if (!user?.id) {
    return { success: false, message: "User not authenticated" };
  }

  if (!user.emailAddresses[0]?.emailAddress) {
    return { success: false, message: "User does not have an email address" };
  }

  if (!user.firstName || !user.lastName) {
    return {
      success: false,
      message: "User does not have a first or last name",
    };
  }

  if (!user.createdAt || !user.updatedAt) {
    return {
      success: false,
      message: "User is missing createdAt or updatedAt",
    };
  }

  const existingUser = await db.user.findUnique({
    where: {
      id: user.id,
    },
  });

  // save user to DB
  if (!existingUser) {
    await db.user.create({
      data: {
        id: user.id,
        email: user.emailAddresses[0]?.emailAddress,
        firstName: user.firstName,
        lastName: user.lastName,
        createdAt: new Date(user.createdAt),
        updatedAt: new Date(user.updatedAt),
      },
    });
  }

  return { success: true, message: "User authenticated" };
}
