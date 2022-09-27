import { ReactNode } from "react";

export type FunctionChildren<T = any> = (...args: T[]) => ReactNode;

export type PropsWithReactNodeChildren<P = unknown> = P & {
  children: ReactNode;
};

export type PropsWithReactFunctionChildren<
  P = unknown,
  F extends FunctionChildren = (...args: any) => ReactNode
> = P & {
  children: F;
};
