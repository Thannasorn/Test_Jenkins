pipeline {
  agent any
  
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