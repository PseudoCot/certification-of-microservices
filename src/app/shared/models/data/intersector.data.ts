import { ReleaseData } from "./release.data";
import { ServiceData } from "./service.data";

export type Intersector = (ServiceData | ReleaseData) & {
  description?: string;
  semanticVersion?: string;
};
