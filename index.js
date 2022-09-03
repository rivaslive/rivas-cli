#!/usr/bin/env node
'use strict';

const inquirer = require('inquirer');
const { convertToCamelCase } = require('./utils');
const { reactQuestions, customPath } = require('./questions');
const { createComponent } = require('./actions/react');
const { resolveLanguage, resolveLocation, help } = require('./config');

/*
 * componentNameArg: name of component
 * languageArg: javascript, js, jsx --js, --jsx, --javascript, typescript, ts, tsx, --ts, --tsx, --typescript
 * locationArg: atoms, molecules, organisms, template, custom
 */
const [, , componentNameArg, languageArg, locationArg] = process.argv;

(async () => {
  if (componentNameArg === '--help') {
    return console.log(help);
  }

  let _componentName = convertToCamelCase(componentNameArg);
  let _language = resolveLanguage[languageArg];
  let _location = resolveLocation[locationArg];
  let iterationRequest = true;

  while (iterationRequest) {
    if (!_componentName) {
      try {
        const { componentName } = await inquirer.prompt([
          reactQuestions.componentName
        ]);
        _componentName = convertToCamelCase(componentName);
      } catch (err) {
        console.log(err?.message);
      }
    } else if (!_language) {
      try {
        const { language } = await inquirer.prompt([reactQuestions.language]);
        _language = language;
      } catch (err) {
        console.log(err?.message);
      }
    } else if (!_location) {
      try {
        const { location } = await inquirer.prompt([reactQuestions.location]);
        _location = location;
      } catch (err) {
        console.log(err?.message);
      }
    } else if (_location === customPath) {
      try {
        const { locationPath } = await inquirer.prompt([
          reactQuestions.locationPath
        ]);
        _location = locationPath;
      } catch (err) {
        console.log(err?.message);
      }
    } else {
      iterationRequest = false;
    }
  }

  createComponent({
    componentName: _componentName,
    framework: 'react',
    language: _language,
    location: _location
  });
})();
