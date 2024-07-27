import { IoMdSchool } from "react-icons/io";

const data = [
  {
    title: "B.Tech. in Computer Science",
    institution: "KIIT Bhubaneshwar",
    duration: "2020 - 2024",
    Grade: "8.43 CGPA",
  },
  {
    title: "Higher Secondary Education",
    institution: "KPS, Raipur",
    duration: "2018 - 2020",
    Grade: "93.2%",
  },
]

export default function EducationSection() {
  return <div className="flex flex-col gap-y-2">
    <h1 className="text-lg text-primary">Education</h1>
    <ul className="flex flex-col gap-y-2">
      {data.map((item, index) => (
        <li className="flex items-start gap-x-2" key={index}>
          <IoMdSchool className="text-xl text-primary" />
          <div>
            <h2 className="text-xl">{item.title}</h2>
            <p className="text-gray-500">{item.institution}</p>
            <p className="text-gray-500">{item.duration}</p>
            <p className="text-gray-500">{item.Grade}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
}