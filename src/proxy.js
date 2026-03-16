import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

// Define restricted routes and allowed roles
const routeRoles = {
  "/addCampaign": ["organizer", "admin"], // private page
  "/manageCampaigns": ["organizer", "admin"], // organizers and admins
  "/manage-member": ["admin"], // only admin
};

export async function proxy(req) {
  const token = await getToken({ req });
  const isAuthenticated = Boolean(token);
  const userRole = token?.role || null;
  const path = req.nextUrl.pathname;

  // Find route that matches the beginning of the path
  const matchedRoute = Object.keys(routeRoles).find((route) =>
    path.startsWith(route),
  );

  // If route requires authentication but user is not logged in
  if (matchedRoute && !isAuthenticated) {
    const loginUrl = new URL(
      `${process.env.NEXT_PUBLIC_API_URL}/login`,
      req.url,
    );
    loginUrl.searchParams.set("callbackUrl", path);
    return NextResponse.redirect(loginUrl);
  }

  // If user is authenticated but role is not allowed
  if (matchedRoute && !routeRoles[matchedRoute].includes(userRole)) {
    return NextResponse.redirect(new URL("/forbidden", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/addCampaign/:path*",
    "/manageCampaigns/:path*",
    "/manage-member/:path*",
  ],
};
