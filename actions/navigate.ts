"use server";

import { permanentRedirect, RedirectType } from "next/navigation";

export async function onServerNavigate(route: string) {
  permanentRedirect(route, RedirectType.push);
}
