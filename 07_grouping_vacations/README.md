<h1 align = "center">7th Task.GROUPING VACATIONS</h1>

## Guide:

1.  <a href = "https://nodejs.org/uk" target="_blank" rel="noreferrer noopener">Need
    NODE.js.</a>.
2.  Write in terminal `cd src`.
3.  Write in terminal:

- `npm start` or `node index.js` to group vacations.

4. The original file and normalized files can be found in the directory `./data`

<h2 align = "center"> Task description.</h2>

Let's imagine we have a JSON file with a list of developers. Each has a unique
id, name, as well as different vacation periods and other information. This data
we need to format into a more convenient and universal form.

In the original JSON, in a situation where the user has multiple vacation
periods, this information is output as a separate object for with the user name
repeated.

`[ "_id":"6196a33a3a853300128602eb", "user":{ "_id":"60b7c1f04df06a0011ef0e76", **"name":"Laurence Knox"** }, "usedDays":3, "startDate":"2021-11-19", "endDate":"2021-11-23" }, { "_id":"61a3c3bb3a85330012864b5b", "user":{ "_id":"60b7c1f04df06a0011ef0e76", **"name":"Laurence Knox"** }, "usedDays":2, "startDate":"2021-12-09", "endDate":"2021-12-10" } ]`

This is an example that shows that one user can have multiple vacation records.

👉You can find the original JSON here.

### Requirements

As a result we should transform the original JSON in the following way:

1. User must occur once in JSON regardless of the number of vacations taken;
2. The user should have an array of vacations with relevant information, in a
   nice and readable way;
3. In the resulting JSON there should be only the following keys: `userId`,
   `userName`, and `vacations`.

An ideal result must have the following structure:

`[ { "userId":"60b7c1f04df06a0011ef0e76", "userName":"Laurence Knox", "vacations":[ { "startDate":"2021-11-19", "endDate":"2021-11-23" }, { "startDate":"2021-12-09", "endDate":"2021-12-10" } ] } ]`

---

<h2 align = "center"><a href="https://www.linkedin.com/in/olexiy-kiselyov/" target="_blank" rel="noreferrer noopener">
Linkedin of developer</a></h2>
