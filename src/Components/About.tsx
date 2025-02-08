import { useEffect, useState } from "react";
import { Info } from "../User";
import Typewriter from "typewriter-effect";
import { Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ResumeViewer from "./ResumeViewer";

const About=()=>{

  const [opened, { open, close }] = useDisclosure(false);

    return( 
      <>
        <div className="flex overflow-hidden justify-around items-center font-mono px-16 h-[80vh]" id="bg">
            <div className="ml-20 w-3/5 flex flex-col">
                <div className="text-primaryColor text-3xl">Hi, I'm</div>
                <div className="text-white text-[60px] font-extrabold">{Info.name}</div>
                <div className="text-white text-4xl flex font-semibold">I'm a&nbsp; <span className="text-primaryColor"><Typewriter options={{strings: Info.stack, autoStart: true, loop: true,}}/></span></div>
                <div className="text-textColor text-xl text-justify w-[90%] font-semibold my-8">{Info.bio}</div>
                <Button onClick={open} className="!text-bgColor !w-fit" size="lg" variant="filled" color="#64FFDA">Check resume</Button>
            </div>

            <div className="h-[50vh] flex justify-center items-center overflow-hidden rounded-full w-[25vw] mr-14" id="photo">
              <img className="w-[83%] rounded-full" src="/profile_pic.jpeg" alt="profile pic"/>
            </div>
        </div>
        <ResumeViewer opened={opened} close={close}/>
      </>
    )

}

export default About;