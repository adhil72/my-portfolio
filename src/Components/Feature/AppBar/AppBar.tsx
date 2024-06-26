import Box from "@/Components/Common/Box";
import Flex from "@/Components/Common/Flex";

export default function AppBar(){
    return <Box className={"bg-secondary fixed w-full backdrop-blur-[10px] bg-opacity-65"}>
        <center className={"p-5"}>
            <Flex className={"w-[80%] md:w-[30%] justify-evenly"}>
                <a href={"/"} className={"text-primary text-lg"}>Home</a>
                <a href={"/about"} className={"text-primary text-lg"}>About</a>
                <a href={"/projects"} className={"text-primary text-lg"}>Projects</a>
                <a href={"/contact"} className={"text-primary text-lg"}>Contact</a>
            </Flex>
        </center>
    </Box>
}