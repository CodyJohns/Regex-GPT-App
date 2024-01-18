pipeline {
    agent any

    tools {
        nodejs 'njs-211'
    }

    environment {
        BUILD_NAME = 'ezbudget_reactjs'
        CI = false
        OCI_CLI_SUPPRESS_FILE_PERMISSIONS_WARNING=True
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
                sh '/home/ubuntu/bin/oci os ns get'
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}