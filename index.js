#!/usr/bin/env node
'use strict';

const inquirer = require('inquirer');
// const { spawnSync } = require('child_process');
// const shell = require('shelljs');
const {
  resolveEnv,
  resolveTemplate,
  resolveLanguage
} = require('./config');
const { createReactComponent } = require('./actions/react');
const { reactQuestions } = require('./questions');

const [, , frameworkArg, templateArg, componentNameArg, languageArg] =
  process.argv;

(() => {
  const _language = resolveLanguage[languageArg];
  const _framework = resolveEnv[frameworkArg];
  let _template = resolveTemplate[_framework];

  if (_template) {
    _template = _template[templateArg];
  }

  console.log(componentNameArg);

  if (_framework && _template && _language && componentNameArg) {
    inquirer
      .prompt([reactQuestions.location])
      .then(({ location }) => {
        createReactComponent({
          template: _template,
          language: _language,
          framework: _framework,
          componentName: componentNameArg,
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
          componentName,
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
          componentName,
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
          componentName,
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
          componentName,
          location
        });
      })
      .catch((err) => {
        console.log(err?.message);
      });
  }
})();
