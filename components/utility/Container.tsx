import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <section className="max-w-3xl">{children}</section>;
};

export default Container;
