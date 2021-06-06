--- create store table

create table store(
   store_id serial not null primary key,
   store_name varchar(100) null ,
   store_code varchar(10) not null,
   craeted_on timestamp not null,
   created_by varchar(50) not null   
);


-- create book table

CREATE TABLE book (
	book_id serial NOT NULL,
	book_title varchar(50) NOT NULL,
	book_description varchar(100) NULL,
	book_auther varchar(50) NOT NULL,
	book_publisher varchar(50) NOT NULL,
	book_pages int4 NULL,
	store_code varchar(10) NOT NULL,
	created_on timestamp NOT NULL,
	created_by varchar(50) NOT NULL,
	CONSTRAINT book_pkey PRIMARY KEY (book_id)
);