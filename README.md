# CSV Analytics

### Project Overview

CSV Analytics is an application that enables the user to generate an analytical data report on a single column on data within a csv file. The data report contains:

- Total number of integers
- Mean value of all the integers (to three decimal places)
- Highest occurrence of an integer in a single line
- Most common integer
- High value
- Lowest Value

### CSV data format

When using the app, the format of the **.csv** data should be the following: A single column of numbers with the header at the top being **"number"**, like the image shown below:

![csv data format](https://user-images.githubusercontent.com/53815961/139601267-29d3cc62-8038-44f4-92cd-5c598d63df66.png)![csv format calc](https://user-images.githubusercontent.com/53815961/139601273-9e9e9dd4-e7e7-4cef-8e4a-4c1ccc2fc650.png)



### User Guide

1.  Download the repo, extract the files and open the terminal in the root of the **/csv-analytics** directory and use the following command to install the dependencies.

```
npm install
```

2. Add your **.csv** file containing your data into the root of the **/csv-analytics** directory and rename your csv file to **data.csv** (overwriting the existing **data.csv** file)
3. Run the following command to generate your data report:

```
node src/app.js
```

- This should result in the following output from the terminal:
![terminal-output](https://user-images.githubusercontent.com/53815961/139601283-e77713a1-cd13-4df6-a19b-b463fbfa41e8.png)

- This should generate a **dataReport.csv** in the root of the **/csv-analytics** directory that will look like the following: 
![data report csv](https://user-images.githubusercontent.com/53815961/139601295-4d54f1a7-79a1-4f83-9aae-b4eb6f1cacf7.png)
![data-report-calc](https://user-images.githubusercontent.com/53815961/139601302-7f7128f8-d9b7-4be1-b4b2-dd59e16e091d.png)


### Testing

To run Jest tests to ensure all essential functions in the app are working correctly, run the following in the root of the **/csv-analytics** directory:

```
npm run test
```

### Technologies Utilized

- Node
- csv-parser
- Jest
