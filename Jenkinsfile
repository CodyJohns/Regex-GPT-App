pipeline {
    agent any

    tools {
        nodejs 'njs-211'
    }

    environment {
        BUILD_NAME = 'ezbudget_reactjs'
        CI = false
        OCI_CLI_SUPPRESS_FILE_PERMISSIONS_WARNING = true
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
                sh '/var/lib/jenkins/bin/oci --version'
                //sh '/home/ubuntu/bin/oci os object bulk-upload -ns axgl5hrae4r8 -bn public --src-dir build/'
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}