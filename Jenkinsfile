pipeline {
    agent any

    tools {
        nodejs 'njs-211'
    }

    environment {
        BUILD_NAME = 'ezbudget_reactjs'
    }

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                sh 'echo "Hello World!"'
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}