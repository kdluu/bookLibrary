# bookLibrary
The	goal	of	this	exercise	is	to	design	and	implement	a	books	library	using	object-oriented	JavaScript
and	PHP.	Use	class	syntax	to	develop	your	objects (on	both	js	and	PhP).	At	a	minimum,	your	design	should
have	the	three	classes	Library,	Shelf,	and	Book.	Write	all	the	code	for	these	objects	in	booksLibrary.js file.
You	should	also	have a	getbooks.php	file	(to	be	run	on	server	side).

1.	Assume	we	have	24 books	in	the	Library.	When	a	user	first	logs	in,	each	shelf	should	have	some
books.	These	books	are	stored	in	the	books.txt (on	the	server	side).
2.	Create	a	three-digit	ID for	each	book.	Note:	when	the	librarian	adds	a	new	book,	you	should
generate a	new	three-digit	ID.
3.	There	are	four	categories	of	books :	Art,	Science,	Sport,	literature.	The	algorithm	for	categorizing
should	be	as	below:
      If (BookID%4==0) categorize book as Art
      if (BookID%4==1) categorize book as science
      If (BookID%4==2) categorize book as Sport
      if (BookID%4==3) categorize book as Literature
4.	Books	of	different	categories	should	be	on	different	shelves.
5.	Each	book	should	have	an	attribute	borrowedBy which	shows	the	user	name	of	the	student	who
borrowed	that	book.	You	can	assume	that	at	the	start,	students	have	borrowed	none	of	the	books.
6.	Each book	should	have	an	attribute	availability that	shows	whether	a	book	is	available or	not.	A
value	of	1	means	it	is	available	whereas	a	value	of	0	means	it	has	been	borrowed.	You	can	assume	that	at
the	start,	all	books	are	available.
7.	Use	the file	"books.txt" on	the	server	side in	order	to	save	availability	and	borrowedBy	attributes	for
each	book
