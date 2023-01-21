import { createContext, useState } from "react";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000/api/v1/"

const SkillContext = createContext();

export const SkillProvider = ({children }) => {
    const [skills, setSkills] = useState({});
    const [skill, setSkill] = useState({});

    const createSkill = async () => {}

    const getSkills = async () => {
        try {
            const res = await axios.get(
                "skills"
            );
            const skills = res.data.skills.data;
            setSkills(skills);
        } catch (error) {
            console.log({ error });
        }
    };

    const getSkill = async (id) => {
        try {
            const res = await axios.get(
                `skills/${id}`
            );
            const skill = res.data.skills.data;
            setSkill(skill);
        } catch (error) {
            console.log({ error });
        }
    };

    const updateSkill = async () => {}
    const deleteSkill = async () => {}

    const values = {skill,skills, getSkills, getSkill, createSkill,updateSkill,deleteSkill}
    return <SkillContext.Provider value={values}>{children}</SkillContext.Provider>
}

export default SkillContext;