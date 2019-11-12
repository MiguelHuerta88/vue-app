<!doctype html>
<html>
	<head>
		<title> @yield('title', 'This is a simple single page app.') </title>
		@include('layouts.head')
	</head>
	<body>
		@yield('content')
	</body>
		@include('layouts.js_scripts')
</html>