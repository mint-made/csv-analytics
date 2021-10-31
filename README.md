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

![CSV data format](https://mint-made-ecommerce-template.s3.eu-west-2.amazonaws.com/a5257b4cabb1e3b08fe775615ef50dce)![CSV data format](https://mint-made-ecommerce-template.s3.eu-west-2.amazonaws.com/f0d44698baa070e21bcc5375dc43db54)

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

This should result in the following output from the terminal:
![Terminal output](https://mint-made-ecommerce-template.s3.eu-west-2.amazonaws.com/9d0418a8b442a2f5bc209b645600f6ac)
This should generate a **dataReport.csv** in the root of the **/csv-analytics** directory that will look like the following:  
![enter image description here](https://mint-made-ecommerce-template.s3.eu-west-2.amazonaws.com/25f016025f57f3c945d247e9c82d5c9f)
![enter image description here](https://mint-made-ecommerce-template.s3.eu-west-2.amazonaws.com/4f44dffaa17f0910a60a2f64211b1268)

### Testing

To run Jest tests to ensure all essential functions in the app are working correctly, run the following in the root of the **/csv-analytics** directory:

```
npm run test
```

### Technologies Utilized

- Node
- csv-parser
- Jest
