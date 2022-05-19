import { Company, Job } from "./db.js";

export const resolvers = {
  Query: {
    company: (_root, { id }) => Company.findById(id),
    job: (_root, { id }) => Job.findById(id),
    jobs: () => Job.findAll(),
  },

  Mutation: {
    createJob: (_root, { input }, { user }) => {
      if (!user) {
        throw new Error("Unauthorized");
      }
      return Job.create({ ...input, companyId: user.companyId });
    },
    deleteJob: async (_root, { id }, { user }) => {
      if (!user) {
        throw new Error("Unauthorized");
      }
      const job = await Job.findById(id);
      if (job.companyId !== user.companyId) {
        throw new Error("Unauthorized");
      }
      return Job.delete(id);
    },
    updateJob: (_root, { input }, { user }) => {
      if (!user) {
        throw new Error("Unauthorized");
      }
      const job = await Job.findById(id);
      if (job.companyId !== user.companyId) {
        throw new Error("Unauthorized");
      }
      return Job.update(input);
    },
  },

  Company: {
    jobs: (company) => Job.findAll((job) => job.companyId === company.id),
  },

  Job: {
    company: (job) => Company.findById(job.companyId),
  },
};
