import { createContext, useReducer, useContext } from "react";
import { reducer, initialstate, IInitialState } from "./Reducer";
interface IContext {
  product: IInitialState;
  dis : any ;
}

const Context = createContext<IContext>({
  product: { cart: [] },
  dis: null ,
});

const Store = ({ children }: { children: React.ReactNode }) => {
  const [product, dis] = useReducer(reducer, initialstate);

  return (
    <Context.Provider value={{ product, dis }}>{children}</Context.Provider>
  );
};

export const Use_r_state = () => useContext(Context);
export default Store;
