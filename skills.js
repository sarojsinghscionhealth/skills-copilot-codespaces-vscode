// skills.js

// Function to add a new skill
function addSkill(skills, newSkill) {
    if (!skills.includes(newSkill)) {
        skills.push(newSkill);
    }
    return skills;
}

// Function to remove a skill
function removeSkill(skills, skillToRemove) {
    const index = skills.indexOf(skillToRemove);
    if (index > -1) {
        skills.splice(index, 1);
    }
    return skills;
}

// Function to list all skills
function listSkills(skills) {
    return skills;
}

// Example usage
let mySkills = ['JavaScript', 'HTML', 'CSS'];
mySkills = addSkill(mySkills, 'React');
mySkills = removeSkill(mySkills, 'CSS');
console.log(listSkills(mySkills)); // Output: ['JavaScript', 'HTML', 'React']