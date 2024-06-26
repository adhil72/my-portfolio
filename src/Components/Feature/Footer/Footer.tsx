import Box from "@/Components/Common/Box";
import Container from "@/Components/Common/Container";
import {BiLogoMailchimp} from "react-icons/bi";
import Flex from "@/Components/Common/Flex";
import {AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineMail} from "react-icons/ai";
import {PiTelegramLogo} from "react-icons/pi";
import {TbBrandTelegram} from "react-icons/tb";

export default function Footer() {
    return <Box className={"w-full bg-secondary"}>
        <Container className={"py-10"}>
            <span id={"contact"} className={"text-3xl font-bold text-primary"}>Contact</span>
            <p className="py-5 text-secondary text-lg">
                I am a full stack developer. I have experience in building web applications using React, Node.js, Express, and MongoDB. I am also familiar with Typescript, NextJs, and Tailwind CSS. I am currently pursuing my bachelor&apos;s degree in computer science and engineering from Government engineering collage Wayanad. I have collaborated with many developers and worked on many projects
            </p>
            <Flex className="text-lg text-primary items-center">
                <AiOutlineMail/>  <span className={"ml-3"}>adhil.mhdk28@gmail.com</span>
            </Flex>
            <Flex className={"text-primary text-3xl mt-5"}>
                <AiFillInstagram onClick={()=>window.open("https://www.instagram.com/adhilmhd28")} className={"hover:text-tint cursor-pointer"}/>
                <AiFillLinkedin onClick={()=>window.opener("https://www.linkedin.com/in/adhil-muhammed-k-200b13292")} className={"ml-5 hover:text-tint cursor-pointer"}/>
                <AiFillGithub onClick={()=>window.open("https://github.com/adhil72")} className={"ml-5 hover:text-tint cursor-pointer"}/>
                <TbBrandTelegram onClick={()=>window.open("https://t.me/adhil28")} className={"ml-5 hover:text-tint cursor-pointer"}/>
            </Flex>
        </Container>
    </Box>
}