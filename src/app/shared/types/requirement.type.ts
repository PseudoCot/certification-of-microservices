import { RequirementTypes } from "../consts";
import { ValueOf } from "./value-of.type";

export type RequirementType = ValueOf<typeof RequirementTypes>
