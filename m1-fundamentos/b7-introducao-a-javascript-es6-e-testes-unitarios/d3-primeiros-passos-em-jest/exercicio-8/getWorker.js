const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Jerry',
    lastName: 'Seinfeld',
    specialties: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Costanza',
    specialties: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Elaine',
    lastName: 'Benes',
    specialties: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Cosmo',
    lastName: 'Kramer',
    specialties: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Babu',
    lastName: 'Bhatt',
    specialties: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Newman',
    lastName: 'Postman',
    specialties: ['Backend'],
  },
];

const getWorker = (id) => {
  const selectedWorker = professionalBoard.find((worker) => worker.id === id);
  if (selectedWorker === undefined) throw new Error('ID not found');
  return selectedWorker;
};

const getDetail = (id, detail) => {
  const selectedWorkerDetail = getWorker(id)[detail];
  if (selectedWorkerDetail === undefined) throw new Error('Detail not found');
  return selectedWorkerDetail;
};

const getWorkerDetail = (id, detail) => {
  return getDetail(id, detail);
};

module.exports = { getWorkerDetail };
