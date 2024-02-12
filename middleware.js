import { NextResponse } from "next/server";
import { cookies } from "next/headers";
const getCookie = async (name) => {
  return cookies().get(name)?.value ?? "";
};

export async function middleware(request) {
  console.log("test middle dijalankan");
  const token = await getCookie("token");
  // if (request.nextUrl.pathname.startsWith("/main")) {
  if (!token) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
  // }
}

export const config = {
  matcher: ["/main/:path*"],
};
