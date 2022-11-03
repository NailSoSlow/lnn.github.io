<?php 
$nameInput = $_POST['name'];
$emailInput = $_POST['email'];
$subjectInput = "New Message from Web";
$messageInput = $_POST['message'];

$mailheader = "From: ".$nameInput."<".$emailInput.">\r\n";
$to = "nelwebonly@gmail.com";
mail($to, $subjectInput, $messageInput, $mailheader)
or die("Error!");
echo"message send";
?>