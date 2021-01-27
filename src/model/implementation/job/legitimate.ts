import { Industry, Job } from '@app/model/job/Job';

const HouseChores: Job = {
    salary: 50,
    description: 'You keep your room clean and wash your own clothes, mum gives you a reasonable allowance.',
    name: 'House Chores',
};

const PaperDelivery: Job = {
    salary: 200,
    description: "You have to wake up early morning, rain or shine to deliver these papers. It's a tough grind.",
    name: 'Paper Delivery',
};

const Busser: Job = {
    salary: 750,
    description: 'Your first weekend job. Clearing tables at your local cafe.',
    name: 'Busser',
};

const WebDeveloper: Job = {
    salary: 2000,
    description:
        "Mum's friends found out you are quite good with the computer, they've tasked you with building them a website.",
    name: 'Web Developer',
};

const Nurse: Job = {
    salary: 2000,
    description: 'Something something',
    name: 'Nurse',
};

const Jesus: Job = {
    salary: 2000,
    description: "You're now God",
    name: 'Good man',
};

export const Legitimate: Industry = {
    description: 'Always looking to innovate and provide value to  the community',
    jobs: [HouseChores, PaperDelivery, Busser, WebDeveloper, Nurse, Jesus],
    name: 'Legitimate',
};
