# SW Engineer Challenge - Backend

### View live - https://christopherforrest.github.io/formexample.github.io/
## Quick start 

<details>
<summary>Quick Start CURL</summary>

```
curl -d "from=example@gmail.com&to=example@gmail.com&subject=yousubject&text=yourmessage" -H "Content-Type: application/x-www-form-urlencoded" -X POST https://freeemailservice.herokuapp.com/
```

</details>

<details>
<summary>Quick Start HTML</summary>

   *When sending to multiple recipients they're to be seperated by a comma*

```
<form action="https://freeemailservice.herokuapp.com/" method="post" enctype="application/x-www-form-urlencoded	">
    From:
    <br>
    <input type="text" name="from" placeholder="Name" required >
    <br> To:
    <br>
    <input type="email" name="to" placeholder="Recipients Email" required>
    <br> Subject:
    <br>
    <input type="text" name="subject" placeholder="Subject" required>
    <br> cc:
    <br>
    <input type="email" name="cc" placeholder="cc">
    <br> bcc:
    <br>
    <input type="email" name="bcc" placeholder="bcc">
    <br> Message:
    <br>
    <input type="text" name="text" size="50" placeholder="Your message" required>
    <br>
    <br>
    <input type="submit" value="Send">
    <input type="reset" value="Reset">
</form>
```
</details>

<details>
<summary>Quick Start HTML + Bootstrap/CSS (Boilerplate)</summary>

Index.html

```
<!DOCTYPE html>
<html>

<head>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Example</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
    
</head>

<body>

    <div class="container">
        <form action="https://freeemailservice.herokuapp.com/" method="post" enctype="application/x-www-form-urlencoded">

            <div class="form-group">
                <label for="from">Name<span class="required">*</span></label>
                <input type="text" name="from" class="form-control" id="from" aria-describedby="emailHelp" placeholder="Name" required>
            </div>
            <div class="form-group">
                <label for="to">Recipients<span class="required">*</span></label>
                <input type="email" name="to" class="form-control" id="to" aria-describedby="emailHelp" placeholder="Example@gmail.com, Example@gmail.com"  class="form-control" multiple required>
            </div>

            <div class="form-group">
                <label for="subject">Subject<span class="required">*</span></label>
                <input type="text" name="subject" class="form-control" id="subject" aria-describedby="emailHelp" placeholder="Subject" required>
            </div>

            <div class="form-group">
                <label for="cc">CC</label>
                <input type="email" name="cc" class="form-control" id="cc" aria-describedby="emailHelp" placeholder="Example@gmail.com, Example@gmail.com"  class="form-control" multiple>
            </div>

            <div class="form-group">
                <label for="bcc">BCC</label>
                <input type="email" name="bcc" class="form-control" id="bcc" aria-describedby="emailHelp" placeholder="Example@gmail.com, Example@gmail.com"  class="form-control" multiple>
            </div>

            <div class="form-group">
                <label for="exampleFormControlTextarea1">Message<span class="required">*</span></label>
                <textarea class="form-control" name="text" id="exampleFormControlTextarea1" rows="3" placeholder="Your Message" required></textarea>
            </div>
        
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>

</body>

</html>
```

main.css

```
body{
    background-color:whitesmoke;
}

.container{
    background-color:aliceblue;
    border:black 1px solid;
    padding:3%;
    margin-top:1%;
}
.required{
    color:red;
}
```

</details>



## Problem / Solution
Often an application will have its own built in requests/logic for sending emails. This could result in sensitive information such as API credentials to be leaked through the front end of an application.

By decoupling the front end from the back end we are able to send a simple request to the back end service which then deals with our request and returns a response allowing the front end to work independently which may under certain circumstances negate the crashing of the main application regardless of the status of the backend server.

In some cases a decoupled back end may also be benificial when serving multiple applications. This allows the back end to serve any permitted request regardless of location the application is hosted. This also allows for uniform experience across platforms and results in a single code base that needs to be maintained.


## How to use

Use the quick starts above or send your own POST request to: https://freeemailservice.herokuapp.com/

This application takes in a single POST request that has four manditory fields:
* to
* from
* subject
* text 

and two optional fields

* cc (Carbon Copy)
* bcc (Blind Carbon Copy)

*These fields are dictated by Mailgun and Sendgrid*

## Sample request
```
    }   
        from: 'bob',
        to: 'exampleEmail@gmail.com',
        subject: 'Your subject',
        text: 'Your Message'
    };

```



## Services / Technologies

ExpressJS - https://expressjs.com/

Mailgun - https://www.mailgun.com/

Sendgrid - https://sendgrid.com/

BodyParser - https://www.npmjs.com/package/body-parser

JEST - https://jestjs.io/


