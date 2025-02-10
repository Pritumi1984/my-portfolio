import { Info, socialLinks} from "../User";
import { ScratchToReveal } from "./magicui/Scratch";
import { SparklesText } from "./magicui/sparkles-text";

const Footer=()=>{
    
    const socialIcons=socialLinks.map((socialLink, index)=>{
        return <a   key={index} href={`${socialLink.link}`} target="_blank"  className="font-mono text-lg  hover:text-primaryColor hover:scale-105 transition transform duration-300 ease-in-out">
        <socialLink.icon stroke={1.5}  size={25} />
    </a>
    })
    return(
        <div className="mt-20 mb-10 font-mono flex flex-col gap-2 items-center">
          <div className="flex flex-row items-center gap-4">
            <div className="text-primaryColor ">
              <SparklesText className="text-3xl md-mx:text-2xl font-semibold" text={Info.name}/>
            </div>
            <div className="text-primaryColor">
                <ScratchToReveal
                    width={40}
                    height={40}
                    minScratchPercentage={90}
                    className="flex items-center justify-center overflow-hidden rounded-2xl border-2 bg-gray-100"
                    gradientColors = {["#A97CF8", "#F38CB8", "#FDCC92"]}
                >
                    <p className="text-xl">😎</p>
                </ScratchToReveal></div>
            </div>
            <div className="md-mx:flex hidden text-textColor gap-8 sm-mx:gap-6">{socialIcons}</div>
            <div className="text-textColor text-xl md-mx:text-lg sm-mx:text-base xs-mx:text-sm xs-mx:flex flex-col items-center">Copyright &copy; {new Date().getFullYear()} {Info.name} <span className="xs-mx:hidden">|</span> <span>All Rights Reserved</span></div>
        </div>
    )
}
export default Footer;