const studentName = "Siti";
const averageScore = 86;
const attendance = 92;
const familyIncome = 4000000;
const organizationMember = true;

const basicRequirement =
    averageScore >= 80 && attendance >= 90;

let scholarshipCategory;

if (
    basicRequirement &&
    familyIncome <= 3000000 &&
    organizationMember
) {
    scholarshipCategory = "Category A";
} else if (
    basicRequirement &&
    familyIncome <= 5000000 &&
    organizationMember
) {
    scholarshipCategory = "Category B";
} else {
    scholarshipCategory = "Not Eligible";
}

const basicStatus = basicRequirement ? "Passed" : "Failed";

console.log(`
Student: ${studentName}
Average Score: ${averageScore}
Attendance: ${attendance}%
Family Income: Rp${familyIncome}
Organization Member: ${organizationMember}
Basic Requirement: ${basicStatus}
Scholarship Category: ${scholarshipCategory}
`);