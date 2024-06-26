import Container from "@/Components/Common/Container";
import Flex from "@/Components/Common/Flex";
import Box from "@/Components/Common/Box";
import Image from "next/image";
import works from "@/Constants/Works";
import {AiFillGithub} from "react-icons/ai";
import {BsLink} from "react-icons/bs";
import Button from "@/Components/Common/Button";

export default function Projects() {
    return <Container>
        <Flex className={"w-full pt-20 pb-20 flex-col items-center"}>
            <span className={"text-3xl uppercase font-extrabold"}>Projects</span>
            {works.map((item, index) => <Box key={index} className="w-full bg-secondary p-5 rounded-2xl mt-10">
                <Flex className={"mb-5"}>
                    <Box className={"w-1/4 h-60 rounded-2xl"}>
                        <Image src={item.image} alt={"project"} layout={"fill"}
                               className={"!static object-cover rounded-2xl"}/>
                    </Box>
                    <Box className={"w-3/4"}>
                        <Box className={"flex flex-col pl-5"}>
                            <span className={"text-3xl font-extrabold text-primary uppercase"}>{item.title}</span>
                            <span className={"text-secondary text-justify"}>{item.description}</span>
                        </Box>
                    </Box>
                </Flex>
                <Box className={"flex justify-evenly p-5 bg-primary mt-2 rounded-xl"}>
                    <Flex className={"items-center"}>
                        <BsLink className={"text-2xl"}/>
                        <span className={"text-lg ml-5"}>Live Url</span>
                    </Flex>
                    <Box className={"h-7 w-[1px] bg-gray-100"}></Box>
                    <Box>
                        <Button onClick={e => window.open(item.url)}>view</Button>
                    </Box>
                </Box>
                {item.github.map((i, index) => {
                    return <Box key={index} className={"flex justify-evenly p-5 bg-primary mt-2 rounded-xl"}>
                        <Flex className={"items-center"}>
                            <AiFillGithub className={"text-2xl"}/>
                            <span className={"text-lg ml-5"}>{i.name}</span>
                        </Flex>
                        <Box className={"h-7 w-[1px] bg-gray-100"}></Box>
                        <Box>
                            <Button onClick={e => window.open(i.url)}>view</Button>
                        </Box>
                    </Box>
                })}
                {item.github.length === 0 && <center className={"mt-5"}>
                    <span className={"text-center"}>Cannot provide <span className={"bg-gradient-to-r from-tint to-tint-alt"}>github links</span> as it is a private project</span>
                </center>}
            </Box>)}
        </Flex>
    </Container>
}