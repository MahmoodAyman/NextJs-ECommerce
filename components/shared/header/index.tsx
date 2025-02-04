/** Import utilities */
import Image from "next/image";
import Link from "next/link";

/** Import Components */

/* Import Constants  */
import { APP_NAME } from "@/lib/constants";
import Menu from "./menu";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        {/** Logo and App Name*/}
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              priority={true}
              src="/images/logo.svg"
              width={48}
              height={48}
              alt={`${APP_NAME} logo`}
            />
            <span className="hidden lg:block font-bold text-2xl ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>
        {/* Navigation */}
        <div className="space-x-3">
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
