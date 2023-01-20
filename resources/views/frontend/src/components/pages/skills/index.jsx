import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Skills = () => {
    const [skills, setSkills] = useState({});

    useEffect(() => {
        const getSkills = async () => {
            try {
                const res = await axios.get(
                    "http://localhost:8000/api/v1/skills"
                );
                const skills = res.data.skills.data;
                console.log(skills);
                setSkills(skills);
            } catch (error) {
                console.log({ error });
            }
        };

        getSkills();
    }, []);
    return (
        <div className="container flex justify-center mx-auto pt-24">
            <div className="flex flex-col">
                <div className="w-full">
                    <Link to="/new" className="inline-flex items-center justify-center px-4 py-2 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[40px]">
                              Add New Skill
                            </Link>
                    <div className="border-b border-gray-200 shadow">
                        <table className="divide-y divide-gray-300 ">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-2 text-xs text-gray-500">
                                        ID
                                    </th>
                                    <th className="px-6 py-2 text-xs text-gray-500">
                                        Name
                                    </th>
                                    <th className="px-6 py-2 text-xs text-gray-500">
                                        slug
                                    </th>
                                    <th className="px-6 py-2 text-xs text-gray-500">
                                        Created_at
                                    </th>
                                    <th className="px-6 py-2 text-xs text-gray-500">
                                        Edit
                                    </th>
                                    <th className="px-6 py-2 text-xs text-gray-500">
                                        Delete
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-300">
                                {skills.length > 0 &&
                                    skills.map((skill, index) => {
                                        return (
                                            <tr
                                                className="whitespace-nowrap"
                                                key={index}
                                            >
                                                <td className="px-6 py-4 text-sm text-gray-500">
                                                    {skill.id}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-900">
                                                        {skill.name}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-500">
                                                        {skill.slug}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-500">
                                                    {skill.created_at}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <Link
                                                        to={`/update/${skill.id}`}
                                                        className="px-4 py-1 text-sm text-indigo-600 bg-indigo-200 rounded-full"
                                                    >
                                                        Edit
                                                    </Link>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <a
                                                        href="#"
                                                        className="px-4 py-1 text-sm text-red-400 bg-red-200 rounded-full"
                                                    >
                                                        Delete
                                                    </a>
                                                </td>
                                            </tr>
                                        );
                                    })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
