import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CancelNotification } from './cancel-notification';
import { Notification } from '@application/entities/notification';
import { Content } from '@application/entities/content';

describe('Cancel Notification', () => {
	it('should be able to cancel a notification', async () => {
		const notificationsRepository = new InMemoryNotificationsRepository();
		const cancelNotification = new CancelNotification(notificationsRepository);

		const notification = new Notification({
			category: 'social',
			content: new Content('New Connection Request'),
			recipientId: 'example-recipient-id',
		});
		await notificationsRepository.create(notification);
		await cancelNotification.execute({
			notificationId: notification.id,
		});

		expect(notificationsRepository.notifications[0].canceledAt).toEqual(
			expect.any(Date),
		);
	});
});
