## About This Site

Created using [Docusaurus v2](https://docusaurus.io) and hosted on the GitHub pages endpoint for this repo. The site *is* the Playbook. To use it, instantiate the template repo, then walk through the Playbook to customize it for your needs.

For my reference, here is how I created *this* site.

> 1. My Local Dev Environment

 * MacBook Pro - running macOS 12.1 (Monterey)
 * Node env - `nvm` v0.39.1, `node` v16.16, `npm` v8.11

> 2. Docusaurus setup

Note that this scaffolds the website source in the root directory of this repo, which will overwrite the default README. Moved the original README to [README-template.md](README-template.md) before running command.

```bash
$ npx create-docusaurus@latest . classic
Need to install the following packages:
  create-docusaurus@latest
Ok to proceed? (y) 
...

Run `npm audit` for details.
[SUCCESS] Created .
...

We recommend that you begin by typing:

  `cd `
  `npm start`

Happy building awesome websites!
```

Commit this to the GitHub repo as the Initial Import.

> 3. GitHub Pages - Setup and Validate Manually

Update the `docusaurus.config.js` settings using the guidance for [Deployment to GitHub Pages](https://docusaurus.io/docs/deployment#deploying-to-github-pages). 

_See: FIXME #1, #2, #3_.

Test manual deployment using the `npm run deploy` command from the root directory as shown below - where the personal access token can be [generated as shown here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) with a set expiry date that is _at most_ 1 year from date of generation.

```
$ GIT_USER=nitya GIT_PASS=<USE-PERSONAL-TOKEN> npm run deploy

> deploy
> docusaurus deploy

[INFO] Deploy command invoked...
[INFO] organizationName: 30DaysOf
[INFO] projectName: template
[INFO] deploymentBranch: gh-pages
..

[SUCCESS] Generated static files in "build".
[INFO] Use `npm run serve` command to test your build locally.
..

[INFO] `git push --force origin gh-pages` code: 0
Website is live at "https://30DaysOf.github.io/template/".
```

Visit [that website](https://30DaysOf.github.io/template) to see if it renders correctly live. 

If it is not live, some debug help:

* Check your [GitHub Actions](https://github.com/30DaysOf/template/actions/runs/2899920665) - make sure there was a `pages-build-deployment` action that ran successfully.
*  Check your [GitHub Pages Settings](https://github.com/30DaysOf/template/settings/pages) on your project. Make sure it is set as follows:
 * Source = `Deploy from a branch`
 * Branch = `gh-pages` + `/(root)`


> 4. GitHub Pages - Automate with GitHub Actions

On success above, GitHub Pages Settings page will have a message like:
 
 "_Your site was last deployed to the github-pages environment by the pages build and deployment workflow. [Learn more about deploying to GitHub Pages using custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow)_"

**Note**: The manual deployment would have setup a `pages-build-deployment` action that will run automatically on every commit. However, it does not have an explicit workflow file that you can then customize later as needed. 

Let's automate this using the [GitHub Actions provided by Docusaurus](https://docusaurus.io/docs/deployment#triggering-deployment-with-github-actions) instead.
 * Add [.github/workflows/deploy.yml](.github/workflows/deploy.yml) to trigger on every push (commit) to main
 * Add [.github/workflows/test-deploy.yml](.github/workflows/deploy.yml) to trigger on every pull (request) to main

 The default workflow files provided by Docusaurus use `yarn` - I've updated them to use `npm`. It also doesn't hurt to update `docusaurus.config.js` to explicitly configure the [_deploymentBranch_](https://docusaurus.io/docs/api/docusaurus-config#deploymentBranch) and [_trailingSlash_](https://docusaurus.io/docs/deployment#trailing-slashes) settings

 Commit the changes to auto-trigger the default workflow for deployment on push. At this point your [Actions dashboard](https://github.com/30DaysOf/template/actions) will show three action workflows listed.
  * `Deploy to GitHub Pages` (from Docusaurus, on push)
  * `Test deployment` (from Docusaurus, on pull)
  * `pages-build-deployment` (from manual deploy)

  Since the first and third actions do the same thing, we can delete the third one (simply delete the past manual run), leaving the first workflow as the default deploy action for commits.