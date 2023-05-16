
export interface cartitem {
  brand: String;
  category: String;
  desc: String;
  id: String;
  img: any;
  price: number;
  qty: number;
  rating: String;
  title: string;
}

export interface IInitialState {
  cart: cartitem[];
}

export const initialstate: IInitialState = {
  cart: [],
};

export const reducer = (state: any = initialstate, action: any) => {
  switch (action.type) {

    case "ADD_TO_CART":
      const item = state.cart.find(
        (i: { id: any }) => i.id === action.payload.id
      );

      if (item?.length > 0) {
        return state;
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, qty: 1 }],
        };
      }
      break;


    // Increment qty
    case "INCREASE":
      const tempstate1 = state.cart.find(
        (i: { id: any }) => i.id === action.payload.id
      );
      if (tempstate1) {
        return {
          ...state,
          cart: state.cart.map((i: { qty: number; id: any }) =>
            i.id === action.payload.id
              ? {
                  ...i,
                  qty: i.qty + 1,
                }
              : i
          ),
        };
      }
      
      return tempstate1;

      
    case "DECREASE":
      const tempstate2 = state.cart.find(
        (i: { id: any }) => i.id === action.payload.id
      );
      if (tempstate2) {
        return {
          ...state,
          cart: state.cart.map((i: { qty: number; id: any }) =>
            i.id === action.payload.id
              ? {
                  ...i,
                  qty: i.qty - 1,
                }
              : i
          ),
        };
      }
     
      return tempstate2;


    
      
          

    

    // if (item) {
    //   return {
    //     ...state,
    //     cart: state.cart.map((i: { qty: number; id: any }) =>
    //       i.id === action.payload.id
    //         ? {
    //             ...i,
    //             qty: i.qty + 1,
    //           }
    //         : i
    //     ),
    //   };
    // } else {
    //   return {
    //     ...state,
    //     cart: [...state.cart, { ...action.payload, qty: 1 }],
    //   };
    // }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((i: { id: any }) => i.id !== action.payload.id),
      };
      break;

    default:
      return state;
      break;
  }
};
