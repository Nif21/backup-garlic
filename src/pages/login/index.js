import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
export default function Login() {
  const [isLogin, setLogin] = useState(false);

  const handleClick = () => {
    setLogin(!isLogin);
  };

  const ConditionalLink = ({ children, to, condition }) =>
    !!condition && to ? <Link href={to}>{children}</Link> : <>{children}</>;

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-primary-dark py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 ">
          <div>
            <Image
              className="mx-auto h-12 w-auto"
              src="/logo2.png"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
              Gunakan Akun IPB
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-white focus:border-white focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <Link href="/">
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-coco hover:bg-primary-darkcoco hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coco-normal"
                >
                  Sign in
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>{" "}
    </>
  );
}
