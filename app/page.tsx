import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";
import AuthButton from "@/components/AuthButton";

export default async function Home() {

  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/login");
  };

  return (
    <div className="">
      <MaxWidthWrapper className="pt-20 flex flex-col">
        <div>
          <h1>Keep track of <span className="bg-primary text-neutral">food expiry</span> dates</h1>
          <AuthButton/>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
