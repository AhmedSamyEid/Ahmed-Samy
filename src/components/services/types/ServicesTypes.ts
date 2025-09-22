import { ReactNode } from "react";

export interface Service {
  icon: ReactNode;
  title: string;
  badge?: string;
  description: string;
  features: string[];
  tech: string[];
}

export interface Step {
  step: string;
  title: string;
  desc: string;
}

export interface Choose {
  icon: ReactNode;
  title: string;
  desc: string;
}
