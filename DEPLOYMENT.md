# Deployment

This project is set up for Docker Compose with Caddy in front of the Next.js app.

## VPS Setup

1. Point your domain DNS `A` record to the VPS IP.
2. Install Docker and Docker Compose on the VPS.
3. Copy `.env.example` to `.env`.
4. Set:
   - `SITE_ADDRESS=yourdomain.com`
   - `RESEND_API_KEY=...`
   - `CONTACT_TO_EMAIL=...`
   - `CONTACT_FROM_EMAIL="Null Cat <no-reply@yourdomain.com>"`
5. Start production:

```bash
docker compose up -d --build
```

Caddy will automatically request and renew HTTPS certificates for `SITE_ADDRESS`.

## Updating

After pulling new code:

```bash
docker compose up -d --build
```

## Logs

```bash
docker compose logs -f
```
