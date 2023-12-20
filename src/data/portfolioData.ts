export interface PortfolioDataModel {
  id: number,
  title: string,
  workType: string,
  techStack: string,
  description: string,
  imageSource: string,
  projectLink?: string,
  review?: string,
  reviewAttribution?: string,
  reviewerRole?: string,
}

const PortfolioData: Array<PortfolioDataModel> = [
  {
    id: 1,
    title: "Vikings Foundation",
    description: "I worked with The Vikings Foundation CIC, a local charitable organisation providing football development in Goole, to create a business-card website. I made the sketches in Figma before coding it up in Next JS. The main goal was a speedy output as the client had their own programme launch deadline to meet. I wanted to keep the design simple and the colour scheme well-contrasted to ensure maximum visibility.",
    techStack: "Next JS, Typescript, Tailwind, Netlify",
    workType: "Website",
    imageSource: "/assets/vikingsProjectDisplay.png",
    projectLink: "https://www.thevikingsfoundation.org/",
    review: "The site is perfect for our needs and is as we wanted it! It’s extremely attractive and functional, very easy to use and navigate. Bibhash’s eye for detail and dedication is clear to see as his service and standard of work are both professional and impeccable.",
    reviewAttribution: "Andy Ullathorne",
    reviewerRole: "Vikings Foundation",
  },
  {
    id: 2,
    title: "New Life Support",
    description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    techStack: "Next JS, Tailwind, Netlify",
    workType: "Website",
    imageSource: "/assets/nlsProjectDisplay.png",
    projectLink: "https://newlifesupport.co.uk/",
    review: "So pleased with our website and the way Bibhash listens to what we require and then delivers with expertise and style.",
    reviewAttribution: "Liz Green",
    reviewerRole: "New Life Support"
  },
  {
    id: 3,
    title: "Perfect Score",
    description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    techStack: "Next JS, Tailwind, Netlify",
    workType: "Website",
    imageSource: "/assets/perfectProjectDisplay.png",
    projectLink: "https://www.perfectscoreapp.com/",
    review: "It's a tad addictive!",
    reviewerRole: "Game user",
    reviewAttribution: "Neil Damms",
  },
  {
    id: 4,
    title: "Phoenix Community Radio",
    description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    techStack: "Next JS, Tailwind, Netlify",
    workType: "Website",
    imageSource: "/assets/phoenixProjectDisplay.png",
    review: "asd asdk askdjasjk asd asjdasdjsajdas ajsdjasdpasdpasd asdasdpasd[asdsa",
    reviewAttribution: "Maureen Brown",
    projectLink: "https://phoenixcommunityradio.com/",
    reviewerRole: "Chairperson, Phoenix Community Radio",
  },
  {
    id: 5,
    title: "My Air Quality",
    description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    techStack: "Next JS, Tailwind, Netlify",
    workType: "Website",
    imageSource: "/assets/airqualProjectDisplay.png",
    projectLink: "https://airqualitylevels.netlify.app/",
  },
]

export default PortfolioData;
