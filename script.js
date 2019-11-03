'use strict';
var inquirer = require('..');

var questions = [
    {
    type: 'input',
    value: 'ques0',
    name: 'welcome',
    message: "Thank for buidling with 'TheDudeTeam. Press enter to continue..."
    },
    {
    type: 'input',
    value: 'ques1',
    name: 'manager_first',
    message: 'Please enter your first name:'
    },
    {
    type: 'input',
    value: 'ques2',
    name: 'manager_last',
    message: 'Please enter your last name:'
    },
    {
    type: 'input',
    value: 'ques3',
    name: 'manager_title',
    message: 'Please enter your job title:'
    },
    {
    type: 'confirm',
    value: 'ques4',
    name: 'team_members',
    message: 'Would you like to enter your team members now?'
    },
    {
    type: 'input',
    value: 'ques5',
    name: 'members_first',
    message: 'Please enter the team members first name:'
    },
    {
    type: 'input',
    name: 'members_last',
    value: 'ques6',
    message: 'Please enter the team members last name:'
    },
    {
    type: 'checkbox',
    name: 'intern_engineer',
    message: 'Is this team member an engineer or intern',
    choices: [
      {value: 'engineer', name: 'Engineer'},
      {value: 'intern', name: 'Intern'}        
      ],
        filter: function (val) {
          return val.toLowerCase();
        }
    }
  ];

inquirer.prompt(questions).then(answers => {
  console.log('Send the HTML:');
  console.log(JSON.stringify(answers, null, '  '));
});