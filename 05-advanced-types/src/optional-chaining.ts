// Optional chaining

const fetchedUserData = {
  id: '001',
  name: 'Rikus',
  job: { title: 'CEO', description: 'My own company' },
};

console.log(fetchedUserData?.job?.title); // ? only try to access property if defined
