"use server";

import { redirect } from "next/navigation";

export async function onNavigate(route: string) {
  redirect(route);
}
