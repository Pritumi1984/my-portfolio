import { Badge, Button, Image, Card, Text, Group, Indicator } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import FullProjectModal from "./FullProjectModal";

const ProjectCard=(props:any)=>{
    const [opened, { open, close }] = useDisclosure(false);
    return(
        <div data-aos="fade-up" data-aos-duration="800">
        <Card onClick={open} className="w-[310px] mb-5 cursor-pointer transition-transform duration-300 ease-in-out
         !bg-bgColor hover:!scale-[1.02] hover:!shadow-[0_0px_10px_1px_#64FFDA] !border-primaryColor 
         border-2" shadow="lg" padding="sm" radius="lg" withBorder>
      <Card.Section className="p-3">
        <Image className="!rounded-xl !shadow-[0_0px_5px_0px_#64FFDA]" 
            src={props.image}  
            alt={props.image}
        />
      </Card.Section>

      <Group justify="space-between" mt="xs" mb="xs">
        <Text className="!text-2xl !font-bold !text-white gap-2 flex items-center">{props.title}
        </Text>
      </Group>

      <Group mb="xs">
        {props.technologies.map((tech:string, index:number)=> index<3 &&
            <Badge key={index} variant="light" color="#64FFDA" size="md">{tech}</Badge>
        )}
      </Group>

      <Text className="!text-justify" lineClamp={5} size="sm" c="dimmed">
        {props.desc}
      </Text>

      <Button onClick={open} className="!bg-primaryColor !text-bgColor" fullWidth mt="md" radius="md">
        Show More
      </Button>
    </Card>
    <FullProjectModal opened={opened} close={close} title={props.title}
            desc={props.desc} image={props.image} link={props.link}
            github={props.github} technologies={props.technologies}/>
    </div>
    )
}

export default ProjectCard;