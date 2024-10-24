import prisma from "@/prisma/prisma-client";

export const getProjects = async () => {
  try {
    const projects = await prisma.project.findMany();
    return projects;
  } catch (e) {
    console.log("Error: ", e);
    throw new Error("Failed to fetch projects");
  }
};
