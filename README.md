# nextjs-chatbot-sample

The next js application using tailwind

Deployment

1. The deployment depends SSR or purely front end that can be deployed to static app service

Demonstration

1. **Guest Access** : A lightweight token is securely generated on the server and transmitted via HTTP-only cookie or SSR-bound headers—ensuring it remains inaccessible via browser dev tools.The guest token is generated on server side, hidden from F12 Developer mode.
2. **Secure Login (MSAL)** : If elevated access is required, the app integrates MSAL for secure, Entra ID-backed authentication, with tokens scoped and stored in compliance with best practices.
3. **Admin Messaging** : SSR is used to render privileged system messages server-side, reducing exposure and enabling audit-friendly delivery.
4. **User Conversations** : Non-sensitive conversation threads are rendered client-side for interactive display, leveraging hydration and progressive loading.
