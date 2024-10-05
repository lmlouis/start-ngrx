import { IModel } from "../imodel";

export interface ModelStateInterface {
  isLoading: boolean;
  model:IModel[];
  error: String | null;
}
