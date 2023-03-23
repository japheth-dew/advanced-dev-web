import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/assets/logo.svg";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

const navData = [
  {
    url: "/",
    name: "Home",
  },
  {
    url: "/about",
    name: "About",
  },
  {
    url: "/membership",
    name: "Membership",
  },
  {
    url: "/certification",
    name: "Certification",
  },
  {
    url: "/events",
    name: "Events",
  },
  {
    url: "/photos",
    name: "Photos",
  },
  {
    url: "/Insight",
    name: "Insight",
  },
  {
    url: "/contact",
    name: "Contact",
  },
];

const NavButton = ({
  name,
  url,
  setShowMenu,
  showMenu,
}: {
  name: string;
  url: string;
  setShowMenu: any;
  showMenu: any;
}) => {
  return (
    <Link onClick={() => setShowMenu(!showMenu)} href={url}>
      <p className=" text-pri font-semibold hover:text-pri text-white">
        {name}
      </p>
    </Link>
  );
};

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className=" md:px-[2em] px-0 gap-[1rem] flex md:justify-start justify-between items-center ">
        <Image alt="logo" src={logo} height={50} width={50} />

        <div className={`flex items-center gap-x-10 `}>
          {navData.map((item, index) => (
            <NavButton
              key={index}
              name={item.name}
              url={item.url}
              setShowMenu={setShowMenu}
              showMenu={showMenu}
            />
          ))}
        </div>

        <button
          onClick={() => setShowMenu(!showMenu)}
          className="md:hidden inline text-[34px] "
        >
          <FiMenu />
        </button>
      </div>
    </>
  );
};

export default Header;
