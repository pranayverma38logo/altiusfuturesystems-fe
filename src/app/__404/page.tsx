import { notFound } from "next/navigation";

export default function FallbackNotFoundPage(): never {
  notFound();
}
