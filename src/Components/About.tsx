import { useEffect, useState } from "react";
import { Info } from "../User";
//@ts-ignore
import DOTS from "vanta/src/vanta.dots";
//@ts-ignore
import TRUNK from "vanta/src/vanta.trunk";
import Typewriter from "typewriter-effect";
import { Button } from "@mantine/core";

const About=()=>{
    const [dots, setDots] = useState<any>(null);
    const [trunk, setTrunk] = useState<any>(null);
  useEffect(() => {
    if (!dots) {
      setDots(DOTS({
        el: "#bg",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x64FFDA,
            color2: 0x204aff,
            backgroundColor: 0x0A192F,
            size: 2.8,
            spacing: 20,
            showLines: false
      }))
    }
    if(!trunk){
      setTrunk(TRUNK({
        el: "#photo",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x64FFDA,
        backgroundColor: 0x0A192F,
        spacing: 0.00,
        chaos: 4.00,
      })
      )
    }
    return () => {
      if (dots) dots.destroy();
      if (trunk) trunk.destroy();
    }
  }, [dots])

    return(
        <div className="flex overflow-hidden justify-around items-center font-mono px-16 h-[80vh]" id="bg">
            <div className="ml-20 w-3/5 flex flex-col">
                <div className="text-primaryColor text-3xl">Hi, I'm</div>
                <div className="text-white text-[60px] font-extrabold">{Info.name}</div>
                <div className="text-white text-4xl flex font-semibold">I'm a&nbsp; <span className="text-primaryColor"><Typewriter options={{strings: Info.stack, autoStart: true, loop: true,}}/></span></div>
                <div className="text-textColor text-xl text-justify w-[90%] font-semibold my-8">{Info.bio}</div>
                <Button component="a" href="https://drive.google.com/file/d/1dEETeTgDwUTR5hYNshYdW0b4ZdI10KVW/view?usp=sharing" target="_blank" className="!text-bgColor !w-fit" size="lg" variant="filled" color="#64FFDA">Check resume</Button>
            </div>

            <div className="h-[50vh] flex justify-center items-center overflow-hidden rounded-full w-[25vw] mr-14" id="photo">
              <img className="w-[83%] rounded-full" src="/profile_pic.jpeg" alt="profile pic"/>
            </div>
        </div>
    )

}

export default About;