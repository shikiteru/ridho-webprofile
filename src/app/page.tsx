import { Meta } from "@once-ui-system/core";
import { home, baseURL } from "@/resources";

import { redirect, RedirectType } from "next/navigation";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  redirect("/about", RedirectType.push);
}
