interface Company {
  name: string;
  category: string;
  start: number;
  end: number;
}

export const companies: Company[] = [
  {
    name: "LisLeert",
    category: "Healthcare",
    start: 2020,
    end: 2050,
  },
  {
    name: "Buitenkanz",
    category: "Healthcare",
    start: 2020,
    end: 2080,
  },
  {
    name: "Jorik van Ruiswijk",
    category: "Development",
    start: 2017,
    end: 2066,
  },
  {
    name: "Saxum",
    category: "Development",
    start: 2001,
    end: 2030,
  },
  {
    name: "Media.Monks",
    category: "Development",
    start: 2002,
    end: 2100,
  },
  {
    name: "Clean by Lien",
    category: "Household",
    start: 2022,
    end: 2078,
  },
];

export const ages = [
  33, 12, 17, 88, 97, 21, 102, 7, 2, 5, 51, 62, 13, 5, 4, 50, 66,
];

// FOR EACH

// companies.forEach((company) => {
//   console.log(company);
// });

// FILTER

// const canDrink = ages.filter((age) => {
//   if (age >= 21) {
//     return true;
//   }
// });

// const canDrink = ages.filter((age) => age >= 21);

// console.log(canDrink);

// FILTER DEVELOPMENT COMPANIES

// const developmentCompanies = companies.filter((company) => {
//   if (company.category === "Development") {
//     return true;
//   }
// });

// const developmentCompanies = companies.filter(
//   (company) => company.category === "Development"
// );

// console.log(developmentCompanies);

// FILTER COMPANIES FROM 2020-2022

// const modernCompanies = companies.filter(
//   (company) => company.start >= 2020 && company.start <= 2022
// );

// console.log(modernCompanies);

// MAPPING

// const companyNames = companies.map((company) => company.name);

// const testMap = companies.map((company) => {
//   return `${company.name} [${company.start} - ${company.end}]`;
// });

// console.log(testMap);

// MAPPING WITH MATH

// const agesTimesTwo = ages.map((age) => age * 2);
// const agesSquared = ages.map((age) => Math.sqrt(age));
// const ageMap = ages.map((age) => Math.sqrt(age)).map((age) => age * 2);

// console.log(ageMap);

// SORTING

const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

// console.log(sortedCompanies);

// SORT AGES

// const sortedAge = ages.sort((a, b) => a - b);

// console.log(sortedAge);

// REDUCE (TOTAL SUM)

// const ageSum = ages.reduce((total, age) => {
//   return total + age;
// }, 0);

// const ageSum = ages.reduce((total, age) => total + age, 0);

// console.log(ageSum);

// COMBINED FUNCTIONS

const combined = ages
  .map((age) => age * 2)
  .sort((a, b) => a - b)
  .filter((age) => age <= 34);

console.log(combined);
