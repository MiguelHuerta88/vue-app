Hello {{ $user->first_name }},

	Thank you for registering at Mister Bookman.
	Please click this link: <a href="{{ route('user.activate', ['token' => $user->email_token]) }}">{{ route('user.activate', ['token' => $user->email_token]) }}</a> in order to activate your account.