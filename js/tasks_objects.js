/* const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan){
        const {languages} = plan.skills;
        console.log(`Мне ${personalPlanPeter.age} и я владею языками ${languagesUpper}`)
    }
};
personalPlanPeter.showAgeAndLangs(personalPlanPeter);
function showExperience(plan) {

console.log (plan.skills.exp);
}
showExperience(personalPlanPeter);


function showProgrammingLangs(plan) {
    const {js, php} = plan['skills']['programmingLangs'];
console.log(`Язык js изучен на ${js} \n Язык php изучен на ${php}`);
}
showProgrammingLangs(personalPlanPeter); */


const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', ' eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan){
        
        const {age} = plan;
        const {languages} = plan.skills;

        let str = `Мне ${age} лет и я изучаю `;
        languages.forEach(function(lang){
            str+=`${lang.toUpperCase() }`;
        });
        console.log(str);
    }

};
personalPlanPeter.showAgeAndLangs(personalPlanPeter);

function showExperience(plan) {
const {exp} = plan.skills;
console.log(exp);
}
showExperience(personalPlanPeter);


function showProgrammingLangs(plan) {
const {programmingLangs} = plan.skills;
for(let key in programmingLangs){
    console.log(`Язык ${key} изучен на ${programmingLangs[key]}`);
}
}
showProgrammingLangs(personalPlanPeter)

function showProgrammingLangs(plan) {
    let str = '';
    const {programmingLangs} = plan.skills;
    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
    }

    return str;
}
