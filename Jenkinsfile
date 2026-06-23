pipeline {
    agent any

    tools {
        nodejs 'Node 20'   // must match name in Manage Jenkins → Tools → NodeJS
    }

    environment {
        CI = 'true'
    }

    options {
        timeout(time: 30, unit: 'MINUTES')
        buildDiscarder(logRotator(numToKeepStr: '10'))
    }

    triggers {
        githubPush()
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install --with-deps'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test'
            }
        }
    }

    post {
        always {
            publishHTML(target: [
                allowMissing: true,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report'
            ])

            archiveArtifacts artifacts: 'test-results/**', allowEmptyArchive: true
        }

        failure {
            echo 'Build failed — check the Playwright HTML report for details.'
        }

        success {
            echo 'All Playwright tests passed.'
        }
    }
}
