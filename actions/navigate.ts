"use server";

import { redirect } from "next/navigation";

export async function onServerNavigate(route: string) {
  redirect(route);
}
