#!/usr/bin/env node
'use strict';

const inquirer = require('inquirer');
const { convertToCamelCase } = require('./utils');
const { reactQuestions } = require('./questions');
const { createReactComponent } = require('./actions/react');
const {
  resolveEnv,
  resolveTemplate,
  resolveLanguage,
  help
} = require('./config');

const [, , templateArg, componentNameArg, languageArg] = process.argv;

const frameworkArg = 'react';

(() => {
  if (templateArg === '--help') {
    return console.log(help);
  }

  const _language = resolveLanguage[languageArg];
  const _framework = resolveEnv[frameworkArg];
  let _template = resolveTemplate[_framework];
  const _componentName = convertToCamelCase(componentNameArg);

  if (_template) {
    _template = _template[templateArg];
  }

  if (_framework && _template && _language && _componentName) {
    inquirer
      .prompt([reactQuestions.location])
      .then(({ location }) => {
        createReactComponent({
          template: _template,
          language: _language,
          framework: _framework,
          componentName: _componentName,
          location
        });
      })
      .catch((err) => {
        console.log(err?.message);
      });
  } else if (_framework && _template && _language) {
    inquirer
      .prompt([reactQuestions.location, reactQuestions.componentName])
      .then(({ location, componentName }) => {
        createReactComponent({
          template: _template,
          language: _language,
          framework: _framework,
          componentName: convertToCamelCase(componentName),
          location
        });
      })
      .catch((err) => {
        console.log(err?.message);
      });
  } else if (_framework && _template) {
    inquirer
      .prompt([
        reactQuestions.location,
        reactQuestions.componentName,
        reactQuestions.language
      ])
      .then(({ location, componentName, language }) => {
        createReactComponent({
          template: _template,
          language,
          framework: _framework,
          componentName: convertToCamelCase(componentName),
          location
        });
      })
      .catch((err) => {
        console.log(err?.message);
      });
  } else if (_framework) {
    inquirer
      .prompt([
        reactQuestions.template,
        reactQuestions.location,
        reactQuestions.language,
        reactQuestions.componentName
      ])
      .then(({ location, componentName, language, template }) => {
        createReactComponent({
          template,
          language,
          framework: _framework,
          componentName: convertToCamelCase(componentName),
          location
        });
      })
      .catch((err) => {
        console.log(err?.message);
      });
  } else {
    inquirer
      .prompt([
        reactQuestions.framework,
        reactQuestions.template,
        reactQuestions.location,
        reactQuestions.language,
        reactQuestions.componentName
      ])
      .then(({ framework, template, location, componentName, language }) => {
        createReactComponent({
          template,
          language,
          framework,
          componentName: convertToCamelCase(componentName),
          location
        });
      })
      .catch((err) => {
        console.log(err?.message);
      });
  }
})();
