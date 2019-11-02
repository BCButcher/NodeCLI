const express = require ("express");
const inquirer = require("inquirer");

const defineItem = [
  {
        type: 'input',
        name: 'welcome_intro',
        message: "Thank for using 'TeamBuild.com' to build your team. Press enter to continue..."
    },
    {
        type: 'input',
        name: 'manager_messge',
        message: 'To start, please confirm whether you are the team manager or acting on the team managers behalf',
        choices: ["I am the team manager", "I am acting on behalf of the team manager"],
        validate: async (choices) => {
          if (choices = "I am the team manager") {
            return "Please enter a valid amount.";
          }
            return true;
        }
    },
    {
        type: 'input',
        name: 'manager_first_name',
        message: 'Please enter the team managers first name'
    },
    {
        type: 'input',
        name: 'manager_last_name',
        message: 'Please enter the team managers last name'
    },
    {
        type: 'checkbox',
        name: 'manager_title',
        message: 'Please enter the team managers job title'
    },
    {
        type: 'input',
        name: 'behalf_first_name',
        message: 'Please enter the team managers first name'
    },
    {
    type: 'input',
    name: 'starting_bid',
    message: 'Please enter a starting bid',
    validate: async (input) => {
      if (isNaN(input)) {
        return "Please enter a valid amount.";
      }
      return true;
    }
  },
    {
      type: 'input',
      name: 'reserve_bid',
      message: '(Optional) Please enter a reserve bid',
      validate: async (input) => {
        if (isNaN(input)) {
          return "Please enter a valid amount.";
        }
        return true;
      }
  }
]