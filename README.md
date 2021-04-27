# cs3200-final-project

## Project Group

Reilly Haughan (3:25 section 4)  
Cuan Fraser (3:25 section 4)  
Timothy Seymour (1:35 section)  

## Problem Statement

The problem that we are trying to solve is to have an organized view of the entire NBA league, with all teams, coaches, and games accounted for. We want to have the ability to query a database and find out who the coach and players are for a team, what city and conference a team is in, and the schedule of their games. We also need to be able to store user information regarding each player and coach, including the first and last name, username, password, email, DOB, team, and for players also their position.

## UML

UML PDF: [db_design_final_project.pdf](db_design_final_project.pdf)

## Solution Statement

The solution that we implemented we tried to make as modular as possible, so enumerations were used for the conference and position. Coaches and players hold much the same information, so there is an interface for them. We needed to implement one to one relationship between coaches and teams, and a one to many for teams and players. The games have a many to many relationships with games, so that all teams can play in many games.

First, we implemented this entire relational database in MYSQL, so that first we could test that all of the relationships were working as intended, and that all of our data objects worked and could retrieve the information as we expected.
Then, we implemented a data model that connected to the database, that could create, read, update, and delete from the database that we implemented in MYSQL. We decided to implement this in java, using the Data Access Object pattern to map classes to our users and our domains. We created a model that contained all field/properties with their respective data types for all our data objects, with setters, getters, and required constructors.
We also implemented a user interface with React allow a user to execute CRUD operations and have visual feedback on what they were doing.

## User

We have two users in this project. The first User is a player, who has a first and last name, username, password, email, DOB, team and position. The player user has access to everything in the database so that they can see information regarding their team roster and coach, and the schedule of their games.  

The other user is a coach, who has all of the same properties that a player has minus a position field. There is a one to many relationship between teams and players, and a one to one relationship between coaches and teams, as a team has many players and one coach.

## Domain Objects

The first domain object that we have is a Team. The Team has a name, a city, and a conference field. There will be many players and one coach associated with each team. The coach field for a team can not be null, and there must be at least one player.

Another domain object that we have is a Game. A game has a home team, an away team, a location, and a start time. All fields in a game must be not null. You can see the schedule for a specific team by querying the database for all of the games where team X is home team, or team X is away team, or both.

## User to Doman Object Relationship

Teams and Players have a One To Many relationship where Teams can have many Players. This is done by a foreign key of team id in the Player table. This can be seen in the User Interface in Player or Team.

## Domain Object Domain Object Relationship

There are two One To Many relationships between Team and Game. This is for both the Home Team and the Away Team in a game. Therefore, Game has two foreign keys for two teams. This can be seen in the User Interface in Team or Game.


## Portable Enumeration

Position is the portable enumeration in our project. It consists of possible positions for players:

- "ONE"
- "TWO"
- "THREE"
- "FOUR"
- "FIVE"

The position itself is the primary key in the Position table. It is a foreign key in the player table.

## User Interface

The user interface is built with React. It represents the Team, Game and Player tables. Records can be created for all three models and include the ability to select foreign keys by selecting from a list. Enumerations are also selectable from a list. Relationships are presented as specified in P3.  

The project uses maven and with "mvn compile" and running DemoApplication with the MySQL server running with default login details as given in class (root, P@ssw0rd), the User Interface will display with the following URLs.

Local URLs:

- Teams: <http://localhost:8080/react/index.html#/teams>
- Games: <http://localhost:8080/react/index.html#/games>
- Players: <http://localhost:8080/react/index.html#/players>
