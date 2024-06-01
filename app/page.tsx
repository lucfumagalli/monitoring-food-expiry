import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

export default async function Home() {

  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <div className="">
      <MaxWidthWrapper className="pt-20 flex flex-col">
        <div>
          <h1>Keep track of <span className="bg-primary text-neutral">food expiry</span> dates</h1>
          {user ? (
            <h2> Hy {user.email}</h2>
          ) : (
            <Link href="/login"
              className="btn btn-default">
              Login
            </Link>
          )}
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
