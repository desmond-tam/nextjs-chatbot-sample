// app/api/set-token/route.ts
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

// Token generation is performed exclusively on the server to safeguard against 
// client-side exposure and preserve the integrity of authentication flows.

// this is only for guest token, for more security, we need to use b2c or Microsoft Entra Id to allow user to sign in
// and use the user's sign in token 
// to access the server.
const getToken = () => {
    const audience = process.env.AUDIENCE;
    const clientId = process.env.CLIENT_ID;
    const secretKey = process.env.SECRET_KEY;
    const now = Math.floor(Date.now() / 1000);
    const claims =     {
        aud: audience,
        iss: clientId,
        sub: clientId,
        exp: now + 30 * 60,
        nbf: now - 300,
        jti: crypto.randomUUID(),
        email:'dummy@hotmail.com'
    };

    const token = jwt.sign(claims,secretKey,{
        algorithm: 'HS256'
    });
    return token;
}

export async function GET(request) {
    const url = new URL(request.url);
    const returnTo = url.searchParams.get('returnTo') || '/';

    const token = getToken();
    const cookieStore = await cookies();
    cookieStore.set('guestToken',token);

    return NextResponse.redirect(new URL(returnTo, request.url));
}
