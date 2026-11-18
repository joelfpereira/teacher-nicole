##### Teacher Nicole v5.7

Adds the first Microsoft 365 Outlook connection UI to the validated V5.6.2 baseline. Nicole/admin can securely start the OAuth flow through the Supabase `outlook-auth-start` Edge Function, and the dashboard displays the connected/error callback result. No Microsoft credentials or tokens are stored in frontend code, and calendar event synchronization is not enabled yet.
