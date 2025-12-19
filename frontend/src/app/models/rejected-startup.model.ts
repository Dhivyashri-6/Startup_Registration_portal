export interface RejectedStartup {
  _id?: string;
  id?: string;
  name: string;
  description: string;
  founder: string;
  industry: string;
  foundedDate: Date;
  employees: number;
  website?: string;
  userId: string;
  rejectionReason: string;
  originalStartupId?: string;
}