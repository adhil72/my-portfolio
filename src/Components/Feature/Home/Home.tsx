import Container from "@/Components/Common/Container";
import Flex from "@/Components/Common/Flex";
import Box from "@/Components/Common/Box";
import Button from "@/Components/Common/Button";
import {BiLogoJavascript, BiLogoMongodb, BiLogoNodejs, BiLogoReact, BiLogoTypescript} from "react-icons/bi";
import {SiExpress} from "react-icons/si";
import {FiArrowUpRight} from "react-icons/fi";
import {GrGoogle} from "react-icons/gr";

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
                I am a seasoned full-stack software engineer with over
                8 years of professional experience, specializing in backend development.
                My expertise lies in crafting robust and scalable SaaS-based
                architectures on the Amazon AWS platform.
            </p>
            <Flex className={"mt-5"}>
                <Button>Get in touch</Button>
                <Button variant={'outlined'} className={"ml-3"}>My Resume</Button>
            </Flex>

            {/*EXPERIENCE SECTION*/}
            <span className={"text-primary text-xl font-bold mt-20 uppercase text-center"}>experience with</span>
            <Box className={"w-fit text-3xl pt-3 text-tint grid grid-cols-4 md:grid-cols-7"}>
                {
                    [1,2,3,4,5,6,7].map((item, index) => <Box className={"mt-3 lg:mt-0 rounded-full w-fit h-fit border border-2 border-tint p-5 ml-5"}>
                        <BiLogoNodejs/>
                    </Box>)
                }
            </Box>

            {/*PROJECTS SECTION*/}

            <span className={"text-primary text-3xl font-bold mt-20 uppercase text-center"}>projects</span>
            <Box className={"w-full grid grid-cols-1 md:grid-cols-2 mt-5 gap-5"}>
                {
                    [1, 2].map((item, index) => <Box className={"w-full bg-secondary hover:bg-secondary-light cursor-pointer rounded-2xl overflow-hidden"}>
                        <img className={"w-full h-60 object-cover rounded-b-2xl"}
                             src={"https://via.placeholder.com/500"} alt={"Project 1"}/>
                        <Flex className={"p-5 items-center justify-between"}>
                            <Box className={"flex flex-col"}>
                                <span className={"uppercase text-xs font-bold"}>Click here to visit</span>
                                <span className={"text-2xl font-bold uppercase"}>Notify</span>
                            </Box>
                            <Box className={"font-bold text-xl"}>
                                <FiArrowUpRight/>
                            </Box>
                        </Flex>
                    </Box>)
                }
            </Box>
            <span className={"w-full text-xl font-bold mt-2 text-right"}><a
                className={"hover:text-tint-alt text-primary"} href={"/projects"}>{"view more projects ->"}</a></span>

            {/*EXPERIENCE SECTION*/}
            <span className={"text-primary mb-5 text-3xl font-bold mt-20 uppercase text-center"}>experience</span>
            {
                [1, 2, 3].map((i, d) => <Box className={"w-full mt-5"}>
                    <Flex className={"w-full flex-col lg:flex-row lg:justify-between"}>
                        <Flex className={"flex-col lg:flex-row lg:items-center"}>
                            <GrGoogle className={"text-2xl"}/>
                            <span className={"font-bold text-2xl mt-2 lg:mt-0 lg:ml-3"}>Lead Software Engineer at Google</span>
                        </Flex>
                        <Box>
                            <span className={"text-secondary text-lg"}>Nov 2019 - Present</span>
                        </Box>
                    </Flex>
                    <p className={"text-justify text-secondary my-3"}>
                        As a Senior Software Engineer at Google, I played a pivotal role in developing innovative
                        solutions for Google&apos;s core search algorithms. Collaborating with a dynamic team of engineers, I
                        contributed to the enhancement of search accuracy and efficiency, optimizing user experiences
                        for millions of users worldwide.
                    </p>
                </Box>)
            }
            <span className={"w-full text-xl font-bold mt-2 text-right"}><a className={"hover:text-tint-alt text-primary"} href={"/projects"}>{"view all experiences ->"}</a></span>
        </Flex>
    </Container>
}