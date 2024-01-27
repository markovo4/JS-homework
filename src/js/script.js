const createCandidate = function (name, skills = []) {
  const candidate = {
    name,
    skills,
  };
  return candidate;
};

const requirements = [];
const addRequirement = function (requirement) {
  requirements.push(requirement);
  return requirements;
};

addRequirement('Time-Management');
addRequirement('Punctual');
addRequirement('Strategic-thinking');
addRequirement('Javascript');
addRequirement('Node.js');
const candidate1 = createCandidate('Vova', [
  'Time-Management',
  'Strategic-thinking',
  'Javascript',
]);

const candidate2 = createCandidate('Vova', [
  'Time-Management',
  'Punctual',
  'Strategic-thinking',
  'Javascript',
  'Node.js',
]);

const candidate3 = createCandidate('Alex', [
  'Punctual',
  'Time-Management',
  'Javascript',
]);

const candidates = [candidate1, candidate2, candidate3];
const gradedCandidates = [];

const interview = function (candidate, requirement) {
  const hasAllReq = requirement.every((skill) => candidate.skills.includes(skill));
  return hasAllReq;
};
console.log(interview(candidate1, requirements));

const gradingFunction = function (candidate, requirements) {
  let score = 0;
  for (const requirement of requirements) {
    if (candidate.skills.includes(requirement)) score += 1;
  }
  return (score / requirements.length) * 100;
};

const scheduleInterview = function (candidates, requirements, gradeFun) {
  let score = 0;
  for (const candidate of candidates) {
    score = gradeFun(candidate, requirements);
    gradedCandidates.push({ candidate, score });
  }
  return gradedCandidates.sort((a, b) => b.score - a.score);
};

console.log(scheduleInterview(candidates, requirements, gradingFunction));
