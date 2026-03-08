importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "BMUueTFOICuaMJDVdTnKuSp1Xdeg6DcgxdId52_qeF8kQWOuSO7_Lpmw5m_dZwKCotltQqkZ7nhyhBbtsnCPqQk",
  authDomain: "gocklain-bf553.firebaseapp.com",
  projectId: "gocklain-bf553",
  storageBucket: "gocklain-bf553.firebasestorage.app",
  messagingSenderId: "747181228665",
  appId: "1:747181228665:web:bd9dd2cd60b1cd5bb8caa8"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message ', payload);
  
  const notificationTitle = payload.notification.title || 'Новое сообщение';
  const notificationOptions = {
    body: payload.notification.body || 'У вас новое сообщение',
    icon: 'https://gocklain-bf553.web.app/icon.png',
    data: payload.data,
    badge: 'https://gocklain-bf553.web.app/badge.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});