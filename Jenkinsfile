pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t cloud-native-webapp .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 3000:3000 --name cloud-native-webapp-container cloud-native-webapp'
            }
        }

        stage('Test') {
            steps {
                sh 'curl -f http://localhost:3000 || exit 1'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully 🚀'
        }
        failure {
            echo 'Pipeline failed ❌'
        }
    }
}
