import { Info } from "../User";
import Typewriter from "typewriter-effect";
import { Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ResumeViewer from "./ResumeViewer";
import { IconDownload } from "@tabler/icons-react";
import Particles from "./magicui/Particles";
import { NeonGradientCard } from "./magicui/neon-gradient-card";

const About=()=>{

  const [opened, { open, close }] = useDisclosure(false);

    return( 
      <>
        <div data-aos="fade-up" data-aos-duration="800" 
        className="flex relative overflow-hidden justify-around items-center font-mono px-16 h-[85vh] 
        lg-mx:justify-between !bs-mx:flex-wrap !bs-mx:flex-col-reverse" id="bg">
        <Particles
        className="absolute inset-0 -z-20"
        quantity={1000}
        ease={80}
        vx={0.1}
        vy={0.1}
        color="#64FFDA"
        refresh
      />
            <div className="ml-20 w-3/5 flex flex-col">
                <div className="text-primaryColor text-3xl">Hi, I'm</div>
                <div className="text-white text-[60px] font-extrabold">{Info.name}</div>
                <div className="text-white text-4xl flex font-semibold">I'm a&nbsp; <span className="text-primaryColor"><Typewriter options={{strings: Info.stack, autoStart: true, loop: true,}}/></span></div>
                <div className="text-textColor text-xl text-justify w-[90%] font-semibold my-8">{Info.bio}</div>
                <div className="flex gap-3">
                  <Button onClick={open} className="!text-bgColor !w-fit" size="lg" variant="filled" color="#64FFDA">Check resume</Button>
                  <Button component="a" href="Pritumi_Resume.pdf" download={Info.name} className="!text-primaryColor !w-fit" size="lg" variant="outline" color="#64FFDA" rightSection={<IconDownload size={20} />}>Download</Button>
                </div>
            </div>

            <div className="h-fit flex justify-center items-center rounded-full w-fit bs:mr-14" id="photo">
              <NeonGradientCard className="w-[280px] h-[280px] lg-mx:w-64 lg-mx:h-64 items-center justify-center text-center">
                <img className="w-full h-full rounded-full" src="my_pic.JPG" alt="profile pic"/>
              </NeonGradientCard>
            </div>
        </div>
        <ResumeViewer opened={opened} close={close}/>
      </>
    )

}

export default About;