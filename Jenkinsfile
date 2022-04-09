pipeline {
    agent any
   
    stages {
        stage('Test') {
            steps {
                sh 'yarn'
                sh 'yarn test'
            }
        }
        stage('Build') {
            steps {
                sh 'yarn'
                sh 'yarn build'
            }
        }
        stage('Deploy') {
            steps {
                sh "yarn global add firebase-tools --cache-folder node_modules"
                sh "firebase deploy --token env.$FIREBASE_DEPLOY_KEY"
            }
        } 
    }
}