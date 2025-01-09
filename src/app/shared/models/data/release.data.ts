import { RequirementData } from "./requirement.data";

export type ReleaseData = {
  id: string,
  service_id: string,
  name: string,
  semanticVersion: string,
  // confluencePageLink: string,
  requirements: RequirementData[],
}
