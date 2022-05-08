import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <div>
                <h2 className='about-me-title text-center'>Blogs</h2>
                <div className='blog'>
                    <div className='blog-1'>
                        <h2>Difference between javascript and nodejs?</h2>
                        <p>
                            <b>1. NodeJS : </b>
                            NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.
                            <br />
                            <b>2. JavaScript : </b>
                            Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.

                        </p>
                    </div><br />
                    <div className='blog-2'>
                        <h2>When should you use nodejs and when should you use mongodb?</h2>
                        <p>
                            <b>NodeJS : </b>
                            Any project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language. There are other similar tools for other languages such as Python, Java, PHP, C#, C++, Go, etc...
                            <br />
                            So, if you want to write some kind of stand-alone program or server in Javascript, then you can use nodejs for it.
                            <br />
                            <b>MongoDB : </b>
                            If your application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some form of database. There are dozens of popular databases. MongoDB is one such database. MariaDB, MySql, CouchDB, DynamoDB (on AWS), Postgres are examples of other databases. Different databases have different strengths (things they are best at) and different ways of using them so it's a whole different question to choose the right/best database for what you're doing.

                        </p>
                    </div><br />
                    <div className='blog-3'>
                        <h2>Differences between sql and nosql databases ?</h2>
                        <p>
                            <b>SQL : </b>
                            1.RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS) <br />
                            2.These databases have fixed or static or predefined schema <br />
                            3.These databases are not suited for hierarchical data storage. <br />
                            4.These databases are best suited for complex queries <br />
                            5.Vertically Scalable <br />
                            6.Follows ACID property <br />
                            <b>NoSQL : </b>
                            1.Non-relational or distributed database system. <br />
                            2.They have dynamic schema <br />
                            3.These databases are best suited for hierarchical data storage. <br />
                            4.These databases are not so good for complex queries. <br />
                            5.Horizontally scalable <br />
                            6.Follows CAP(consistency, availability, partition tolerance) <br />
                        </p>
                    </div><br />
                </div>
            </div>
        </div>
    );
};

export default Blogs;