import { Timeline, } from "@mantine/core";
import { ExperienceInfo } from "../User";
import { IconBriefcaseFilled, } from "@tabler/icons-react";

const TimelineItem = (items:any) => {
    
    return items.map((item:any, index:number)=> <Timeline.Item data-aos="fade-up" data-aos-duration="1600" key={index} className="!pt-12 !mt-5 !mb-0"
    bullet={<IconBriefcaseFilled className="!text-bgColor" size={20} />}>

        <div className="flex flex-col gap-2 border border-primaryColor shadow-[0_0_10px_0_#64FFDA50] p-4 rounded-2xl">
            <div className="flex gap-4 items-center">
                <img className="rounded-lg w-16" src={`/${item.company}.png`} alt="Company" />
                <div className="flex flex-col">
                    <div className="text-white text-xl font-semibold">{item.role}</div>
                    <div className="text-textColor text-lg">{item.company} &#x2022; {item.date}</div>

                    <div className="text-lg font-medium text-textColor md-mx:text-base sm-mx:text-sm xs-mx:text-xs flex gap-1"><div className=" text-white">Skills:</div>
                        <div className="flex gap-1 flex-wrap">
                            {
                                item.skills.map((skill: any, index: number) => <div key={index}> &#x2022; {skill} </div>)
                            }
                        </div>
                    </div>
                </div>                
            </div>   
        </div>
    
  </Timeline.Item>)

}


const Experience =()=>{

    return(
        <div className="px-16 md-mx:px-6 mt-10 !my-10 font-mono" id="Experience">
            <h1 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl mb-10 font-bold text-center text-white"><span className="text-primaryColor">04.&nbsp;</span>Experience</h1>
        <div className="ml-20 w-[86.5%]">
        <Timeline color="#64FFDA" active={5} bulletSize={30} lineWidth={2}>
            {
                TimelineItem(ExperienceInfo)
            }
            <Timeline.Item
             bullet={<IconBriefcaseFilled className="!text-bgColor" size={20} />}></Timeline.Item>
            </Timeline>
        </div>
        </div>
        
    )
}

export default Experience;