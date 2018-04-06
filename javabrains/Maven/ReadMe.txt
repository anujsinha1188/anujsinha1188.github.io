*****Introduction and Setting up Part 1 & Part 2*****
Maven
  -Build Tool
  -Project Management Tool
  
Common Problems and activities:
  -Multiple jars
  -Dependencies and versions
  -Project structure
  -Bulding, publishing and deploy
  
Download from: https://maven.apache.org

Maven do its activities through repositories
Machine should connected to internet

cmd
->-> mvn archetype:generate <- create a simple application class
generate project from existing templete
Different arctype (modal) on how you want your project to structure
Predefined arctype

enter selecte default. -> groupId like 'com.name.' artifactID like

in pom.xml -> name and artifactId can have different name

go to directory pom.xml
->-> mvn compile <- compile thge project
->->mvn package <- builds jar in target folder, also runs test cases
java -cp target\MavenTestApp-1.0-SNAPSHOT.jar org.kaushik.javabrains.App <- to run java code

Maven repository has 2 types of information:
  -Archetype Info <- details of different types of project we wanna create
  -Dependency Info <- List of all dependent jar
  
*****Understanding Archetypes and pom.xml*****
Maven
  -Project template
  -Build

mvn archetype:generate
  -Folder structure
  -pom.xml
  
input to archetype:
  Archetype - structure of project
  Group ID - below all in pom.xml - below 3 to identify dependency
  ArtifactID
  Version
  Package
  
pom.xml
  -Maven co-ordinates - identifiers
  -Metadata
  -Build Information - is project jar or war 
  -Resources and dependencies
  
*****Maven Build Phases*****
Build lifecycle
Consist of Phases
Default behaviour of phases
Specify the build phase you need. Previous phases automatically run

Some Phases:
  -validate
  -compile
  -test
  -package
  -install
  -deploy
  
->-> mvn install <- installes the package to the repository or local repository
  
*****Adding a Dependency*****

->-> mvn clean <- clean all that was done previouly by maven
get dependency from maven respository search or https://mvnrepository.com
insert in pom.xml

*****A Web Application Using Maven*****

remote not working

*****Introduction to Plugins with the Maven Compiler Plugin*****
Maven 2 uses 1.4 plugin by default so generics do not work
Maven 3 uses 1.5 plugin by default so generics work

*****Using the Jetty Plugin*****
Jetty: small container, Also can use tomcat
 
*****Eclipse Plugin for Maven and Maven Plugin for Eclipse*****
Can integrate and also install Maven plugins to run command line commands in eclipse

  
  
  
