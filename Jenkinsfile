pipeline {

  agent any

  environment {
        NODE_IMAGE = 'latest'
    }    
  stages {
    stage("test"){
      steps {
        sh "yarn"
        sh "yarn test"
      }
    }
    stage("build"){
      steps{
        sh "yarn"
        sh "yarn build"
      }
    }
    
  }
}