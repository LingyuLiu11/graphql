import { Company, Job } from "./db.js";

export const resolvers = {
  Query: {
    jobs: async () => Job.findAll(),
  },

  Job: {
      company: (job) => {
          return Company.findById(job.companyId);
          
      }
  }
};
