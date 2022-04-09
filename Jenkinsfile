pipeline {
    agent any

    environment {
        FIREBASE_DEPLOY_KEY = '1//0g1S_YeNvFgFrCgYIARAAGBASNwF-L9Ir17Wji-Vg_HceUsmma26CVJE20xNpZWQuEgK_6-Fzdc9XJBp-rhmT3xGi3TInjX5dICY'
    }    
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
                sh "firebase deploy --token ${env.FIREBASE_DEPLOY_KEY}"
            }
        } 
    }
}