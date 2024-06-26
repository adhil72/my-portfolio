import Container from "@/Components/Common/Container";
import Flex from "@/Components/Common/Flex";
import Box from "@/Components/Common/Box";
import Button from "@/Components/Common/Button";
import {BiLogoJavascript, BiLogoMongodb, BiLogoNodejs, BiLogoReact, BiLogoTypescript} from "react-icons/bi";
import {SiExpress} from "react-icons/si";
import {FiArrowUpRight} from "react-icons/fi";
import {GrGoogle} from "react-icons/gr";
import experiences from "@/Constants/Experiences";
import {GiShoulderBag} from "react-icons/gi";
import {MdHomeWork} from "react-icons/md";
import works from "@/Constants/Works";
import Image from "next/image";
import stacks from "@/Constants/Stacks";

export default function Home() {
    return <Container>
        <Flex className={"w-full pt-40 pb-20 flex-col items-center"}>
            <Box className={"w-52 h-52 bg-secondary rounded-full"}>
                {/*PROFILE PHOTO*/}
            </Box>
            <span className={"text-5xl font-extrabold text-center mt-3"}>
                I do code and <br/>make content <span
                className={"bg-gradient-to-r from-tint to-tint-alt"}>about it!</span>
            </span>
            <p className={"w-max-120 text-center"}>
                I am a full stack developer. I have experience in building web applications using React, Node.js,
                Express, and MongoDB. I am also familiar with Typescript, NextJs, and Tailwind CSS. I am currently
                pursuing my bachelor&apos;s degree in computer science and engineering from <span
                onClick={() => window.open("https://www.gecwyd.ac.in")}
                className={"bg-gradient-to-r from-tint to-tint-alt cursor-pointer"}>Government engineering collage Wayanad.</span> I
                have collaborated with many developers and worked on many projects
            </p>
            <Flex className={"mt-5"}>
                <Button onClick={() => window.location.href = "#contact"}>Get in touch</Button>
                <Button onClick={() => window.open("/files/resume.pdf")} variant={'outlined'} className={"ml-3"}>My
                    Resume</Button>
            </Flex>

            {/*STACKS SECTION*/}
            <span className={"text-primary text-3xl font-bold mt-20 uppercase text-center"}>experience with</span>
            <Box className={"w-full text-3xl pt-3 text-tint grid text-center grid-cols-4 md:grid-cols-7"}>
                {
                    stacks.map((Item, index) => <Box
                        key={index}
                        className={"mt-3 group rounded-full w-fit h-fit border border-2 border-tint p-5 ml-5"}>
                        <Item/>
                    </Box>)
                }
            </Box>

            {/*PROJECTS SECTION*/}

            <span className={"text-primary text-3xl font-bold mt-20 uppercase text-center"}>projects</span>
            <Box className={"w-full grid grid-cols-1 md:grid-cols-2 mt-5 gap-5"}>
                {
                    works.map((item, index) => <Box key={index}
                                                    className={"w-full bg-secondary hover:bg-secondary-light cursor-pointer rounded-2xl overflow-hidden"}>
                        <Box className="w-full h-60">
                            <Image className={"object-cover rounded-b-2xl !static"} layout={"fill"} src={item.image}
                                   alt={"Project 1"}/>
                        </Box>
                        <Flex className={"p-5 items-center justify-between"}>
                            <Box className={"flex flex-col"}>
                                <span className={"uppercase text-xs font-bold"}>Click here to visit</span>
                                <span className={"text-2xl font-bold uppercase"}>{item.title}</span>
                            </Box>
                            <Box className={"font-bold text-xl"}>
                                <FiArrowUpRight/>
                            </Box>
                        </Flex>
                    </Box>)
                }
            </Box>
            <span className={"w-full text-xl font-bold mt-2 text-right"}><a
                className={"hover:text-tint-alt text-primary"} href={"/projects"}>{"view full details ->"}</a></span>

            {/*EXPERIENCE SECTION*/}
            <span className={"text-primary mb-5 text-3xl font-bold mt-20 uppercase text-center"}>experience</span>
            {
                experiences.map((i, d) => <Box key={d} className={"w-full mt-5"}>
                    <Flex className={"w-full flex-col lg:flex-row lg:justify-between"}>
                        <Flex className={"flex-col lg:flex-row lg:items-center"}>
                            <MdHomeWork className={"text-2xl"}/>
                            <span className={"font-bold text-2xl mt-2 lg:mt-0 lg:ml-3"}>{i.company}</span>
                        </Flex>
                        <Box>
                            <span className={"text-secondary text-lg"}>{i.endDate}</span>
                        </Box>
                    </Flex>
                    <p className={"text-justify text-secondary my-3"}>
                        {i.description}
                    </p>
                </Box>)
            }
            <span className={"w-full text-xl font-bold mt-2 text-right"}><a
                className={"hover:text-tint-alt text-primary"} href={"/projects"}>{"view all experiences ->"}</a></span>

            {/*EDUCATION SECTION*/}
            <span className={"text-primary mb-5 text-3xl font-bold mt-20 uppercase text-center"}>education</span>
            <Box className={"w-full mt-5"}>
                <Flex className={"w-full flex-col lg:flex-row lg:justify-between"}>
                    <Flex className={"flex-col lg:flex-row lg:items-center"}>
                        <MdHomeWork className={"text-2xl"}/>
                        <span className={"font-bold text-2xl mt-2 lg:mt-0 lg:ml-3"}>Government engineering collage Wayanad</span>
                    </Flex>
                    <Box>
                        <span className={"text-secondary text-lg"}>Present</span>
                    </Box>
                </Flex>
                <span className={"text-tint text-xl"}>Computer science and engineering</span>
                <p className={"text-justify text-secondary my-3"}>
                    I am currently pursuing my bachelor&apos;s degree in computer science and engineering from
                    Government engineering collage Wayanad. The course deals with DSA, COA, DBMS, OS, and many more.
                    B.tech in computer science and engineering at GECW is accredited by AICTE.
                </p>
            </Box>
        </Flex>
    </Container>
}