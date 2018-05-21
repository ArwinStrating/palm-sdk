import { db } from './db';

export function getAllGithubPullRequests(): Promise<any> {
    var pullRequests = [];
    return db.collection('data').doc('github').collection('pull_requests').get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                pullRequests.push(doc.data());
            });
            return pullRequests;
        })
        .catch(err => {
            console.log('Error getting documents', err);
        });
}

export function getAllGithubCommits(): Promise<any> {
    var commits = [];
    return db.collection('data').doc('github').collection('commits').get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                commits.push(doc.data());
            });
            return commits;
        })
        .catch(err => {
            console.log('Error getting documents', err);
        });
}

export function getAllTravisBuilds(): Promise<any> {
    var builds = [];
    return db.collection('data').doc('travis').collection('builds').get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                builds.push(doc.data());
            });
            return builds;
        })
        .catch(err => {
            console.log('Error getting documents', err);
        });
}