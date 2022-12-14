import { Content } from './content';
import { Notification } from './notification';
describe('Notification', () => {
	it('shold be able to create a notification', () => {
		const notification = new Notification({
			content: new Content('New Connection!'),
			category: 'social',
			recipientId: 'example-recipient-id',
			createdAt: new Date(),
		});

		expect(notification).toBeTruthy();
	});
});
