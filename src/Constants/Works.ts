const works: {
    title: string,
    description: string,
    image: string,
    url: string,
    github: { name: string, url: string, type:"github"|"android"|"figma" }[],
    stacks: string[],
    private?:boolean
}[] = [
    {
        title:"My Portfolio",
        description:"This is my portfolio website. This website is built using NextJs and Tailwind CSS",
        image:"/images/prj4.png",
        url:"https://adhil72.vercel.app",
        github:[
            {
                name:"Frontend",
                url:"https://github.com/adhil72/my-portfolio",
                type:"github"
            },
            {
                name: "Figma design",
                url: "https://www.figma.com/design/40B6sJLYTePAadPSB9WbFC/Developer-Portfolio-Website-Design-(Community)?node-id=0-1",
                type: "figma"
            }
        ],
        stacks:["NextJs","Tailwind CSS","Typescript"]
    },
    {
        title:"Avertisement website",
        url:"https://scizers-intership-assignment.vercel.app",
        image:"/images/prjavd.png",
        github:[
            {name: "Frontend",type: "github", url: "https://github.com/adhil72/scizers-intership-assignment"},
            {name: "Figma design",type: "figma",url: "https://www.figma.com/design/aeN6D75goDcdM45FwG3206/Scizers-Summer24-Internship-Assignment?node-id=2-2&t=xSYe4fyz0qa43zuS-0"}
        ],
        description:"When i applied for an internship, i got this assaignment to submit. they gave me a figma design link and asked to design this in NextJs using talwind",
        stacks:["NextJs","Tailwind CSS","Typescript"],
    },
    {
        title: "Beyond portfolio website",
        description: "Beyond is a video editing company. This is a portfolio website for them. This website is built using NextJs, Material UI and Tailwind CSS",
        url: "https://beyondmotions.com/",
        image: "/images/prj3.png",
        github:[
            {
                name: "Figma",
                url: "https://www.figma.com/design/feJnrg4pafvzh6pJOSQNUt/Web-Design-%7C-Website-Design-%7C-Software-House-Website-%7C-Software-Company-Website-(Community)?node-id=0-1&t=fAr1QkjaHUlrQ8GO-0",
                type: "figma"
            }
        ],
        private:true,
        stacks: ["NextJs", "Material UI", "Tailwind CSS", "Typescript"]
    },
    {
        title: "Notify",
        description: "This service allows developers to use their Android phones to send SMS, such as OTPs and promotional messages. Users can create an account on the website and add their Android phones. When the API is called to send an SMS, the service randomly selects an available phone based on traffic and sends the requested SMS.",
        image: "/images/prj1.png",
        url: "https://frdnotify.web.app",
        github: [
            {name: "Frontend", url: "https://github.com/adhil72/notify-frontend",type:"github"},
            {name: "Backend", url: "https://github.com/adhil72/notify-backend",type: "github"},
            {name: "Android", url: "https://github.com/adhil72/notify-android",type: "android"}
        ],
        stacks: ["React", "Node.js", "Express", "MongoDB", "Android", "Typescript", "Kotlin", "Javascript"]
    },
    {
        title: "Learni",
        description: "Leani is an AI teacher which explains us about a given paragraph from a text book or somewhere else as a video. This project is used Gemini API",
        url: "https://learni-client.vercel.app/chat",
        image: "/images/prjlearni.png",
        github: [
            {name: "Frontend", url: "https://github.com/adhil72/learni-client",type:"github"},
            {name: "Backend", url: "https://github.com/adhil72/learni-api",type: "github"}
        ],
        stacks: ["NextJs", "Node.js", "Express", "MongoDB", "Typescript"]
    },
    {
        title:"Todo app",
        url:"https://todo-client-nine-chi.vercel.app",
        image:"/images/prj-todo.png",
        github:[
            {name: "Frontend",type: "github", url: "https://github.com/adhil72/todo-client"},
            {name: "Backend",type: "github", url: "https://github.com/adhil72/todo-server"},
        ],
        description:"When i applied for an internship, i got this assignment to submit",
        stacks:["NextJs","Tailwind CSS","Typescript"],
    }
]
export default works;