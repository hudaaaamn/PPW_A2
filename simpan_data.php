<?php
// Mengambil data dari formulir HTML
$nama = $_POST['nama'];
$email = $_POST['email'];
$telpon = $_POST['telpon'];
$pesan = $_POST['pesan'];

// Membuat koneksi ke database MySQL
$host = "localhost"; // Ganti sesuai dengan host Anda
$username = "root"; // Ganti sesuai dengan username database Anda
$password = ""; // Ganti sesuai dengan password database Anda
$database = "simpan_data"; // Ganti sesuai dengan nama database Anda

$conn = mysqli_connect($host, $username, $password, $database);

// Memeriksa koneksi
if (!$conn) {
    die("Koneksi gagal: " . mysqli_connect_error());
}

// Menyimpan data ke tabel
$sql = "INSERT INTO data (nama, email, telpon, pesan) VALUES ('$nama', '$email', '$telpon', '$pesan')";

if (mysqli_query($conn, $sql)) {
    echo ('Location:'.$_SERVER('index.html'));
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}


// Menutup koneksi
mysqli_close($conn);
?>
