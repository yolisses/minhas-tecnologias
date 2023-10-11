import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function Badge({ children }: Props) {
  return (
    <div
      className="bg-gray-500 rounded-full"
      style={{
        paddingInline: "0.5rem",
        paddingBlock: "0.25rem",
        fontSize: "0.8rem",
      }}
    >
      {children}
    </div>
  );
}
