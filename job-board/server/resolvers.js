import { Company, Job } from "./db.js";

export const resolvers = {
  Query: {
    jobs: async () => Job.findAll(),
    job: (_root, args) => Job.findById(args.id),
  },

  Job: {
      company: (job) => {
          return Company.findById(job.companyId);
          
      }
  }
};
