"use client"
import { ClerkLoaded, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { PackageIcon, TrolleyIcon } from "@sanity/icons";
import useBasketStore from "../../store/store";

export default function Header() {
  const { user } = useUser();
  const itemCount = useBasketStore((state) =>
    state.items.reduce((total , item ) => total + item.quantity, 0) 

  );



  return (
    <header className="flex flex-wrap items-center justify-between px-4 py-4 bg-transparent backdrop-blur-sm bg-opacity-40 sticky top-0 z-50 shadow-lg">
      {/* Logo */}
      <div className="flex items-center flex-shrink-0">
        <Link className="text-2xl font-extrabold text-black" href="/">
          Quollex
        </Link>
      </div>

      {/* Menu Items - Always in a Row */}
      <nav className="flex flex-wrap items-center justify-between w-full sm:w-auto sm:flex-row sm:space-x-4 mt-4 sm:mt-0">
        {/* Search Form */}
        <form
          action="/search"
          className="flex flex-grow items-center space-x-2 sm:flex-grow-0"
        >
          <input
            type="text"
            name="query"
            placeholder="Search for Products"
            className="flex-grow sm:w-80 bg-gray-200 text-gray-800 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="hidden sm:block px-4 py-2 bg-black text-white rounded-md hover:bg-blue-400"
          >
            Search
          </button>
        </form>

        {/* Basket */}
        <Link
          href="/basket"
          className="flex items-center space-x-2 bg-black hover:bg-blue-400 text-white px-4 py-2 rounded-md"
        >
          <TrolleyIcon className="w-5 h-5" />
          <span className="bg-white text-black w-4 flex items-center justify-center font-bold">{itemCount}</span>
          <span>My Basket</span>
        </Link>

        {/* User Section */}
        <ClerkLoaded>
          {user ? (
            <div className="flex items-center space-x-4">
              <Link
                href="/orders"
                className="flex items-center space-x-2 bg-black hover:bg-blue-400 text-white px-4 py-2 rounded-md"
              >
                <PackageIcon className="w-5 h-5" />
                <span>My Orders</span>
              </Link>
              <div className="flex items-center space-x-2">
                <UserButton />
                <div className="hidden sm:block text-xs">
                  <p className="text-gray-400">Welcome Back</p>
                  <p className="font-bold">{user.fullName}!</p>
                </div>
              </div>
            </div>
          ) : (
            <SignInButton mode="modal" />
          )}
        </ClerkLoaded>
      </nav>
    </header>
  );
}







