pipeline{
    agent any
    parameters{
        string(name: "Repositories", defaultValue: "", trim: true, description: "Please enter your Repositories")
        string(name: "Device_Name", defaultValue: "127.0.0.1:21503", trim: true, description: "Please enter Device Name")
        choice(name: "Apps", choices: ["wdio.apk"], description: "Please select APK")
        string(name: "Tags", defaultValue: "@", trim: true, description: "Please enter the desired tags")
    }
    stages{
        stage('Build'){
            steps{
                git "$params.Repositories"
                echo '----->Install a package and it\'s dependencies<-----'
                script{
                    bat "npm install"
                }
            }
        }
        stage('Running tests'){
            steps{
                script{
                    sleep(time: 1, unit: "SECONDS")
                    bat "npm run wdio -- --app=$Apps --deviceName=$Device_Name --cucumberTags=$Tags"
                }
            }
        }
        stage('Publish Report'){
            steps{
                allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
            }
        }
    }
}