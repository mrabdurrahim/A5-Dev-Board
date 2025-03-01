
const currentDate = new Date();
document.getElementById("date").innerHTML = currentDate.toDateString();

const items = [
  {fixMobileButtonIssue: 1},
  {addDarkMode: 1},
  {optimizeHomepage: 1},
  {addNewEmoji : 1},
  {integrateOpenAIAPI: 1},
  {improveJobsearching: 1}
]

function getTotal (items) {
  let total = 0;
  for (const item of items) {
    total = total + item;
  }
  return total;
}
const total = getTotal (items);