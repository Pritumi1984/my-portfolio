import { IconBrandGithub, IconBrandGmail, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin } from "@tabler/icons-react";
import { socialLinks } from "../User";

const Social=()=>{

    const socialIcons=socialLinks.map((socialLink, index)=>{
        return <a key={index} href={`${socialLink.link}`} target="_blank" className="font-mono text-lg hover:text-primaryColor
        hover:-translate-x-2 transition transform duration-300 ease-in-out">
            <div data-aos="fade-up-left" data-aos-duration="800">
              <socialLink.icon className="-rotate-90" size={30} />
            </div>
        </a>
    })

    return(
        <div className="flex text-textColor items-center gap-10 fixed bottom-32 -left-[180px] rotate-90">
            {socialIcons}
            <hr className="border-[2px] w-40 rounded-full text-textColor bg-textColor border-textColor"/>
        </div>
    );
}

export default Social;