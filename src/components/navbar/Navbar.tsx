import { Icons } from "../Icons";
import SearchBar from "../SearchBar";
import { buttonVariants } from "../ui/Button";
import UserAccountNav from "./UserAccountNav";
import { getAuthSession } from "@/lib/auth";
import Link from "next/link";

const Navbar = async () => {
  const session = await getAuthSession();

  return (
    <header className="fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-10 py-2">
      <nav className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        <Link href="/" className="flex gap-2 items-center">
          <Icons.logo className="h-8 w-8 sm:h-6 sm:w-6" />
          <p className="hidden text-zinc-700 text-sm font-medium md:block">
            Breaddit
          </p>
        </Link>

        <SearchBar />

        {session?.user ? (
          <UserAccountNav user={session.user} />
        ) : (
          <Link href="/sign-in" className={buttonVariants()}>
            Sign In
          </Link>
        )}
      </nav>
    </header>
  );
};
export default Navbar;
