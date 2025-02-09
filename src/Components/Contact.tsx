import { useState } from "react";
import FloatingInput from "./FloatingInput";
import { Button } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";


const Contact =() => {

  const form = {
    name: "",
    email: "",
    phone: "",
    message: ""
  }  

  const [formData, setFormData] = useState<{ [key: string]: string }>(form);
  const [formError, setFormError] = useState<{ [key: string]: string }>(form);

  return (
    <div className="px-16 ml-16 md-mx:px-6 !my-10 font-mono" id="Contact">
       <h1 className="text-4xl sm-mx:text-3xl mt-20 xs-mx:text-2xl mb-10 font-bold text-center text-white"><span className="text-primaryColor">05.&nbsp;</span>Contact</h1>
       <div data-aos="flip-left" data-aos-duration="800" className=" w-[70%] shadow-[0_0_10px_0_#64FFDA50] m-auto flex flex-col gap-6 border border-primaryColor rounded-3xl p-8 ">
          <div className="text-2xl text-white font-semibold">Let's Connect</div>
          <FloatingInput id="name" name="Name" value={formData.name}></FloatingInput>
          <FloatingInput id="email" name="Email" value={formData.email}></FloatingInput>
          <FloatingInput id="phone" name="Phone Number" value={formData.phone}></FloatingInput>
          <FloatingInput id="message" name="Message" value={formData.message}></FloatingInput>
          <Button fullWidth rightSection={<IconArrowRight size={20} />}
                className="!text-bgColor !font-bold " variant="filled" radius="lg" color="#64FFDA">Send</Button>
        
       </div>
    
    </div>
  );
}

export default Contact;