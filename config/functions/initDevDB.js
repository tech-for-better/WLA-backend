const pg = require("pg");
const careerPaths = 5;
const courses = 100;
const averageModulesPerCourse = 3;

function clearDb() {
    return `
    DELETE FROM career_paths_courses__courses_career_paths;
    DELETE FROM modules;
    DELETE FROM career_paths;
    DELETE FROM courses
    `
}

function createCareerPath() {
    new Array(careerPaths).fill(null).map((path, index) => {
        const name  = "career path " + (index + 1)
    })
}

function fillDb() {
    createCareerPath()
    // generate the sql string to end all sql strings
}


function initDevDb() {
    const clear = clearDb()
    const fill = fillDb()
    return pg.query(clear + "\n" + fill) 
};

module.exports = initDevDb;