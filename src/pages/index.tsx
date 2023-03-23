import Image from "next/image";
import { Inter } from "next/font/google";
import HeadComponent from "@/components/head";
import Header from "@/components/Header";
import classes from "@/styles/customStyles.module.css";
import phones from "../../public/assets/phones.svg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HeadComponent pageName="HOME" />
      <main className="overflow-hidden">
        <div className="relative ">
          <div className="sticky z-10 w-full flex pr-10  items-center justify-between mt-4">
            <Header />
            <button className="border-4  py-2 px-8 text-white font-semibold hover:bg-red-200 animate-all duration-300 rounded-full">
              Contact
            </button>
          </div>
          <div className={`${classes.rounded} flex items-end p-[12em]  `}>
            <Image src={phones} height={700} width={700} alt="phones" />
          </div>
        </div>
      </main>
    </>
  );
}

// transform - translate - x - 1 / 2 - translate - y - 1 / 2;
// className={`${classes.rounded} w-3/5 rounded-full  h-[75em]  top-[50%] transform translate-x-1/2 -translate-y-1/2 -left-[50%]  `}
