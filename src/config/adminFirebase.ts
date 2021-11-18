import * as admin from 'firebase-admin';

import serviceAccount from './serviceAccountKey.json';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: 'wannago-ca1bf',
      clientEmail:
        'firebase-adminsdk-qzy3l@wannago-ca1bf.iam.gserviceaccount.com',
      privateKey:
        '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDSbX8NcKDvrQfn\nA1D9Cse7luV6ca0ggP5U8LPbkY3hN9qFrKRZfuIx5/XrterjIrPgM7dyDrs10JIi\nJAeJisKg2ZLEeazPs0kDDyvVuZprsaFpPUwNNn5FsJ+HTP1cnHd95RgF9thjhizT\nAnweAVEnQ5kqmX//R5u1umJ525R+NzD8cTKIZnZIhqkDywNnanI95pfR2/b9HGRT\ndWvwvGej7cfpxFBc2EGCDWJNoEwgnrNODqxeXHVDjNwc4VlmsK+YSzWJQyND9WS5\nS4l98UwVPEjX/VJkIb03TbqauPHtOWdlDIx27f83pz1IapXv0vfIr9KGnlYBsDdi\nFjqCDKwbAgMBAAECggEACN2yMN6iHdcXzbdAMr3BG8K1/e7do4dir+gSqaKp7Gd7\n57LM5Ma3ZV6eemCs1ZjTbe9Nm9GlpfBiMP5YfKrvnBelkdsYR1LkERCAuCtKgwv1\n7KKArM+OiioDFZAp3mE0K6rEHaQ3U8/hlHZtoAxN3y5a8+HS9BL94hvbSXms1QLF\n4Du9UCEbZ+ke7EdXbCKtQqOmkjatkh6t+YE5IXqki740a+TWDBKTfpRe2ZT1tGwx\nkh5iJW33TJ1UUqpLI2oBt/ybG36KuiWnvs/PvzpSHHQSZ3AoRAK3Do/FA/8fqK9M\n5Fta0ZCkqcBcV7g+6j2UYWmswJ0P7rGuT3TE2kyhqQKBgQDuPzDXrAMMMiJ/6eUV\nCk5SoZKwJhORZRu2SzIDLVBFfctqMoLpJc2U08SRJepEWyQ9JiK+ixNAS+tezu9u\newVFlyGJ9P7yP92VQ1v1GOp6Kz6/8q1ZFjvXO6xso809aRNrqfNt+Pg5OdCbdkIz\n4qDtv0wo/T68GLOpqUXtwK0NlQKBgQDiG6BkWyM1i6XJ2bs0wMBKS1wtKdiMZ7rz\n6zoDVtpdIUiPjvSeMAEPPnmVJj7N/ZdBX++qdJd6ymjIcK5FP2ZwPkTCapepzomC\nhUz3fDYSJMB3DE4AXHf2ynTosYVKw7z+sIvFvGCpHz0KvDXVWfrl/HvzR+kbPL1q\n2aA1G52G7wKBgQCKWyIXLWp7q6XDWOZTSK/hZrlUGFimx+vG+nYpyCfkoz/9BSZn\nFTAFLNHrZPReC/vIkxv8QbHFVhFy9oOvSjvuhOzSO/fOYO5iX0LI3FZW6kQ/nkOz\nB6lqvdnNIXbwIdRIYuLeS4aDXSLbFVsu3H6OcthcuWy0OTgk4AufHZSh3QKBgH+X\nQ10eKLIwiW9sFD3ifx/tgqhhsrcYWeEG3gfAXRysiXupGdSiFhb6FDXcDRjEfzP+\n5Ql1HX3G9nYVT+H3suCn4rkq2UaTK/mhKxuE1iZK4ujK4sFFbNSwzmP4uNTFu8Kk\n8Vq1wH3vCM0kA+TPD8v0PCW+cIZUMjc3czZEzRG1AoGACmoWngLBis1Viw6120N+\nFHgjrPQjqzwHMx7ONxoocaJJMX1NKNIleoYCRV8YjXMqyf6qgQBAacNfku33ScIg\ntmAlsHFZzQm+YsldjKld/y6UdR8ZTDPLSuCVTeFk8taGPcZshMFbU+3L2703I+At\nRwlbowzSNNAKZ1xQLPoayxY=\n-----END PRIVATE KEY-----\n'.replace(
          /\\n/g,
          '\n'
        ),
    }),
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  });
}
const adminAuth = admin.auth();
export { adminAuth };
