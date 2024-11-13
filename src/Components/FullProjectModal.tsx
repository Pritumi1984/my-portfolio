import { Modal, Button, Image, Badge, Indicator, Group } from "@mantine/core";

const FullProjectModal=(props:any)=>{
    return(
        <>
        <Modal.Root size="70%" className="font-mono" opened={props.opened} onClose={props.close}>
        <Modal.Overlay />
        <Modal.Content className="!rounded-3xl ">
          <Modal.Header className="!bg-bgColor !border-primaryColor !border-2 !border-b-0 !rounded-tl-3xl !rounded-tr-3xl">
            <Modal.Title className="!text-4xl !text-white flex gap-3 items-center !font-bold">{props.title}{props.live===true &&
            <Badge className="flex gap-1 items-center" variant="outline" color="red" rightSection={<Indicator color="red" position="middle-end" size={7} processing></Indicator>}>
                Live 
            </Badge>}</Modal.Title>
            <Modal.CloseButton size="md" iconSize="30px" className="!bg-bgColor !text-red-500"/>
          </Modal.Header>
          <Modal.Body className="!bg-bgColor !border-primaryColor !border-2 !border-t-0 !rounded-bl-3xl !rounded-br-3xl">
          <Image className="!rounded-xl !shadow-[0_0px_5px_0px_#64FFDA]" 
            src={props.image}  
            alt={props.image}
        />
        <Group mt="md" mb="md">
        {props.technologies.map((tech:string, index:number)=>
            <Badge key={index} variant="light" color="#64FFDA" size="lg">{tech}</Badge>
        )}
      </Group>
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
      </>
    )
}

export default FullProjectModal;