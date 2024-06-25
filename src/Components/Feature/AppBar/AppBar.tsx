import Box from "@/Components/Common/Box";
import Flex from "@/Components/Common/Flex";

export default function AppBar(){
    return <Box className={"bg-secondary fixed w-full"}>
        <center className={"p-5"}>
            <Flex className={"w-[30%] justify-evenly"}>
                <Box className={"text-primary text-lg"}>Home</Box>
                <Box className={"text-primary text-lg"}>About</Box>
                <Box className={"text-primary text-lg"}>Projects</Box>
                <Box className={"text-primary text-lg"}>Contact</Box>
            </Flex>
        </center>
    </Box>
}