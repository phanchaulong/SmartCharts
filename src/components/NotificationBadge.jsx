import React from 'react';

const NotificationBadge = ({
    notificationCount,
}) => {
    if (!notificationCount) return null;

    return (
        <span className={`sc-notification-badge ${notificationCount > 9 ? 'x2' : ''}`}>
            {notificationCount}
        </span>
    );
};

export default NotificationBadge;
