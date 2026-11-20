import { getPosts } from "@/utils/utils";
import { baseURL, routes as routesConfig } from "@/resources";
import { getProjectSlides } from "@/resources/projectSlides";

export default async function sitemap() {
  const blogs =
    routesConfig["/blog"]
      ? getPosts(["src", "app", "blog", "posts"]).map((post) => ({
          url: `${baseURL}/blog/${post.slug}`,
          lastModified: post.metadata.publishedAt,
        }))
      : [];

  const projectSlides = getProjectSlides().map((project) => ({
    url: `${baseURL}/projects/view/${project.id}`,
  }));

  const activeRoutes = Object.keys(routesConfig).filter(
    (route) => route !== "/work" && routesConfig[route as keyof typeof routesConfig],
  );

  const routes = activeRoutes.map((route) => ({
    url: `${baseURL}${route !== "/" ? route : ""}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs, ...projectSlides];
}
