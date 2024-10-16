import { GOOGLE_APPSCRIPT_URL } from '$env/static/private';

export async function POST({ request }) {
	const requestBody = await request.json();

	// Payload from front-end
	const { name, email, subject, message } = requestBody;

	// Data structure allowed in Google Sheets
	const payload = [
		{
			name,
			email,
			subject,
			message
		}
	];

	// Send payload to Google Sheets
	try {
		const response = await fetch(GOOGLE_APPSCRIPT_URL, {
			method: 'POST',
			body: JSON.stringify(payload), // Send as an array
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (response.ok) {
			return new Response(JSON.stringify('Message sent successfully.'), {
				status: 200
			});
		} else {
			return new Response(JSON.stringify('Failed to send message.'), {
				status: 500
			});
		}
	} catch (error) {
		console.error('Error:', error);
		return new Response(JSON.stringify('Error sending message.'), {
			status: 500
		});
	}
}
