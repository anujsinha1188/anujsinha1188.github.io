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

cmd-> mvn archetype:generate <- create a simple application class
generate project from existing templete
Different arctype (modal) on how you want your project to structure
Predefined arctype

enter selecte default. -> groupId like 'com.name.' artifactID like

in pom.xml -> name and artifactId can have different name

go to directory pom.xml -> mvn compile <- compile thge project
mvn package <- builds jar in target folder, also runs test cases
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
Group ID - below all in pom.xml
ArtifactID
Version
Package
  
  
  
  
