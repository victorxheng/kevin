'use client'

import { Button } from "@/components/ui/button";
import {
  Authenticated,
  Unauthenticated,
  AuthLoading,
  useMutation,
  useQuery,
} from "convex/react";
import { api } from "@/convex/_generated/api";
import { Code } from "@/components/typography/code";
import { Link } from "@/components/typography/link";
import { SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";
import { StickyHeader } from "@/components/layout/sticky-header";
import { Skeleton } from "@/components/ui/skeleton";
import useStoreUserEffect from "@/lib/useStoreUserEffect";

export default function Header() {
  const userId = useStoreUserEffect();

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              width={32}
              height={32}
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" 
              alt=""
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {!userId && (
            <>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Product</a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Features</a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">About</a>
            </>
          )}
          {userId && (
            <>
              <a href="/matchRequests" className="text-sm font-semibold leading-6 text-gray-900">Match Requests</a>
              <a href="/match" className="text-sm font-semibold leading-6 text-gray-900">Match</a>
              <a href="/editProfile" className="text-sm font-semibold leading-6 text-gray-900">Edit Profile</a>
            </>
          )}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {!userId && (
            <>
              <SignInButton >
                <span className="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></span>
              </SignInButton>
            </>
          )}
          {userId && (
            <UserButton />
          )}
        </div>
      </nav>

      <div className="lg:hidden" role="dialog" aria-modal="true">
        <div className="fixed inset-0 z-50"></div>
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                width={32}
                height={32}
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
              <span className="sr-only">Close menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {!userId && (
                  <>
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Product</a>
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Features</a>
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">About</a>
                  </>
                )}
                {userId && (
                  <>
                    <a href="/matchRequests" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Match Requests</a>
                    <a href="/match" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Match</a>
                    <a href="/editProfile" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Edit Profile</a>
                  </>
                )}
              </div>
              <div className="py-6">
                {!userId && (
                  <>
                    <SignInButton>
                      <span className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</span>
                    </SignInButton>
                  </>  
                )}
                {userId && (
                  <UserButton />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
