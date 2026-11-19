###### Teacher Nicole v5.8

Adds creation-only Outlook calendar synchronization for new one-off lessons. After a lesson is inserted into Supabase, the authenticated admin calls the server-side outlook-create-event Edge Function; the Microsoft event ID is stored on the lesson and synced lessons show an admin-only Outlook synced badge. Recurring lessons, edits, completions, cancellations, historical lessons and student behavior remain unchanged.
