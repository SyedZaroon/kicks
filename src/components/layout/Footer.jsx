import React from "react";
import InputField from "../ui/InputField";
import Button from "../ui/Button";
import Image from "next/image";
import logoWhite from "../../assets/images/logoWhite.png";
import footerLogo from "../../assets/images/footerLogo.png";
import Link from "next/link";
import Icon from "../ui/Icon";
import Tiktok from "../../assets/icons/social/Tiktok";
import Instagram from "../../assets/icons/social/Instagram";
import Facebook from "../../assets/icons/social/Facebook";
import Twitter from "@/assets/icons/social/Twitter";
import { companyLinks } from "../../data/menu/companyLinks";

const Footer = () => {
  return (
    <footer className="section-margin bg-[var(--color-blue)] rounded-[48px] text-[var(--color-white)]">
      <div className="px-4 pt-4 pb-[40px] xl:pt-16 xl:px-18 lg:flex lg:items-center lg:justify-between lg:gap-[103px] xl:gap-[203px]">
        <div className="lg:w-[510px]">
          <h1 className="h1">
            Join our KicksPlus <br /> Club & get 15% off
          </h1>
          <p className="text-[var(--color-light-gray)] p pt-2">
            Sign up for free! Join the community.
          </p>

          <form className="flex gap-1 pt-6 flex-wrap">
            <InputField
              placeholder="Email address"
              borderColor="border-[var(--color-white)]"
              placeholderColor="placeholder:text-[color:var(--color-white)]"
              textColor="text-[color:var(--color-white)]"
              fieldContainerClassName="w-[57%] 2xl:w-[70%] "
            />
            <Button
              className="uppercase w-[40%] 2xl:w-[29%] justify-center"
            >
              Submit
            </Button>
          </form>
        </div>
        <Link href="/">
          <Image
            src={logoWhite}
            alt=""
            width={200}
            height={61}
            className="pt-8"
          />
        </Link>
      </div>

      <div className="px-4 pt-6  bg-[var(--color-neutrals-gray-10)] rounded-3xl lg:px-8 lg:pt-16">
        <div className="flex gap-6 flex-col xl:flex-row xl:justify-between">
          <div className="lg:w-[446px]">
            <h6 className="text-[var(--color-yellow)] h5">About us</h6>
            <p className="font-open-sans text-[var(--color-light-gray)] p">
              We are the biggest hyperstore in the universe. We got you all
              cover with our exclusive collections and latest drops.
            </p>
          </div>

          <div>
            <h6 className="text-[var(--color-yellow)] h5">Categories</h6>
            <ul className="font-open-sans text-[var(--color-light-gray)] p flex flex-col gap-2 mt-4">
              <li>
                <Link href="/">Runners</Link>
              </li>
              <li>
                <Link href="/">Sneakers</Link>
              </li>
              <li>
                <Link href="/">Basketball</Link>
              </li>
              <li>
                <Link href="/">Outdoor</Link>
              </li>
              <li>
                <Link href="/">Golf</Link>
              </li>
              <li>
                <Link href="/">Hiking</Link>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-[var(--color-yellow)] h5">Useful links</h6>
            <ul className="font-open-sans text-[var(--color-light-gray)] p flex flex-col gap-2 mt-4">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="text-[var(--color-yellow)] h5">Follow us</h6>
            <div className="font-open-sans text-[var(--color-light-gray)] p flex gap-2 mt-4">
              <span>
                <Icon icon={Facebook} type="text" size={24} />
              </span>
              <span>
                <Icon icon={Instagram} type="text" size={24} />
              </span>
              <span>
                <Icon icon={Twitter} type="text" size={24} />
              </span>

              <span>
                <Icon icon={Tiktok} type="text" size={24} />
              </span>
            </div>
          </div>
        </div>
        <div className="mt-8 lg:mt-16">
          <Image src={footerLogo} alt="" className="m-auto" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
