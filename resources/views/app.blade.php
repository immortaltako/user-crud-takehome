<!DOCTYPE html>
<html>
<head>
    <title>Laravel</title>
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app" data-page="{{ json_encode($page) }}"></div>
    <script src="{{ mix('/js/app.js') }}" defer></script>
</body>
</html>