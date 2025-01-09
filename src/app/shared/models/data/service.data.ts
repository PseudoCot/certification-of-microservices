import { RequirementData } from "./requirement.data";

export type ServiceData = {
  id: string;
  name: string;
  description?: string;
  confluencePageLink?: string;
  requirements: RequirementData[];
};
