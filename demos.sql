create database demos;
use demos;

create table stories (
	title varchar(100),
    author varchar(100)
);

create table users (
	firstName varchar(100),
    lastName varchar(100),
    age int
);

insert into stories(title, author) values ("My first story", "Andrew Kirkman");
insert into stories(title, author) values ("the best story", "Fabio Nolasco");
insert into users(firstName, lastName) values ("Andrew", "Kirkman");
insert into users(firstName, lastName) values ("Fabio", "Nolasco");