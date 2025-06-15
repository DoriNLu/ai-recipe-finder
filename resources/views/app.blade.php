<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title inertia>{{ config('app.name', 'Laravel') }}</title>
    @viteReactRefresh
    @vite(['resources/js/app.jsx'])
</head>
<body class="font-sans antialiased">
    <!-- <p>De proba</p> -->
    @inertia
</body>
</html>
