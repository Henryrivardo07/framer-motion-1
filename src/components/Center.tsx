import { ReactNode } from "react";

// Wrapper component untuk menampilkan konten di tengah layar
export function Center({ children }: { children: ReactNode }) {
  return <div className="h-screen flex items-center justify-center bg-gray-100">{children}</div>;
}
