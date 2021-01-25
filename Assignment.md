**Preface**

Read the details below and the epic details multiple times to ensure you understand what is expected.  If anything is unclear, DO NOT hesitate to ask.  DO NOT make assumptions.

**Goal:** Solve bad user data problem by conforming to specification found in the epic.

**Criteria For Success**

- User data is displayed on page correctly after correction
  - This should include the proper css styling
- A single promise chain is used to complete entire solution

**File information**

I have created a branch for this issue.  Within this branch is a new folder called ```userProject```.  There are 2 files which you will need to edit to complete this task, ```public/solution.js``` and ```public/index.html```.  The index will be used to display the returned data from the server.  It should be self-explanatory on how to use it to create dom elements for each user as well as where to display errors.  You can find a more "complete" example of the final results in ```example.html```

**Server**

Your server is a simple node.js application.  On the command line within the ```userProject``` folder, type ```node server.js``` to start it.  While working, you should not need to start and stop it. It was created very quickly though, so it there is a problem with it, please ask.  Once started, you can access the index page using the url ```http://localhost:4000/index.html```.  API calls can be access without the full URL.  ie: ```/users```.  All update endpoints use the POST method.  Because the server will not need to be stopped, changes you make to the data will persist.  Therefore, I have included a button to return the data to its original state.

**Task List**

Here is the latest task list per our discussion.

* Fetch user, hobbies, and favorites data from server
* Iterate over user data to correct the state field
* Iterate over the hobbies to correct the experience level based on years played
* Iterate over favorites to correct missing types
* Send updated user data to server
* Send updated hobbies to server
* Send updated favorites to server
* Display updates returned from the calls organized by users. A user, their hobbies, then their favorites
  * success criteria: last_modified is set to "now"
  * fail criteria: returned record contains ```error``` field

**Note**
