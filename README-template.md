# Template for #30Days Projects

#30Days is about creating content and sharing insights that reflects a #30Days journey in doing something that builds a skill or habit. 
This project is about creating a template to _plan, track, and share_ a #30Days journey.

---

## Is 30 Days Enough?

We've all heard the saying "_it takes 30 days to form a habit_". 

[In his blog article](https://jamesclear.com/new-habit), James Clear estimates that it takes more than 2 months to sustain a habit - with a research study showing it could take anywhere between 18 - 254 days to make it sustainable. 

Then why stick with 30 days?
 * **First, because it was a convenient measure for planning**. A month provides a good foundation for 2 "bookend" days (kickoff on day 1, retrospective on day 30) with 4 "weeks" in between. We can now plan a mini-goal each week ("theme") and use that option to either building depth (expertise via progression) or breadth (knowledge via facets).

* **Second, because it fills meaningful tiles in our life calendar**. One of eureka moments came when watching [Inside the mind of a master procrastinator](https://www.ted.com/talks/tim_urban_inside_the_mind_of_a_master_procrastinator?language=en) - a fascinating TED talk from Tim Urban. He talks about the [Life Calendar](https://waitbutwhy.com/2014/05/life-weeks.html) - a way to think about your life in weeks so you can measure or plan accomplishments and milestones in _countable_ ways. 

With #30Days, we can build `Life Learning` version of the calendar that we fill in 4 tiles at a time - reminding that change is constant, and cultivating habits of continuous learning are key.

---

## The #30Days Template

This section will continue to evolve as I explore new ideas. The key goals is to have a "30Days-in-a-Box" template repo that can be instantiated and customized to launch a new project. Here are some features it should have:

 * Playbook (document template usage)
 * Navigation Menu = key shortcuts
 * Landing Page = core components, call to action
 * Analytics = easy integration to track usage
 * Hosting = GitHub Pages (default), links to other options
 * Technology = using [Docusaurus v2](https://docusaurus.io)
 * Components
    - Blog = daily content updates
    - Post = template with custom sections, banner
    - Syndication = use as canonical source
    - Custom Issues = for community contribution
    - Discussions = for community interactions
    - Illustrations = for visual interest, learning
    - Tags = align to GitHub topics for consistency
    - Metadata = support OpenGraph, Twitter cards
 * Plugins or Extensions 
    - Search
    - Analytics
    - Code Embedding
    - Diagram Embedding
    - Downloadable PDF

---

## The #30Days Hub

Also planned: Automated creation/maintenance of a central hub to support: 
 * **discovery** of #30Days roadmaps
 * **mix-and-match** into #100daysOfCode roadmaps
 * **showcase** of #30Days code projects/repos
 * **community** gallery of contributors, partipants
 * **calendar** to highlight related community events or study sprints

---

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

Let's automate this using the [GitHub Actions provided by Docusaurus](https://docusaurus.io/docs/deployment#triggering-deployment-with-github-actions).
 * Add [.github/workflows/deploy.yml](.github/workflows/deploy.yml) to trigger on every push (commit) to main
 * Add [.github/workflows/test-deploy.yml](.github/workflows/deploy.yml) to trigger on every pull (request) to main

 The default workflow files provided by Docusaurus use `yarn` - I've updated them to use `npm`. It also doesn't hurt to update `docusaurus.config.js` to explicitly configure the [_deploymentBranch_](https://docusaurus.io/docs/api/docusaurus-config#deploymentBranch) and [_trailingSlash_](https://docusaurus.io/docs/deployment#trailing-slashes) settings