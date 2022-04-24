<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Week 8 Prac - Page 2!</title>
</head>

<body>
  <?php
  include "header.php";
  ?>
  <p>Well lookie here, it's another page!</p>
  <?php
  function createParagraph($message)
  {
    echo "<p>" . $message . "</p>";
  }

  createParagraph("Here's a paragraph made with a function!");
  createParagraph("And here's another");
  createParagraph("...and another");
  ?>
  <a href="index.php">Click here to go to the first page</a>
</body>

</html>