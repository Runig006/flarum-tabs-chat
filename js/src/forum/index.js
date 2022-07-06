
import { extend } from 'flarum/common/extend';
import LinkButton from 'flarum/common/components/LinkButton';

app.initializers.add('runig006/flarum-tabs-chat', () => {
  if ('acpl-mobile-tab' in flarum.extensions) {
    const components = require('@acpl-mobile-tab');
    const MobileTab = components.components.MobileTab;
    const MobileTabItem = components.components.MobileTabItem;

    extend(MobileTab.prototype, 'items', (items) => {
      //items.remove('notifications');
      items.add(
        'notifications',
        <LinkButton
          href={app.route('notifications')}
          icon="fas fa-bell"
          title={app.translator.trans('core.forum.notifications.title')}
          className="Dropdown NotificationsDropdown"
        >
          <span className="unread">0</span>
          {app.translator.trans('core.forum.notifications.title')}
        </LinkButton>,
        80
      );

      items.add('chat',
        <span class="Button" onclick={() => app.chat.toggleChat()}>
          <i aria-hidden="true" class="icon fas fa-comment Button-icon"></i>
          <span class="Button-label">
            <span className="unread">0</span>
            Chat
          </span>
        </span>, 80);
    })
  }
});