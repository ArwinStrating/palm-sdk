import * as admin from "firebase-admin";

export interface FirebaseAppOptions {
    credential?: any;
    databaseAuthVariableOverride?: object;
    databaseURL?: string;
    storageBucket?: string;
    projectId?: string;
  }

export class PalmApp {
    db: any;
    constructor(options: FirebaseAppOptions) {
        admin.initializeApp(options);
        this.db = admin.firestore();
    }

    public getAllGithubPullRequests(): Promise<any> {
        var pullRequests = [];
        return this.db.collection('data').doc('github').collection('pull_requests').get()
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
    
    public getAllGithubCommits(): Promise<any> {
        var commits = [];
        return this.db.collection('data').doc('github').collection('commits').get()
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
    
    public getAllTravisBuilds(): Promise<any> {
        var builds = [];
        return this.db.collection('data').doc('travis').collection('builds').get()
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
}