import { createContext } from "react";
import Sale from "../models/Sale";

export interface ISalesContext {
  changeSales: (sales: Sale[]) => void;
}

const SalesContext = createContext({} as ISalesContext);

export default SalesContext;