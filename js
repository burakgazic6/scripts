#!/bin/bash

echo "dosya adı : "
read x

mkdir $x 

cd $x 

echo '
<!DOCTYPE html>
<html lang="tr">
	<head>
		<meta charset="UTF-8">
		<title></title>
		<link rel="stylesheet" href="style.css">
	</head>
	<body>

		<script src="main.js"></script>
	</body>
</html>
' >> index.html

echo '
window.alert("SJ") ;
' >> main.js

touch style.css

cd ..


