
export const navItems = [
  { name: "Home", link: "#home",  },
  { name: "About", link: "#about", },
  { name: "Projects", link: "#projects1", },
  { name: "Testimonials", link: "#testimonials", },
  { name: "Contact", link: "#contact",  },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Possibility to work with you wherever you are",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "I am currently building several projects.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "XClone",
    des: "Built a clone of a popular web application with comprehensive authentication, user profile management, and real-time updates and efficient data fetching using React Query .",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/BayanAlbaghdadi0/Xclone",
  },
  {
    id: 2,
    title: "Live Chat",
    des: "Created a real-time live chat application with room-based chat functionality and instant messaging.",
    img: "/p2.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/BayanAlbaghdadi0/Chat",
  },
  {
    id: 3,
    title: " House Rental ",
    des: "Advanced search functionality with filters for location, price, and property type, Secure user authentication and profile management, Responsive design ensuring optimal usability on all devices. .",
    img: "/p4.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/BayanAlbaghdadi0/Renting-houses",
  },
  {
    id: 4,
    title: "Cattery-saas",
    des: "Website design for managing a cat shelter, where the food warehouse was managed in a scientific and accurate way based on the cats we have. • Complete CRUD operations with ease and simplicity. • Beautiful and simple design that reflects the spirit of the site.",
    img: "/p3.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/5aledar/Cattery-saas",
  },
];

export const testimonials = [
  {
    quote: `"I am very pleased to work with Bayan, as his role has not only improved the design and appearance of the website but also significantly enhanced its performance, making the user experience smoother and more effective. I highly recommend him to anyone looking to improve the quality of their website."`,
    name: "Khaled abd alsalam",
    title: "Full-Stack dev||team leader",
  },
  {
    quote: `"Working with Bayan has been a fantastic experience. He demonstrated a high level of professionalism in using React.js and provided innovative and quick solutions to the challenges we faced, helping us achieve our goals efficiently."`,
    name: "Muhannad Abdulrahem",
    title: "Senior backend developer ",
  },
  {
    quote: `"You are an incredible human being. It's so good that we have so much in common. You deserve the world."`,
    name: "Joaquim Miranda",
    title: "CEO & co-founder | Run Code School",
  },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/three.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/re.svg",
    nameImg: "/re.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/tail.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/ts.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Professional Back End Developer",
    desc: "Designed, developed, and maintained robust back-end services and APIs using Node.js and Express.js.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Designs matching the UI/UX",
    desc: "Worked closely with designers to translate UI/UX wireframes into interactive user interfaces.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/BayanAlbaghdadi0",
  },
  // {
  //   id: 2,
  //   img: "/twit.svg",
  // },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/bayan-albaghdadi-320588318",
  },
];
