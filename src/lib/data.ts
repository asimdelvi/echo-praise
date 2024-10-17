import prisma from "../../prisma/prisma-client";

export const getProjects = async () => {
  const projects = await prisma.project.findMany();
  return projects;
};
