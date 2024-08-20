import Link from 'next/link';
import { IoMdLink } from 'react-icons/io';

interface Achievement {
  id: string;
  title: string;
  organization?: string;
  link: string;
  date: string;
  description?: string;
}

const achievements: Achievement[] = [
  {
    id: 'api-hacks',
    title: "2nd Runner-up in API Hacks 2.0",
    organization: "Devpost",
    link: "https://devpost.com/software/394520?ref_content=existing_user_added_to_software_team&ref_feature=portfolio&ref_medium=email&utm_campaign=software&utm_content=added_to_software_team&utm_medium=email&utm_source=transactional#app-team",
    date: "2023",
    description: "Won 2nd Runner-up prize in API Hacks 2.0 hackathon organized by Devpost.",
  },
  {
    id: 'nextjs-bounties',
    title: "ST Earn OSS Issue: Allow Sponsors to Edit Their Profile",
    organization: "Superteam",
    link: "https://earn.superteam.fun/listings/bounty/st-earn-oss-issue-allow-sponsors-to-edit-their-profiles/",
    date: "2023",
    description: "Won 1st Price and $75",
  },
  {
    id: 'nextjs-bounties-1',
    title: "ST Earn OSS Issue: Make Listing Slugs Editable",
    organization: "Superteam",
    link: "https://earn.superteam.fun/listings/bounty/st-earn-oss-issue-make-listing-slugs-editable",
    date: "2023",
    description: "Won 1st Price and $75",
  },
];

const blogs: Achievement[] = [
  {
    id: 'blog-3',
    title: "Mastering 40x Error Handling in Node.js with TypeScript: A Peaceful Approach",
    date: "2024",
    link: "https://medium.com/@sajaldewangan/mastering-40x-error-handling-in-node-js-with-typescript-a-peaceful-approach-eedd8eb99c41",
    // description: "Mastering 40x Error Handling in Node.js with TypeScript: A Peaceful Approach",
  },
  {
    id: 'blog-1',
    title: "Authentication using cookies with JWT in ExpressJs",
    date: "2023",
    link: "https://medium.com/@sajaldewangan/authentication-using-cookies-with-jwt-in-expressjs-900467c3b8d3",
    // description: "Authentication using cookies with JWT in ExpressJs.",
  },
  {
    id: 'blog-2',
    title: "Basic Template using NodeJs, Typescript",
    date: "2023",
    link: "https://medium.com/@sajaldewangan/basic-template-using-nodejs-typescript-9e74d2dbb42b",
    // description: "Basic template using NodeJs, Typescript.",
  },
];

export default function Achievements() {
  return (
    <div className="w-full max-w-4xl tracking-wide">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-3xl font-semibold mb-4 text-primary">Achievements</h3>
          <div className="space-y-6">
            {achievements.map((achievement) => (
              <div key={achievement.id}>
                <h4 className="text-xl text-primary font-semibold flex items-center">
                  {achievement.title}
                  {achievement.link && (
                    <Link href={achievement.link} className="ml-2" target="_blank" rel="noopener noreferrer">
                      <IoMdLink className="w-6 h-6" />
                    </Link>
                  )}
                </h4>
                <p className="text-base text-gray-600">{achievement.organization} • {achievement.date}</p>
                <p className="text-lg text-gray-600 mt-2">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-semibold mb-4 text-primary">Blogs</h3>
          <div className="space-y-6">
            {blogs.map((blog) => (
              <div key={blog.id}>
                <h4 className="text-xl text-primary font-semibold flex items-start">
                  {blog.title}
                  <Link href={blog.link} className="ml-2" target="_blank" rel="noopener noreferrer">
                    <IoMdLink className="w-6 h-6 mt-1" />
                  </Link>
                </h4>
                <p className="text-base text-gray-600">{blog.date}</p>
                <p className="text-lg text-gray-600 mt-2">
                  {blog.description ? blog.description : ""}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}