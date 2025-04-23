
import { MotionProps } from "framer-motion";
import { LucideIcon } from "lucide-react";

export interface FounderType {
  name: string;
  role: string;
  desc: string;
  img: string;
}

export interface HighlightType {
  label: string;
  desc: string;
  icon: LucideIcon;
}

export interface AnimationProps {
  isInView: boolean;
  itemVariants: MotionProps["variants"];
}
