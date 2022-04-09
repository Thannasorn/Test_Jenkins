pipeline {
  agent any
  
  stages {
    stage("test"){
      steps {
        sh "yarn start"
        sh "yarn test"
      }
    }
    stage("build"){
      steps{
        sh "yarn"
        sh "yarn build"
      }
    }
    stage("deploy") {
            steps {
                sh "sudo rm -rf /var/www/html/Jenkins_test"
                sh "sudo cp -r ${WORKSPACE}/build/ /var/www/html/Jenkins_test/"
            }
        }
  }
}