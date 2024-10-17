import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const data = [
  {
    name: "Website Redesign",
    header: "Modern UI/UX Revamp",
    customMessage:
      "Looking forward to enhancing user experience with this redesign.",
    questions: {
      create: [
        { question: "What is the primary goal of the redesign?" },
        { question: "Who is the target audience?" },
      ],
    },
  },
  {
    name: "E-Commerce Platform",
    header: "New Online Shopping Experience",
    customMessage: "Creating a seamless shopping journey for all users.",
    questions: {
      create: [
        { question: "What payment methods should be supported?" },
        { question: "Should we support multiple languages?" },
        { question: "Is there a need for real-time inventory updates?" },
      ],
    },
  },
  {
    name: "Mobile App Development",
    header: "Cross-Platform Mobile App",
    customMessage: "A fast, responsive app for both iOS and Android.",
    questions: {
      create: [
        { question: "What platforms should the app support?" },
        { question: "What key features should the app have?" },
      ],
    },
  },
  {
    name: "CRM System",
    header: "Customer Management Revamp",
    customMessage: "Streamlining customer interactions with better tools.",
    questions: {
      create: [
        { question: "What data should be tracked for each customer?" },
        { question: "How should we handle user permissions?" },
      ],
    },
  },
  {
    name: "Social Media Integration",
    header: "Unified Social Media Presence",
    customMessage: "Bringing all platforms into one seamless experience.",
    questions: {
      create: [
        { question: "What social platforms need to be integrated?" },
        { question: "How often should the data sync?" },
      ],
    },
  },
  {
    name: "API Development",
    header: "High-Performance API",
    customMessage: "Ensuring fast and scalable API for external integrations.",
    questions: {
      create: [
        { question: "What data endpoints will be needed?" },
        { question: "Should we implement rate-limiting?" },
      ],
    },
  },
  {
    name: "Data Analysis Tool",
    header: "Advanced Analytics Dashboard",
    customMessage: "Building insightful dashboards for better decision-making.",
    questions: {
      create: [
        { question: "What types of data visualizations are required?" },
        { question: "Should we support exporting data?" },
      ],
    },
  },
  {
    name: "Automation Script",
    header: "Process Automation",
    customMessage: "Reducing manual effort by automating key processes.",
    questions: {
      create: [
        { question: "What processes can be automated?" },
        { question: "What is the expected time savings from automation?" },
      ],
    },
  },
  {
    name: "SEO Optimization",
    header: "Search Engine Optimization",
    customMessage:
      "Improving visibility and traffic with enhanced SEO strategies.",
    questions: {
      create: [
        { question: "What are the primary keywords to focus on?" },
        { question: "Should we support structured data for SEO?" },
      ],
    },
  },
  {
    name: "Cloud Migration",
    header: "Move to Cloud Infrastructure",
    customMessage: "Ensuring a smooth transition to a scalable cloud solution.",
    questions: {
      create: [
        { question: "What cloud provider should we use?" },
        { question: "How should we handle scaling and load balancing?" },
      ],
    },
  },
];

const seed = async () => {
  const promiseList = [];

  for (let i = 0; i < data.length; i++) {
    const promise = prisma.project.create({
      data: data[i],
    });
    promiseList.push(promise);
  }

  await Promise.all(promiseList);

  console.log("Data seeded successfully!");
};

seed();
