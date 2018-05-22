import * as Palm from '../index';

Palm.getAllGithubPullRequests()
    .then(pullRequests => console.log(pullRequests));

Palm.getAllGithubCommits()
    .then(commits => console.log(commits));

Palm.getAllTravisBuilds()
    .then(builds => console.log(builds));
