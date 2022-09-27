import {
  PropsWithReactFunctionChildren,
  PropsWithReactNodeChildren,
} from "../lib/index";
import { expectType } from "tsd";
import { ReactNode } from "react";

interface Props {
  id: string;
}

type ChildrenFunc = (...args: number[]) => ReactNode;

let propsWithReactNodeChildrenValue: PropsWithReactNodeChildren<Props>;

let propsWithFunctionChildrenValue: PropsWithReactFunctionChildren<
  Props,
  ChildrenFunc
>;

test("PropsWithRectFunctionChildren util 함수 타입 체크", () => {
  expectType<Props & { children: ReactNode }>(propsWithReactNodeChildrenValue);
});

test("PropsWithRectNodeChildren util 함수 타입 체크", () => {
  expectType<Props & { children: ChildrenFunc }>(
    propsWithFunctionChildrenValue
  );
});
