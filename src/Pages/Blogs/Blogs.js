import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div>
                <h2>Q1: What is the differences between SQL and NoSQL?</h2>
                <p>
                    SQL means Structured Query Language whereas NoSQL means Not
                    only SQL.
                </p>
                <p>1. Type: SQL databases are primarily called as Relational
                    Databases (RDBMS); whereas NoSQL database are primarily
                    called as non-relational or distributed database.
                </p>
                <p>
                    2. Language: SQL databases defines and manipulates data based
                    structured query language (SQL). Seeing from a side this
                    language is extremely powerful. <br />A NoSQL database has
                    dynamic schema for unstructured data. Data is stored in many
                    ways which means it can be document-oriented,
                    column-oriented, graph-based or organized as a KeyValue
                    store.
                </p>
                <p>
                    Property followed: SQL databases follow ACID properties
                    (Atomicity, Consistency, Isolation and Durability) whereas
                    the NoSQL database follows the Brewers CAP theorem
                    (Consistency, Availability and Partition tolerance).
                </p>
            </div>
            <div>
                <h2> Q2: What is the difference between javascript and NodeJS?</h2>
                <>
                    Javascript is a programming language. On the other hand,
                    Nodejs is a javascript runtime. Nodejs allows Javascript code
                    to run outside the browser. Nodejs comes with a lot of modules
                    and mostly used in web development. <br />
                    The differences between them are discussed below: <br />
                    <ul className="list-decimal list-inside space-y-3">
                        <li>
                            Javascript is a programming language that is used for
                            writing scripts on the website.But NodeJS is a Javascript
                            runtime environment.
                        </li>
                        <li>
                            Javascript can only be run in the browsers. We can run
                            Javascript outside the browser with the help of NodeJS.
                        </li>
                        <li>
                            It is basically used on the client-side. It is mostly used
                            on the server-side.
                        </li>
                        <li>
                            Javascript is capable enough to add HTML and play with the
                            DOM. Nodejs does not have capability to add HTML tags.
                        </li>
                        <li>
                            Javascript is used in frontend development. Nodejs is used
                            in server-side development.
                        </li>
                    </ul>
                </>
            </div>
            <div>
                <h2>Q4: How does NodeJS handle multiple requests at the same time?</h2>
                <p>
                    NodeJS receives multiple client requests and places them into
                    EventQueue. NodeJS is built with the concept of event-driven
                    architecture. NodeJS has its own EventLoop which is an
                    infinite loop that receives requests and processes them.
                    EventLoop is the listener for the EventQueue. If NodeJS can
                    process the request without I/O blocking then the event loop
                    would itself process the request and sends the response back
                    to the client by itself. But, it is possible to process
                    multiple requests parallelly using the NodeJS cluster module
                    or worker_threads module.
                </p>
            </div>
        </div>
    );
};

export default Blogs;