function solution(today, limit) {
  const trs = Array.from(document.querySelectorAll('table tbody tr'));
  const loanHistory = [];
  const todayInD = new Date('2016-11-30');
  const dateLimit = new Date(todayInD.setDate(todayInD.getDate() + 14));

  trs.forEach(row => {
    const color = row.style.backgroundColor === 'red' ? 'red' : 'none';
    const tds = Array.from(row.querySelectorAll('td'));

    const name = Array.from(tds)[0].innerText;
    const date_loan = new Date(tds[1].innerText);
    const date_returned = tds[2].innerText ? new Date(tds[2].innerText) : '';
    const date_to_return = new Date(new Date(date_loan).setDate(date_loan.getDate() + 14));

    const person = {
      name,
      date_loan,
      date_returned,
      date_to_return,
      color,
      overdue: false
    };

    if (date_returned) {
      if (date_to_return.getTime() < date_returned.getTime()) {
        person.overdue = true;
      }
    } else {
      if (date_to_return.getTime() < dateLimit.getTime()) {
        person.overdue = true;
      }
    }

    console.log(JSON.stringify(person));
    loanHistory.push(person);
  });

  let counter = 0;
  loanHistory.forEach((person, idx) => {
    if (person.overdue && person.color === 'none') {
      counter++;
    } else if (!person.overdue && person.color === 'red') {
      counter++;
    }
  });

  return counter;
}

const today = '2016-11-30';
const limit = 14;

const result = solution(today, limit);
console.log(`### result: ${result}`);
