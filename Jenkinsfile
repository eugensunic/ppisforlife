pipeline {
    agent any
    triggers {
    githubPush()
  }

    stages {
        stage('Initialization') {
            steps {
                echo 'Initializing the build process...'
                sh 'echo "This is a shell command being executed."'
            }
        }

        stage('Preparation') {
            steps {
                echo 'Preparing the environment...'
            }
        }

        stage('Execution') {
            steps {
                echo 'Executing the main steps...'
                script {
                    for(int i = 0; i < 3; i++) {
                        echo "Loop iteration: ${i}"
                    }
                }
            }
        }

        stage('Finalization') {
            steps {
                echo 'Finalizing the process...'
                sh 'echo "Another shell command to finalize things."'
            }
        }
    }

    post {
        always {
            echo 'This will always run after all stages.'
        }
        success {
            echo 'The pipeline completed successfully!'
        }
        failure {
            echo 'Something went wrong during the pipeline execution.'
        }
    }
}
