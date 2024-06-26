const works: {
    title: string,
    description: string,
    image: string,
    url: string,
    github: { name: string, url: string }[],
    stacks: string[]
}[] = [
    {
        title: "Notify",
        description: "This service allows developers to use their Android phones to send SMS, such as OTPs and promotional messages. Users can create an account on the website and add their Android phones. When the API is called to send an SMS, the service randomly selects an available phone based on traffic and sends the requested SMS.",
        image: "/images/prj1.png",
        url: "https://frdnotify.web.app",
        github: [
            {name: "Frontend", url: "https://github.com/adhil72/notify-frontend"},
            {name: "Backend", url: "https://github.com/adhil72/notify-backend"},
            {name: "Android", url: "https://github.com/adhil72/notify-android"}
        ],
        stacks: ["React", "Node.js", "Express", "MongoDB", "Android", "Typescript", "Kotlin", "Javascript"]
    },
    {
        title: "Learni",
        description: "Leani is an AI teacher which explains us about a given paragraph from a text book or somewhere else as a video. This project is used Gemini API",
        url: "https://learni-client.vercel.app/chat",
        image: "/images/prj2.png",
        github: [
            {name: "Frontend", url: "https://github.com/adhil72/learni-client"},
            {name: "Backend", url: "https://github.com/adhil72/learni-api"}
        ],
        stacks: ["NextJs", "Node.js", "Express", "MongoDB", "Typescript"]
    },
    {
        title: "Beyond portfolio website",
        description: "Beyond is a video editing company. This is a portfolio website for them. This website is built using NextJs, Material UI and Tailwind CSS",
        url: "https://beyondmotions.com/",
        image: "/images/prj3.png",
        github:[],
        stacks: ["NextJs", "Material UI", "Tailwind CSS", "Typescript"]
    },
    {
        title:"My Portfolio",
        description:"This is my portfolio website. This website is built using NextJs and Tailwind CSS",
        image:"/images/prj4.png",
        url:"https://adhil72.vercel.app",
        github:[],
        stacks:["NextJs","Tailwind CSS","Typescript"]
    }
]
export default works;