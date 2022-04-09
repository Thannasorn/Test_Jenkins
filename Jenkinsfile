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
                sh "echo 'hiiiiii'
            }
        }
    }
}