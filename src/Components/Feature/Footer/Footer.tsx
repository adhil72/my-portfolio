import Box from "@/Components/Common/Box";
import Container from "@/Components/Common/Container";
import {BiLogoMailchimp} from "react-icons/bi";
import Flex from "@/Components/Common/Flex";
import {AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineMail} from "react-icons/ai";

export default function Footer() {
    return <Box className={"w-full bg-secondary"}>
        <Container className={"py-10"}>
            <span className={"text-3xl font-bold text-primary"}>Contact</span>
            <p className="py-5 text-secondary text-lg">
                Seasoned Full Stack Software Engineer with over 8 years of hands-on experience in designing
                and implementing robust, scalable, and innovative web solutions. Adept at leveraging a
                comprehensive skill set encompassing front-end and back-end technologies
            </p>
            <Flex className="text-lg text-primary items-center">
                <AiOutlineMail/>  <span className={"ml-3"}>abmcodehub@gmail.com</span>
            </Flex>
            <Flex className={"text-primary text-3xl mt-5"}>
                <AiFillInstagram className={"hover:text-tint cursor-pointer"}/>
                <AiFillLinkedin className={"ml-5 hover:text-tint cursor-pointer"}/>
                <AiFillGithub className={"ml-5 hover:text-tint cursor-pointer"}/>
            </Flex>
        </Container>
    </Box>
}