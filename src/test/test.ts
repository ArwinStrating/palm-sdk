import * as palm from '../index';
import * as admin from "firebase-admin";

const serviceAccount = require('../../config.json');

const app = palm.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://m4m-code-heroes-dw.firebaseio.com"
})

app.getAllGithubPullRequests()
    .then(pullRequests => console.log(pullRequests));

app.getAllGithubCommits()
    .then(commits => console.log(commits));

app.getAllTravisBuilds()
    .then(builds => console.log(builds));
