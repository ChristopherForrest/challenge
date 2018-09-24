# SW Engineer Challenge - Backend

### View live - Coming soon..
## Quick start 
<details>
<summary>Quick Start HTML</summary>

   *When sending to multiple recipients they're to be seperated by a comma*

```
    <form action="https://freeemailservice.herokuapp.com/" method="post"  enctype="application/x-www-form-urlencoded">
        From:
        <br>
        <input type="text" name="from" placeholder="Name">
        <br> To:
        <br>
        <input type="text" name="to" placeholder="Recipients Email">
        <br> Subject:
        <br>
        <input type="text" name="subject" placeholder="Subject">
        <br> cc:
        <br>
        <input type="text" name="cc" placeholder="cc">
        <br> bcc:
        <br>
        <input type="text" name="bcc" placeholder="bcc">
        <br> Message:
        <br>
        <input type="text" name="text" size="50" placeholder="Your message">
        <br>
        <br>
        <input type="submit" value="Send">
        <input type="reset" value="Reset">
    </form>
```
</details>

<details>
<summary>Quick Start CURL</summary>

```
curl -d "from=example@gmail.com&to=example@gmail.com&subject=yousubject&text=yourmessage" -H "Content-Type: application/x-www-form-urlencoded" -X POST https://freeemailservice.herokuapp.com/
```

</details>


## Problem / Solution
Often an application will have its own built in requests/logic for sending emails. This could result in sensitive information such as API credentials to be leaked through the front end of an application.

By decoupling the front end from the back end we are able to send a simple request to the back end service which then deals with our request and returns a response allowing the front end to work independently which may under certain circumstances negate the crashing of the main application regardless of the status of the backend server.

In some cases a decoupled back end may also be benificial when serving multiple applications. This allows the back end to serve any permitted request regardless of location the application is hosted. This also allows for uniform experience across platforms and results in a single code base that needs to be maintained.


## How to use

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

Use the quick starts above or send your own POST request to: https://freeemailservice.herokuapp.com/

## Services / Technologies

ExpressJS - https://expressjs.com/

Mailgun - https://www.mailgun.com/

Sendgrid - https://sendgrid.com/

BodyParser - https://www.npmjs.com/package/body-parser

