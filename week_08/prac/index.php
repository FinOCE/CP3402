<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Week 8 Prac</title>
</head>

<body>
  <?php
  include "header.php";

  echo "<h1>Hello world!</h1>";

  $random_number = random_int(1, 100);
  echo "<p>A random number is $random_number</p>";

  if ($random_number > 50) {
    echo "<p>$random_number is greater than 50!</p>";
  } else {
    echo "<p>$random_number is less than 50!</p>";
  }

  $attempts = 0;

  do {
    $attempts++;
  } while (random_int(1, 100) < $random_number);

  echo "<p>It took $attempts attempt(s) to get a random number above $random_number!";
  ?>
  <p>
    <?php
    $words = array("This", "page", "was", "made", "using", "php");

    foreach ($words as $word) {
      echo $word . " ";
    }
    ?>
  </p>
  <a href="second.php">Click here to go to the second page</a>
</body>

</html>