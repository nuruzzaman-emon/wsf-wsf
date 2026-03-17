"use client";
import Image from "next/image";
import React from "react";
import {
  FaPlusSquare,
  FaRegUser,
  FaSignInAlt,
  FaSignOutAlt,
  FaUserPlus,
} from "react-icons/fa";
import { SiNginxproxymanager } from "react-icons/si";
import { FaUsersGear } from "react-icons/fa6";
import Navlink from "./Navlink";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  const role = session?.role;

  const links = (
    <>
      <li>
        <Navlink className="mx-2" href="/">
          Home
        </Navlink>
      </li>
      <li>
        <Navlink className="mx-2" href="/about">
          About
        </Navlink>
      </li>
      <li>
        <Navlink className="mx-2" href="/campaigns">
          Campaigns
        </Navlink>
      </li>
      <li>
        <Navlink className="mx-2" href="/impact">
          Impact
        </Navlink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link
          href={"/"}
          className=" p-2 border-2 border-green-300 rounded-full"
        >
          <Image
            src={"/wsf.png"}
            alt="Logo"
            width={80}
            height={50}
            className="rounded-full w-8 h-8 md:w-16 md:h-16 object-center object-cover"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end space-x-2">
        {session ? (
          <div className="dropdown relative">
            <div tabIndex={0} className=" p-1 bg-primary rounded-full m-1">
              <Image
                src={session?.user.image || "/user.png"}
                alt="User"
                width={40}
                height={30}
                className="rounded-full"
              />
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-30 w-52 p-2 space-y-3 absolute right-0 lg:right-25 lg:top-16 mt-2"
            >
              <li>
                <Link
                  href={"/myProfile"}
                  className="btn btn-xs md:btn-md btn-primary"
                >
                  <FaRegUser />
                  My Profile
                </Link>
              </li>
              {role === "user" ||
                (role === "organizer" && (
                  <li>
                    <Link
                      href={"/addCampaign"}
                      className="btn btn-xs md:btn-md btn-primary"
                    >
                      <FaPlusSquare />
                      Add Campaigns
                    </Link>
                  </li>
                ))}
              {(role === "organizer" || role === "admin") && (
                <li>
                  <Link
                    href={"/manageCampaigns"}
                    className="btn btn-xs md:btn-md btn-primary"
                  >
                    <SiNginxproxymanager />
                    Manage Campaigns
                  </Link>
                </li>
              )}
              {role === "admin" && (
                <li>
                  <Link
                    href={"/manage-member"}
                    className="btn btn-xs md:btn-md btn-primary"
                  >
                    <FaUsersGear />
                    Manage Members
                  </Link>
                </li>
              )}
              <li>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="btn btn-xs md:btn-md btn-primary"
                >
                  <FaSignOutAlt />
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <li>
              <Link
                href={"/login"}
                className="btn btn-xs md:btn-md btn-primary"
              >
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link
                href={"/register"}
                className="btn btn-xs md:btn-md btn-primary"
              >
                <FaUserPlus /> Register
              </Link>
            </li>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
