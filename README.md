# nextjs-chatbot-sample

The next js application using tailwind

## Disclaimer

This GitHub account is strictly for personal and hobby-related coding projects. The content presented here does not reflect or reproduce any code, materials, or intellectual property associated with my previous professional employment.

No proprietary, confidential, or work-related assets have been copied, reused, or disclosed. All code is authored independently and intended solely for self-learning, experimentation, or creative exploration.

Deployment

1. **Deployment:** Depends on whether the app uses server-side rendering (SSR) or is a purely client-side application. Client-only builds can be deployed to a static app service, while SSR features require a server-capable host.The deployment depends SSR or purely front end that can be deployed to static app service.

Demonstration

1. **Guest Access** : A lightweight token is securely generated on the server and transmitted via HTTP-only cookie or SSR-bound headers—ensuring it remains inaccessible via browser dev tools.
2. **Secure Login (MSAL)** : If elevated access is required, the app integrates MSAL for secure, Entra ID-backed authentication, with tokens scoped and stored in compliance with best practices.
3. **Admin Messaging** : SSR is used to render privileged system messages server-side, reducing exposure and enabling audit-friendly delivery.
4. **User Conversations** : Non-sensitive conversation threads are rendered client-side for interactive display, leveraging hydration and progressive loading.
