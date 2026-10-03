import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import type { ProductType } from "../types/product-type";
import type { CartItem } from "../types/cart-item-type";



type State = {
  cart: CartItem[];
};

type Action = {
  addToCart: (product: ProductType) => void;
  removeFromCart: (id: string) => void;
  increaseQty: (id: string) => void;
  decreaseQty: (id: string) => void;
  clearCart: () => void;
};

export const useFoodStore = create<State & Action>()(
  persist(
    immer((set) => ({
      cart: [],

      addToCart: (product) => {
        set((state) => {
          const item = state.cart.find(
            (item: CartItem) => item.id === product.id,
          );

          if (item) {
            item.qty++;
          } else {
            state.cart.push({ ...product, qty: 1 });
          }
        });
      },

      removeFromCart: (id) => {
        set((state) => {
          state.cart = state.cart.filter((item: CartItem) => item.id !== id);
        });
      },

      increaseQty: (id: string) => {
        set((state) => {
          const item = state.cart.find((item: CartItem) => item.id === id);

          if (item) {
            item.qty++;
          }
        });
      },
      decreaseQty: (id: string) => {
        set((state) => {
          const item = state.cart.find((product) => product.id === id);

          if (item) {
            if (item.qty > 1) {
              item.qty--;
            } else {
              state.cart = state.cart.filter((item) => item.id !== id);
            }
          }
        });
      },

      clearCart: () => {
        set((state) => {
          state.cart = [];
        });
      },
    })),
    {
      name: "cart",
    },
  ),
);
