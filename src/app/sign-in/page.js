import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";

export default async function SignIn() {
  const session = await getServerSession(authOptions);
  const cookieStore = await cookies();

  if (session) {
    redirect("/");
  }

  const csrfTokenCookie = `${
    process.env.NODE_ENV == "production" ? "__Host-" : ""
  }next-auth.csrf-token`;
  const csrfToken = cookieStore.get(csrfTokenCookie)?.value.split("|")[0];

  return (
    <div className="flex justify-center align-center text-base">
      <form className="flex flex-row gap-4" method="post" action="/api/auth/callback/credentials">
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <input name="password" type="password" />
        <button type="submit">Kirjaudu</button>
      </form>
    </div>
  );
}
