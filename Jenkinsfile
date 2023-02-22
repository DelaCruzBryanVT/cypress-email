pipeline{
    agent any
    parameters{
        string(name:"CONFIGCYPRESS", defaultValue:"cypress.config.ts", description:"Ej:cypress.config.ts")
        string(name:"BASEURL", defaultValue:"https://www.google.com", description:"Ej:https://www.google.com")
         string(name:"USER", defaultValue:"Andrea", description:"Ej:Andrea")
          string(name:"PASS", defaultValue:"Andrea.2023", description:"Ej:Andrea.2023")
           string(name:"VERSION", defaultValue:"1.64.0.143", description:"Ej:1.64.0.143")
            string(name:"EMAIL1", defaultValue:"as7moc@hotmail.com", description:"Ej:as7moc@hotmail.com")
             string(name:"EMAIL2", defaultValue:"delacruzbryanvt@gmail.com", description:"Ej:delacruzbryanvt@gmail.com")
    }
    stages{
        stage('Grupo1'){
            steps{
                bat npx cypress run --config-file $CONFIGCYPRESS --config baseUrl=$BASEURL --env urlDomain=$BASEURL,user=$USER,pass=$PASS,version=$VERSION,email=$EMAIL1 --headed -b chrome
            }
        }

         stage('Grupo2'){
            steps{
                bat npx cypress run --config-file $CONFIGCYPRESS --config baseUrl=$BASEURL --env urlDomain=$BASEURL,user=$USER,pass=$PASS,version=$VERSION,email=$EMAIL2 --headed -b chrome
            }
        }
    }
}