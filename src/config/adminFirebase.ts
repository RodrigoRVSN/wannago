import * as admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
      clientEmail: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
      privateKey: process.env.NEXT_PUBLIC_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  });
}
const adminAuth = admin.auth();
export { adminAuth };
