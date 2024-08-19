# FITNESS SAAS

Steps left to do:
[] - Add Stripe Integration
[] - Add the following tables to postgresql:

1. invoices = invoice_id, subscription_id, amount_paid, currency, status, email, user_id
2. subscriptions = id, subscription_id, plan_id, email, user_id, status, stripe_user_id, created_at
3. users = email, first_name, last_name, profile_image_url, user_id, subscription_id,

[] - Implement /dashboard redirect for users on a paid plan
